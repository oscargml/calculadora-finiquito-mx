'use client';
import { useState } from 'react';

const fmt = (n: number) =>
  n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

type TipoIncapacidad = 'general' | 'riesgo' | 'maternidad';

interface Resultado {
  totalDias: number;
  dias100: number;
  dias60: number;
  diasSinPago: number;
  pagoImss: number;
  explicacion: string;
}

function calcular(tipo: TipoIncapacidad, inicio: string, fin: string, sdi: number): Resultado {
  const ms = new Date(fin).getTime() - new Date(inicio).getTime();
  const totalDias = Math.ceil(ms / 86400000) + 1;

  let dias100 = 0;
  let dias60 = 0;
  let diasSinPago = 0;
  let pagoImss = 0;
  let explicacion = '';

  if (tipo === 'general') {
    diasSinPago = Math.min(3, totalDias);
    dias60 = Math.max(0, totalDias - 3);
    pagoImss = dias60 * sdi * 0.6;
    explicacion =
      'Enfermedad General (Art. 96 y 98 LSS): los primeros 3 días no se pagan (carencia). A partir del día 4, el IMSS paga el 60% del SDI directamente al trabajador. Duración máxima: 52 semanas, extensible 26 más con justificación médica.';
  } else if (tipo === 'riesgo') {
    dias100 = totalDias;
    pagoImss = dias100 * sdi;
    explicacion =
      'Riesgo de Trabajo o Trayecto (Art. 487 LFT y 58 LSS): no hay días de carencia. El IMSS paga el 100% del SDI desde el primer día de la incapacidad.';
  } else {
    dias100 = Math.min(totalDias, 84);
    diasSinPago = Math.max(0, totalDias - 84);
    pagoImss = dias100 * sdi;
    explicacion =
      'Maternidad (Art. 101 LSS): la madre recibe el 100% del SDI durante 84 días (42 antes y 42 después del parto, transferibles con autorización médica). No hay carencia.';
  }

  return { totalDias, dias100, dias60, diasSinPago, pagoImss, explicacion };
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-1.5 border-b border-gray-100 last:border-0">
      <span className="text-gray-700">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

export default function CalculadoraIncapacidad() {
  const [form, setForm] = useState({ tipo: 'general' as TipoIncapacidad, inicio: '', fin: '', sdi: '' });
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [error, setError] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const sdi = parseFloat(form.sdi);
    if (!form.inicio || !form.fin || isNaN(sdi) || sdi <= 0) {
      setError('Completa todos los campos con valores válidos.');
      return;
    }
    if (new Date(form.fin) < new Date(form.inicio)) {
      setError('La fecha de término debe ser igual o posterior a la de inicio.');
      return;
    }
    setResultado(calcular(form.tipo, form.inicio, form.fin, sdi));
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <form onSubmit={onSubmit} className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Tipo de incapacidad
          </label>
          <select
            value={form.tipo}
            onChange={(e) => setForm((p) => ({ ...p, tipo: e.target.value as TipoIncapacidad }))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="general">Enfermedad general (gripe, cirugía, etc.)</option>
            <option value="riesgo">Riesgo de trabajo o trayecto</option>
            <option value="maternidad">Maternidad</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Fecha de inicio
            </label>
            <input
              type="date"
              value={form.inicio}
              onChange={(e) => setForm((p) => ({ ...p, inicio: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Fecha de término
            </label>
            <input
              type="date"
              value={form.fin}
              onChange={(e) => setForm((p) => ({ ...p, fin: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Salario Diario Integrado (SDI) en pesos
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder="Ej: 500.00"
            value={form.sdi}
            onChange={(e) => setForm((p) => ({ ...p, sdi: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Si no conoces tu SDI, estímalo como tu sueldo mensual ÷ 30. Consulta nuestra{' '}
            <a href="/guias/como-calcular-sdi" className="text-blue-600 underline">
              guía para calcular el SDI
            </a>
            .
          </p>
        </div>

        {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors"
        >
          Calcular incapacidad
        </button>
      </form>

      {resultado && (
        <div className="border-t border-gray-200 bg-gray-50 p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-700 text-white rounded-lg p-4 text-center">
              <p className="text-xs uppercase tracking-wide opacity-80">Paga el IMSS</p>
              <p className="text-2xl font-extrabold">{fmt(resultado.pagoImss)}</p>
            </div>
            <div className="bg-gray-800 text-white rounded-lg p-4 text-center">
              <p className="text-xs uppercase tracking-wide opacity-80">Total para el trabajador</p>
              <p className="text-2xl font-extrabold">{fmt(resultado.pagoImss)}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-2">Desglose</h3>
            <Row label="Días de incapacidad (totales)" value={`${resultado.totalDias} días`} />
            <Row label="Días pagados al 100%" value={`${resultado.dias100} días`} />
            <Row label="Días pagados al 60%" value={`${resultado.dias60} días`} />
            <Row label="Días sin pago (carencia)" value={`${resultado.diasSinPago} días`} />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
            <strong>Explicación legal:</strong> {resultado.explicacion}
          </div>
        </div>
      )}
    </div>
  );
}
