import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: 'IMSS vs ISSSTE vs Seguro Privado: comparativa de incapacidades 2026',
  description:
    'Comparativa de incapacidades: cuánto paga el IMSS, cuánto el ISSSTE y qué cubre un seguro privado de gastos médicos. Porcentajes, carencias y plazos lado a lado.',
  alternates: { canonical: '/guias/imss-vs-issste-vs-seguro-privado' },
};

const faq = [
  {
    q: '¿El ISSSTE paga más que el IMSS en enfermedad no laboral?',
    a: 'Sí en los primeros meses: el ISSSTE cubre licencias con sueldo completo (hasta 30/60 días según antigüedad) y luego mitad de sueldo, mientras el IMSS paga 60% del SDI desde el día 4.',
  },
  {
    q: '¿Un seguro de gastos médicos mayores me paga la incapacidad?',
    a: 'No: cubre gastos médicos (hospital, honorarios), no tu salario. Para reemplazo de ingreso existe el seguro de «protección de ingresos» o invalidez, que es un producto distinto.',
  },
  {
    q: '¿Puedo tener IMSS e ISSSTE a la vez?',
    a: 'Sí, si cotizas en un empleo privado y otro público. Las prestaciones económicas se tramitan en cada instituto de forma independiente.',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="IMSS vs ISSSTE vs seguro privado: ¿quién paga más en una incapacidad?"
      intro="Mismo diagnóstico, tres resultados económicos muy distintos según tu régimen. Esta es la comparación directa."
      faq={faq}
      related={[
        { href: '/guias/incapacidad-enfermedad-general', label: 'Incapacidad por enfermedad general (IMSS)' },
        { href: '/guias/incapacidad-riesgo-trabajo', label: 'Riesgo de trabajo: 100% desde el día 1' },
        { href: '/guias/como-calcular-sdi', label: 'Cómo calcular tu SDI' },
      ]}
    >
      <div>
        <H2>Tabla comparativa (enfermedad no laboral)</H2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 bg-white rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 font-bold">Concepto</th>
                <th className="text-left p-3 font-bold">IMSS</th>
                <th className="text-left p-3 font-bold">ISSSTE</th>
                <th className="text-left p-3 font-bold">Seguro privado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 font-semibold">Carencia</td>
                <td className="p-3">3 días</td>
                <td className="p-3">Sin carencia (licencia médica)</td>
                <td className="p-3">Deducible/periodo de espera según póliza</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Pago</td>
                <td className="p-3">60% del SDI desde día 4</td>
                <td className="p-3">Sueldo íntegro 30–60 días; luego 50%</td>
                <td className="p-3">No paga salario; cubre gastos médicos</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Duración máxima</td>
                <td className="p-3">52 + 26 semanas</td>
                <td className="p-3">52 semanas (licencias acumuladas)</td>
                <td className="p-3">Según suma asegurada</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Riesgo de trabajo</td>
                <td className="p-3">100% del SDI desde día 1</td>
                <td className="p-3">100% del sueldo (licencia por riesgo)</td>
                <td className="p-3">Cobertura médica; indemnización si la póliza la incluye</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <H2>Lo que conviene recordar</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>IMSS:</strong> el subsidio depende totalmente de tu SDI registrado — verifica
            que tu patrón cotice con tu salario real.
          </li>
          <li>
            <strong>ISSSTE:</strong> el esquema de licencias médicas con goce de sueldo es más
            generoso al inicio; la antigüedad define cuántos días al 100%.
          </li>
          <li>
            <strong>Privado:</strong> complementa, no sustituye: paga el hospital, pero tu ingreso
            lo protege la seguridad social (o un seguro de invalidez específico).
          </li>
        </ul>
        <p className="mt-3">
          Si cotizas al IMSS, calcula tu subsidio exacto en la{' '}
          <Link href="/incapacidad" className="text-blue-600 underline font-semibold">
            calculadora de incapacidades
          </Link>
          .
        </p>
      </div>
    </GuiaShell>
  );
}
