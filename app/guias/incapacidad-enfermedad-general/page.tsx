import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: '¿Cuánto me pagan si tengo incapacidad por enfermedad? (IMSS 2026)',
  description:
    'Incapacidad por enfermedad general: 3 días de carencia y 60% del SDI desde el día 4, pagado por el IMSS. Ejemplos numéricos, requisitos y tabla de montos.',
  alternates: { canonical: '/guias/incapacidad-enfermedad-general' },
};

const faq = [
  {
    q: '¿Quién paga la incapacidad por enfermedad general?',
    a: 'El IMSS, directamente al trabajador, a partir del cuarto día y al 60% del SDI. Los primeros 3 días son de carencia: la ley no obliga a nadie a pagarlos, aunque algunas empresas los cubren por contrato o política interna.',
  },
  {
    q: '¿Cuántas semanas cotizadas necesito?',
    a: 'Al menos 4 semanas cotizadas inmediatamente antes de la enfermedad (Art. 97 LSS). Trabajadores eventuales necesitan 6 semanas en los últimos 4 meses.',
  },
  {
    q: '¿Cuánto puede durar la incapacidad?',
    a: 'Hasta 52 semanas, prorrogables 26 semanas más con dictamen médico del IMSS (Art. 96 LSS).',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="¿Cuánto me pagan si tengo incapacidad por enfermedad?"
      intro="Gripe fuerte, cirugía, una fractura fuera del trabajo: la enfermedad general es la incapacidad más común y la que menos paga. Esto es lo que recibes exactamente."
      faq={faq}
      related={[
        { href: '/guias/primeros-3-dias-incapacidad', label: '¿Quién paga los primeros 3 días de incapacidad?' },
        { href: '/guias/como-calcular-sdi', label: 'Cómo calcular tu SDI' },
        { href: '/guias/guia-incapacidades-lft', label: 'Guía completa de incapacidades' },
      ]}
    >
      <div>
        <H2>La regla de oro: 60% desde el día 4</H2>
        <p>
          Conforme a los Artículos 96 y 98 de la Ley del Seguro Social, en una incapacidad por{' '}
          <strong>enfermedad general</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Días 1 a 3:</strong> carencia — el IMSS no paga nada y el patrón tampoco está
            obligado (salvo contrato colectivo o política interna).
          </li>
          <li>
            <strong>Día 4 en adelante:</strong> el IMSS te deposita el <strong>60% de tu SDI</strong>{' '}
            por cada día que ampare el certificado de incapacidad.
          </li>
        </ul>
      </div>

      <div>
        <H2>Tabla de ejemplo: incapacidad de 10 días</H2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 bg-white rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 font-bold">SDI diario</th>
                <th className="text-right p-3 font-bold">Días pagados (7)</th>
                <th className="text-right p-3 font-bold">Pago total IMSS (60%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3">$350</td>
                <td className="p-3 text-right">7</td>
                <td className="p-3 text-right">$1,470</td>
              </tr>
              <tr>
                <td className="p-3">$500</td>
                <td className="p-3 text-right">7</td>
                <td className="p-3 text-right">$2,100</td>
              </tr>
              <tr>
                <td className="p-3">$800</td>
                <td className="p-3 text-right">7</td>
                <td className="p-3 text-right">$3,360</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Haz el cálculo con tus fechas y tu SDI en la{' '}
          <Link href="/incapacidad" className="text-blue-600 underline font-semibold">
            calculadora de incapacidades
          </Link>
          .
        </p>
      </div>

      <div>
        <H2>Cómo cobrar el subsidio</H2>
        <ol className="list-decimal list-inside space-y-2">
          <li>El médico del IMSS expide tu certificado de incapacidad (ST-2 o digital).</li>
          <li>Entrega copia a tu patrón (idealmente el mismo día o al siguiente).</li>
          <li>
            El pago se deposita en la cuenta CLABE que registres en el portal del IMSS o se cobra
            en ventanilla bancaria autorizada.
          </li>
        </ol>
      </div>
    </GuiaShell>
  );
}
