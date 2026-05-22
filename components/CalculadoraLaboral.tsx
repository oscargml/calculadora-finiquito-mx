'use client';
import { useState } from 'react';
import { calculateTermination, CalculationResult } from '@/lib/calculadora';

const fmt = (n: string) =>
  parseFloat(n).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div
      className={`flex justify-between py-1.5 border-b border-gray-100 last:border-0 ${bold ? 'font-bold' : ''}`}
    >
      <span className="text-gray-700">{label}</span>
      <span>{fmt(value)}</span>
    </div>
  );
}

export default function CalculadoraLaboral() {
  const [form, setForm] = useState({
    startDate: '',
    endDate: '',
    grossMonthlySalary: '',
    remainingVacationDays: '0',
    isNorthernBorder: false,
    isDismissal: false,
  });
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [error, setError] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const salary = parseFloat(form.grossMonthlySalary);
    if (salary <= 0 || isNaN(salary)) {
      setError('Ingresa un sueldo mensual válido.');
      return;
    }
    if (new Date(form.endDate) <= new Date(form.startDate)) {
      setError('La fecha de baja debe ser posterior a la de ingreso.');
      return;
    }
    setResults(
      calculateTermination({
        startDate: form.startDate,
        endDate: form.endDate,
        grossMonthlySalary: salary,
        remainingVacationDaysPastYear: parseInt(form.remainingVacationDays) || 0,
        isNorthernBorder: form.isNorthernBorder,
        isDismissal: form.isDismissal,
      })
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* FORM */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Datos de la Relación Laboral</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de Ingreso
            </label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={onChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de Baja
            </label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={onChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sueldo Mensual Bruto (MXN)
            </label>
            <input
              type="number"
              name="grossMonthlySalary"
              value={form.grossMonthlySalary}
              onChange={onChange}
              placeholder="Ej. 15000"
              min="1"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Días de vacaciones pendientes (año anterior)
            </label>
            <input
              type="number"
              name="remainingVacationDays"
              value={form.remainingVacationDays}
              onChange={onChange}
              min="0"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                name="isNorthernBorder"
                checked={form.isNorthernBorder}
                onChange={onChange}
                className="w-4 h-4 accent-blue-600"
              />
              Zona Frontera Norte
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                name="isDismissal"
                checked={form.isDismissal}
                onChange={onChange}
                className="w-4 h-4 accent-red-600"
              />
              <span>
                Fue <strong>Despido Injustificado</strong>
              </span>
            </label>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Calcular Prestaciones
          </button>
        </form>
      </div>

      {/* RESULTS */}
      {results ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-5">
          <h2 className="text-xl font-bold text-gray-900">Resumen del Cálculo</h2>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 bg-gray-50 rounded-xl p-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">Días trabajados</p>
              <p className="font-semibold text-gray-800">{results.metrics.daysWorked}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">Antigüedad</p>
              <p className="font-semibold text-gray-800">{results.metrics.seniorityYears} años</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">Salario diario</p>
              <p className="font-semibold text-gray-800">{fmt(results.metrics.dailyWage)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">SDI</p>
              <p className="font-semibold text-gray-800">{fmt(results.metrics.integratedDailyWage)}</p>
            </div>
          </div>

          <div>
            <h3 className="text-blue-700 font-semibold mb-2">Finiquito</h3>
            <div className="text-sm space-y-0">
              <Row label="Aguinaldo proporcional" value={results.finiquito.aguinaldo} />
              <Row label="Vacaciones proporcionales" value={results.finiquito.vacaciones} />
              <Row label="Prima vacacional (25%)" value={results.finiquito.primaVacacional} />
              <Row label="Subtotal finiquito" value={results.finiquito.subtotal} bold />
            </div>
          </div>

          {form.isDismissal && (
            <div>
              <h3 className="text-red-600 font-semibold mb-2">Indemnización (Liquidación)</h3>
              <div className="text-sm space-y-0">
                <Row label="Indemnización constitucional (90 días)" value={results.liquidacion.indemnizacion90Dias} />
                <Row label="20 días por año laborado" value={results.liquidacion.veinteDiasPorAno} />
                <Row label="Prima de antigüedad (topada)" value={results.liquidacion.primaAntiguedad} />
                <Row label="Subtotal liquidación" value={results.liquidacion.subtotal} bold />
              </div>
            </div>
          )}

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-4 text-sm space-y-1">
            <div className="flex justify-between text-gray-700">
              <span>Total bruto</span>
              <span className="font-semibold">{fmt(results.totals.gross)}</span>
            </div>
            <div className="flex justify-between text-gray-500 text-xs">
              <span>Exención ISR Art. 93 LISR</span>
              <span>{fmt(results.totals.isrExemptLimit)}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Retención ISR estimada</span>
              <span>−{fmt(results.totals.taxDeductions)}</span>
            </div>
            <div className="flex justify-between text-green-700 text-base font-bold border-t border-green-200 pt-2 mt-1">
              <span>Total Neto Estimado</span>
              <span>{fmt(results.totals.net)}</span>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            * Cálculo estimado con base en constantes LFT 2026 y Art. 93 LISR. Consulta a un
            abogado laboral para mayor precisión.
          </p>
        </div>
      ) : (
        <div className="hidden lg:flex items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 text-sm">
          Los resultados aparecerán aquí
        </div>
      )}
    </div>
  );
}
