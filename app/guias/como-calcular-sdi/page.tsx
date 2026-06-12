import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: 'Cómo Calcular tu SDI (Salario Diario Integrado) 2026 — Fórmula y ejemplos',
  description:
    'Fórmula exacta del SDI con aguinaldo y prima vacacional, factor de integración 2026 por años de antigüedad, ejemplos numéricos y errores comunes.',
  alternates: { canonical: '/guias/como-calcular-sdi' },
};

const faq = [
  {
    q: '¿Cuál es el factor de integración mínimo en 2026?',
    a: 'Para el primer año de trabajo (12 días de vacaciones, aguinaldo de 15 días, prima vacacional 25%): 1.0493. Se multiplica por tu salario diario para obtener el SDI mínimo de ley.',
  },
  {
    q: '¿El SDI es lo mismo que el salario base de cotización (SBC)?',
    a: 'En la práctica se usan como sinónimos: el SBC es el salario con el que el patrón te registra ante el IMSS, calculado integrando las prestaciones (SDI). Si te registran con menos de tu salario real, tus incapacidades y tu Infonavit se reducen.',
  },
  {
    q: '¿Dónde puedo consultar mi SDI oficial?',
    a: 'En tu constancia de semanas cotizadas (portal IMSS digital) aparece tu salario base de cotización registrado por tu patrón.',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="Cómo calcular tu SDI (Salario Diario Integrado)"
      intro="El SDI determina cuánto cobras en incapacidades, cuánto te deben en una liquidación y cuánto acumulas en Infonavit. Aprende a calcularlo en 2 minutos."
      faq={faq}
      related={[
        { href: '/guias/incapacidad-enfermedad-general', label: '¿Cuánto pagan por incapacidad por enfermedad?' },
        { href: '/guias/liquidacion-despido-injustificado', label: 'Liquidación por despido injustificado' },
        { href: '/guias/cuanto-me-toca-de-finiquito-ejemplos', label: 'Ejemplos de finiquito por años trabajados' },
      ]}
    >
      <div>
        <H2>La fórmula</H2>
        <div className="bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm">
          <p>Salario diario = sueldo mensual ÷ 30</p>
          <p className="mt-2">
            Factor de integración = (365 + 15 aguinaldo + días de vacaciones × 0.25) ÷ 365
          </p>
          <p className="mt-2 font-bold">SDI = salario diario × factor de integración</p>
        </div>
        <p className="mt-3">
          El factor crece con tu antigüedad porque las vacaciones aumentan (12 días el primer año,
          +2 por año hasta 20, luego +2 cada 5 años, desde la reforma de Vacaciones Dignas).
        </p>
      </div>

      <div>
        <H2>Factores de integración 2026 (prestaciones mínimas)</H2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 bg-white rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 font-bold">Años de antigüedad</th>
                <th className="text-right p-3 font-bold">Vacaciones</th>
                <th className="text-right p-3 font-bold">Factor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="p-3">1</td><td className="p-3 text-right">12</td><td className="p-3 text-right">1.0493</td></tr>
              <tr><td className="p-3">2</td><td className="p-3 text-right">14</td><td className="p-3 text-right">1.0507</td></tr>
              <tr><td className="p-3">3</td><td className="p-3 text-right">16</td><td className="p-3 text-right">1.0521</td></tr>
              <tr><td className="p-3">4</td><td className="p-3 text-right">18</td><td className="p-3 text-right">1.0534</td></tr>
              <tr><td className="p-3">5</td><td className="p-3 text-right">20</td><td className="p-3 text-right">1.0548</td></tr>
              <tr><td className="p-3">6–10</td><td className="p-3 text-right">22</td><td className="p-3 text-right">1.0562</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <H2>Ejemplo completo</H2>
        <p>
          Sueldo $18,000/mes, 3 años de antigüedad: salario diario $600 × 1.0521 ={' '}
          <strong>SDI $631.26</strong>. Una incapacidad por enfermedad general de 10 días pagaría 7
          × $631.26 × 60% = <strong>$2,651</strong>. Prueba tus números en la{' '}
          <Link href="/incapacidad" className="text-blue-600 underline font-semibold">
            calculadora de incapacidades
          </Link>{' '}
          o calcula tu{' '}
          <Link href="/" className="text-blue-600 underline font-semibold">
            finiquito
          </Link>
          .
        </p>
      </div>

      <div>
        <H2>Errores comunes</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Olvidar prestaciones superiores:</strong> si tu empresa da 30 días de aguinaldo
            o fondo de ahorro, tu SDI real es mayor que el mínimo de ley.
          </li>
          <li>
            <strong>Usar el sueldo neto:</strong> el SDI se calcula sobre el bruto.
          </li>
          <li>
            <strong>No verificar tu registro ante el IMSS:</strong> si te registraron con salario
            inferior («esquema mixto»), tus subsidios e Infonavit se calculan con ese salario menor.
            Puedes denunciarlo ante el IMSS.
          </li>
        </ul>
      </div>
    </GuiaShell>
  );
}
