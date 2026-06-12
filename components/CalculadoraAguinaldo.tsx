'use client';
import { useState } from 'react';
import { CONSTANTS_2026 } from '@/lib/calculadora';

const fmt = (n: number) =>
  n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

interface Resultado {
  salarioDiario: number;
  diasTrabajados: number;
  diasProporcionales: number;
  bruto: number;
  exento: number;
  gravado: number;
}

function calcular(
  sueldoMensual: number,
  diasAguinaldo: number,
  fechaIngreso: string,
  faltas: number,
  anio: number
): Resultado {
  const salarioDiario = sueldoMensual / 30;
  const inicioAnio = new Date(anio, 0, 1);
  const finAnio = new Date(anio, 11, 31);
  const ingreso = fechaIngreso ? new Date(fechaIngreso + 'T00:00:00') : inicioAnio;
  const desde = ingreso > inicioAnio ? ingreso : inicioAnio;
  const diasAnio = Math.round((finAnio.getTime() - inicioAnio.getTime()) / 86400000) + 1;
  let diasTrabajados =
    Math.round((finAnio.getTime() - desde.getTime()) / 86400000) + 1 - Math.max(0, faltas);
  diasTrabajados = Math.max(0, Math.min(diasTrabajados, diasAnio));

  const diasProporcionales = (diasTrabajados / diasAnio) * diasAguinaldo;
  const bruto = salarioDiario * diasProporcionales;
  const exento = Math.min(bruto, 30 * CONSTANTS_2026.UMA);
  const gravado = Math.max(0, bruto - exento);

  return { salarioDiario, diasTrabajados, diasProporcionales, bruto, exento, gravado };
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div
      className={`flex justify-between py-1.5 border-b border-gray-100 last:border-0 ${bold ? 'font-bold' : ''}`}
    >
      <span className="text-gray-700">{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default function CalculadoraAguinaldo() {
  const anio = new Date().getFullYear();
  const [form, setForm] = useState({
    sueldo: '',
    diasAguinaldo: '15',
    fechaIngreso: '',
    faltas: '0',
  });
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [error, setError] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const sueldo = parseFloat(form.sueldo);
    const dias = parseFloat(form.diasAguinaldo);
    if (isNaN(sueldo) || sueldo <= 0) {
      setError('Ingresa un sueldo mensual válido.');
      return;
    }
    if (isNaN(dias) || dias < 15) {
      setError('Los días de aguinaldo no pueden ser menos de 15 (mínimo de ley).');
      return;
    }
    setResultado(
      calcular(sueldo, dias, form.fechaIngreso, parseInt(form.faltas) || 0, anio)
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <form onSubmit={onSubmit} className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Sueldo mensual bruto (MXN)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="Ej: 15000"
              value={form.sueldo}
              onChange={(e) => setForm((p) => ({ ...p, sueldo: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Días de aguinaldo
            </label>
            <input
              type="number"
              min="15"
              value={form.diasAguinaldo}
              onChange={(e) => setForm((p) => ({ ...p, diasAguinaldo: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              15 es el mínimo de ley; muchas empresas pagan 20, 30 o más.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Fecha de ingreso (si entraste este año)
            </label>
            <input
              type="date"
              value={form.fechaIngreso}
              onChange={(e) => setForm((p) => ({ ...p, fechaIngreso: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Déjala vacía si trabajaste el año completo.
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Faltas injustificadas (días)
            </label>
            <input
              type="number"
              min="0"
              value={form.faltas}
              onChange={(e) => setForm((p) => ({ ...p, faltas: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors"
        >
          Calcular aguinaldo
        </button>
      </form>

      {resultado && (
        <div className="border-t border-gray-200 bg-gray-50 p-6 space-y-4">
          <div className="bg-blue-700 text-white rounded-lg p-5 text-center">
            <p className="text-xs uppercase tracking-wide opacity-80 mb-1">
              Aguinaldo bruto {anio}
            </p>
            <p className="text-3xl font-extrabold">{fmt(resultado.bruto)}</p>
            <p className="text-xs opacity-75 mt-1">
              {resultado.diasProporcionales.toFixed(2)} días de salario · debe pagarse antes del
              20 de diciembre
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-2">Desglose</h3>
            <Row label="Salario diario" value={fmt(resultado.salarioDiario)} />
            <Row label={`Días trabajados en ${anio}`} value={`${resultado.diasTrabajados} días`} />
            <Row
              label="Días de aguinaldo proporcionales"
              value={`${resultado.diasProporcionales.toFixed(2)} días`}
            />
            <Row label="Aguinaldo bruto" value={fmt(resultado.bruto)} bold />
            <Row
              label={`Exento de ISR (30 UMA = ${fmt(30 * CONSTANTS_2026.UMA)})`}
              value={fmt(resultado.exento)}
            />
            <Row label="Base gravable de ISR" value={fmt(resultado.gravado)} />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
            <strong>Nota fiscal:</strong> los primeros 30 días de UMA (
            {fmt(30 * CONSTANTS_2026.UMA)} en {anio}) están exentos de ISR (Art. 93 LISR). El
            excedente se grava según tu tarifa mensual, por lo que la retención exacta depende de
            tu sueldo — tu recibo de nómina mostrará el neto final.
          </div>
        </div>
      )}
    </div>
  );
}
