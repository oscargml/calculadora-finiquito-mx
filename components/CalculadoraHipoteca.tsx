'use client';
import { useMemo, useState } from 'react';
import { BANKS, ISAI_STATES } from '@/lib/hipoteca-data';

const fmt = (n: number) => '$' + Math.round(n).toLocaleString('es-MX');
const fmtFull = (n: number) =>
  '$' + n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

interface AmortRow {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

function calcMortgage(principal: number, annualRate: number, termYears: number) {
  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  if (r === 0 || principal <= 0) return null;
  const pmt = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const schedule: AmortRow[] = [];
  let balance = principal;
  for (let i = 1; i <= n; i++) {
    const interest = balance * r;
    const principalPmt = pmt - interest;
    balance = Math.max(0, balance - principalPmt);
    schedule.push({ period: i, payment: pmt, principal: principalPmt, interest, balance });
  }
  return { pmt, totalPayment: pmt * n, totalInterest: pmt * n - principal, schedule };
}

export default function CalculadoraHipoteca() {
  const [propertyValue, setPropertyValue] = useState(2500000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [termYears, setTermYears] = useState(20);
  const [bankId, setBankId] = useState('banorte');
  const [customRate, setCustomRate] = useState(9.15);
  const [viewMode, setViewMode] = useState<'annual' | 'monthly'>('annual');
  const [stateCode, setStateCode] = useState('CMX');

  const bank = BANKS.find((b) => b.id === bankId);
  const annualRate = bankId === 'custom' ? customRate : (bank?.nominalRate ?? customRate);
  const catEst = bankId === 'custom' ? annualRate + 2.3 : (bank?.cat ?? annualRate + 2.3);
  const downPayment = propertyValue * (downPaymentPct / 100);
  const principal = propertyValue - downPayment;

  const result = useMemo(
    () => calcMortgage(principal, annualRate, termYears),
    [principal, annualRate, termYears]
  );

  const annualRows = useMemo(() => {
    if (!result) return [];
    const rows: { year: number; payment: number; principal: number; interest: number; balance: number }[] = [];
    for (let y = 1; y <= termYears; y++) {
      const slice = result.schedule.slice((y - 1) * 12, y * 12);
      rows.push({
        year: y,
        payment: slice.reduce((s, r) => s + r.payment, 0),
        principal: slice.reduce((s, r) => s + r.principal, 0),
        interest: slice.reduce((s, r) => s + r.interest, 0),
        balance: slice[slice.length - 1]?.balance ?? 0,
      });
    }
    return rows;
  }, [result, termYears]);

  const isai = ISAI_STATES.find((s) => s.code === stateCode);
  const isaiCost = isai ? (propertyValue * isai.isaiRate) / 100 : 0;
  const notaryMin = isai ? (propertyValue * isai.notaryFeeMin) / 100 : 0;
  const notaryMax = isai ? (propertyValue * isai.notaryFeeMax) / 100 : 0;
  const registration = isai ? (propertyValue * isai.registrationFeePct) / 100 : 0;

  function exportCSV() {
    if (!result) return;
    const csv =
      'Mes,Pago,Capital,Intereses,Saldo\n' +
      result.schedule
        .map(
          (r) =>
            `${r.period},${r.payment.toFixed(2)},${r.principal.toFixed(2)},${r.interest.toFixed(2)},${r.balance.toFixed(2)}`
        )
        .join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = 'tabla-amortizacion.csv';
    a.click();
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Inputs */}
          <div className="p-6 space-y-5 lg:border-r border-gray-100">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Valor del inmueble (MXN)
              </label>
              <input
                type="number"
                value={propertyValue}
                step={50000}
                min={100000}
                onChange={(e) => setPropertyValue(Math.max(100000, +e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-semibold text-gray-700">Enganche</label>
                <span className="text-sm font-bold text-blue-700">
                  {downPaymentPct}% — {fmt(downPayment)}
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={50}
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(+e.target.value)}
                className="w-full accent-blue-700"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-semibold text-gray-700">Plazo</label>
                <span className="text-sm font-bold text-blue-700">{termYears} años</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                value={termYears}
                onChange={(e) => setTermYears(+e.target.value)}
                className="w-full accent-blue-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Banco / Institución
              </label>
              <select
                value={bankId}
                onChange={(e) => {
                  setBankId(e.target.value);
                  const b = BANKS.find((x) => x.id === e.target.value);
                  if (b) setCustomRate(b.nominalRate);
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="custom">Tasa personalizada</option>
                {BANKS.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} — {b.nominalRate.toFixed(2)}%
                  </option>
                ))}
              </select>
            </div>

            {bankId === 'custom' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Tasa de interés anual (%)
                </label>
                <input
                  type="number"
                  value={customRate}
                  min={1}
                  max={30}
                  step={0.05}
                  onChange={(e) => setCustomRate(+e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          {/* Results */}
          <div className="p-6 bg-gray-50 space-y-4">
            {result ? (
              <>
                <div className="bg-blue-700 rounded-xl p-5 text-white text-center">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">
                    Mensualidad estimada
                  </p>
                  <p className="text-4xl font-extrabold tracking-tight">{fmt(result.pmt)}</p>
                  <p className="text-xs opacity-75 mt-1">
                    {termYears * 12} pagos fijos durante {termYears} años
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Monto a financiar', value: fmt(principal) },
                    { label: 'CAT estimado', value: catEst.toFixed(2) + '%' },
                    { label: 'Total intereses', value: fmt(result.totalInterest) },
                    { label: 'Total a pagar', value: fmt(result.totalPayment) },
                  ].map((c) => (
                    <div key={c.label} className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        {c.label}
                      </p>
                      <p className="text-lg font-extrabold text-gray-900">{c.value}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-400">Introduce los datos para calcular.</p>
            )}
          </div>
        </div>

        {/* Amortization table */}
        {result && (
          <div className="border-t border-gray-100 p-6">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <h3 className="font-bold text-gray-900 text-sm">Tabla de amortización</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode((v) => (v === 'annual' ? 'monthly' : 'annual'))}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition"
                >
                  Ver {viewMode === 'annual' ? 'mensual' : 'anual'}
                </button>
                <button
                  onClick={exportCSV}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition"
                >
                  Descargar CSV
                </button>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200" style={{ maxHeight: 320 }}>
              <table className="w-full text-xs min-w-[500px]">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    {['Año/Mes', 'Pago total', 'Capital', 'Intereses', 'Saldo'].map((h) => (
                      <th
                        key={h}
                        className="px-3 py-2 text-right first:text-center font-bold text-gray-500 uppercase tracking-wider text-[10px]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {(viewMode === 'annual' ? annualRows : result.schedule).map((r) => {
                    const key = 'year' in r ? r.year : r.period;
                    return (
                      <tr key={key} className="hover:bg-blue-50/40">
                        <td className="px-3 py-1.5 text-center font-bold text-blue-700">{key}</td>
                        <td className="px-3 py-1.5 text-right">{fmtFull(r.payment)}</td>
                        <td className="px-3 py-1.5 text-right text-green-700">{fmtFull(r.principal)}</td>
                        <td className="px-3 py-1.5 text-right text-red-600">{fmtFull(r.interest)}</td>
                        <td className="px-3 py-1.5 text-right font-semibold">{fmtFull(r.balance)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ISAI / closing costs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-1">Gastos de escrituración (ISAI) por estado</h3>
        <p className="text-sm text-gray-500 mb-4">
          Además del enganche, considera el impuesto sobre adquisición de inmuebles, honorarios de
          notario e inscripción en el Registro Público.
        </p>
        <select
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
          className="w-full sm:w-72 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {ISAI_STATES.map((s) => (
            <option key={s.code} value={s.code}>
              {s.name}
            </option>
          ))}
        </select>
        {isai && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                ISAI ({isai.isaiRate}%)
              </p>
              <p className="text-lg font-extrabold text-gray-900">{fmt(isaiCost)}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                Notario ({isai.notaryFeeMin}%–{isai.notaryFeeMax}%)
              </p>
              <p className="text-lg font-extrabold text-gray-900">
                {fmt(notaryMin)} – {fmt(notaryMax)}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                Registro ({isai.registrationFeePct}%)
              </p>
              <p className="text-lg font-extrabold text-gray-900">{fmt(registration)}</p>
            </div>
          </div>
        )}
        {isai?.notes && <p className="text-xs text-gray-500 mt-3">{isai.notes}</p>}
      </div>

      {/* Bank comparison */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Comparativa de bancos 2026</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="text-left border-b-2 border-gray-200">
                <th className="py-2 pr-3 font-bold text-gray-600">Institución</th>
                <th className="py-2 pr-3 font-bold text-gray-600">Producto</th>
                <th className="py-2 pr-3 font-bold text-gray-600 text-right">Tasa</th>
                <th className="py-2 pr-3 font-bold text-gray-600 text-right">CAT</th>
                <th className="py-2 pr-3 font-bold text-gray-600 text-right">Enganche mín.</th>
                <th className="py-2 font-bold text-gray-600">Notas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {BANKS.map((b) => (
                <tr key={b.id} className={b.highlight ? 'bg-blue-50/50' : ''}>
                  <td className="py-2 pr-3 font-semibold">
                    {b.name}
                    {b.type === 'government' && (
                      <span className="ml-1 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                        Gob
                      </span>
                    )}
                  </td>
                  <td className="py-2 pr-3 text-gray-600">{b.product}</td>
                  <td className="py-2 pr-3 text-right font-bold">{b.nominalRate.toFixed(2)}%</td>
                  <td className="py-2 pr-3 text-right">{b.cat.toFixed(2)}%</td>
                  <td className="py-2 pr-3 text-right">{b.minDownPaymentPct}%</td>
                  <td className="py-2 text-gray-500 text-xs">{b.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Tasas de referencia; consulta condiciones vigentes con cada institución. El CAT puede
          variar según tu perfil crediticio.
        </p>
      </div>
    </div>
  );
}
