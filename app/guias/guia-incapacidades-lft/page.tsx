import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: 'Guía Completa de Incapacidades 2026: LFT y Ley del Seguro Social',
  description:
    'Todos los tipos de incapacidad en México: enfermedad general, riesgo de trabajo, maternidad e incapacidad permanente. Quién paga, cuánto, fundamentos legales y cómo reclamar.',
  alternates: { canonical: '/guias/guia-incapacidades-lft' },
};

const faq = [
  {
    q: '¿Pueden despedirme por estar incapacitado?',
    a: 'No. La incapacidad certificada suspende la relación laboral (Art. 42 LFT) y justifica tus ausencias. Un despido durante incapacidad procedente es injustificado y da derecho a liquidación completa.',
  },
  {
    q: '¿Las incapacidades cuentan para mi aguinaldo y antigüedad?',
    a: 'Riesgo de trabajo y maternidad cuentan como tiempo trabajado para todos los efectos. En enfermedad general, los días de incapacidad no computan para el aguinaldo, pero sí conservas el empleo y la antigüedad.',
  },
  {
    q: '¿Qué hago si mi patrón no me registró ante el IMSS?',
    a: 'Puedes denunciar ante el IMSS y demandar el aseguramiento retroactivo. En un accidente sin registro, el patrón responde directamente de todas las prestaciones (Art. 53 LSS).',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="Guía completa de incapacidades: Ley Federal del Trabajo 2026"
      intro="Las cuatro familias de incapacidad, lado a lado: qué porcentaje se paga, desde qué día, quién lo paga y con qué artículo exigirlo."
      faq={faq}
      related={[
        { href: '/guias/incapacidad-enfermedad-general', label: 'Enfermedad general: 60% desde el día 4' },
        { href: '/guias/incapacidad-riesgo-trabajo', label: 'Riesgo de trabajo: 100% desde el día 1' },
        { href: '/guias/incapacidad-maternidad', label: 'Maternidad: 84 días al 100%' },
        { href: '/guias/primeros-3-dias-incapacidad', label: '¿Quién paga los primeros 3 días?' },
      ]}
    >
      <div>
        <H2>Mapa general</H2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 bg-white rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 font-bold">Tipo</th>
                <th className="text-left p-3 font-bold">Paga</th>
                <th className="text-left p-3 font-bold">% del SDI</th>
                <th className="text-left p-3 font-bold">Desde</th>
                <th className="text-left p-3 font-bold">Tope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 font-semibold">Enfermedad general</td>
                <td className="p-3">IMSS</td>
                <td className="p-3">60%</td>
                <td className="p-3">Día 4</td>
                <td className="p-3">52 + 26 semanas</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Riesgo de trabajo</td>
                <td className="p-3">IMSS</td>
                <td className="p-3">100%</td>
                <td className="p-3">Día 1</td>
                <td className="p-3">52 semanas o alta/valuación</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Maternidad</td>
                <td className="p-3">IMSS</td>
                <td className="p-3">100%</td>
                <td className="p-3">Día 1</td>
                <td className="p-3">84 días</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Permanente (parcial/total)</td>
                <td className="p-3">IMSS</td>
                <td className="p-3">Pensión o indemnización según valuación</td>
                <td className="p-3">Dictamen</td>
                <td className="p-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Calcula cualquiera de los tres primeros casos con la{' '}
          <Link href="/incapacidad" className="text-blue-600 underline font-semibold">
            calculadora de incapacidades
          </Link>
          .
        </p>
      </div>

      <div>
        <H2>Tus obligaciones como trabajador</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>Avisar al patrón y entregar el certificado de incapacidad lo antes posible.</li>
          <li>Acudir a las citas de control del IMSS; faltar puede suspender el subsidio.</li>
          <li>No trabajar para otro empleador durante la incapacidad.</li>
        </ul>
      </div>

      <div>
        <H2>Obligaciones del patrón</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>Tenerte inscrito en el IMSS con tu salario real desde el primer día.</li>
          <li>Respetar la suspensión laboral: ni despido ni presión para renunciar.</li>
          <li>Reportar los riesgos de trabajo (ST-7) sin reclasificarlos.</li>
          <li>Reincorporarte a tu mismo puesto al término.</li>
        </ul>
      </div>

      <div>
        <H2>Dónde reclamar</H2>
        <p>
          Subsidios no pagados o mal calculados: unidad de medicina familiar y buzón IMSS.
          Conflictos con el patrón (despido, presión, no registro):{' '}
          <strong>PROFEDET, 800 911 7877</strong>, asesoría y representación gratuitas. Para el
          cálculo de una eventual liquidación, usa la{' '}
          <Link href="/" className="text-blue-600 underline font-semibold">
            calculadora de finiquito y liquidación
          </Link>
          .
        </p>
      </div>
    </GuiaShell>
  );
}
