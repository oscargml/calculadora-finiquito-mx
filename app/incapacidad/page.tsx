import type { Metadata } from 'next';
import Link from 'next/link';
import CalculadoraIncapacidad from '@/components/CalculadoraIncapacidad';

export const metadata: Metadata = {
  title: 'Calculadora de Incapacidades IMSS 2026 | ¿Cuánto te pagan?',
  description:
    'Calcula gratis cuánto paga el IMSS por incapacidad de enfermedad general, riesgo de trabajo o maternidad. Días de carencia, porcentajes y fundamento legal 2026.',
  alternates: { canonical: '/incapacidad' },
  keywords: [
    'calculadora incapacidad imss',
    'cuanto paga el imss por incapacidad',
    'incapacidad por enfermedad general cuanto pagan',
    'incapacidad maternidad 84 dias',
    'incapacidad riesgo de trabajo pago',
  ],
};

export default function IncapacidadPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Calculadora de Incapacidades IMSS 2026
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Calcula cuánto te paga el IMSS por enfermedad general, riesgo de trabajo o maternidad,
            con los días de carencia y porcentajes que marca la ley.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <CalculadoraIncapacidad />
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-16 text-gray-700 leading-relaxed space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Cómo se paga una incapacidad del IMSS?
          </h2>
          <p>
            El pago depende del <strong>tipo de incapacidad</strong> que expida tu médico del IMSS.
            Cada tipo tiene reglas distintas de carencia (días sin pago) y porcentaje del{' '}
            <strong>Salario Diario Integrado (SDI)</strong>:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-gray-200 bg-white rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-bold">Tipo</th>
                  <th className="text-left p-3 font-bold">Carencia</th>
                  <th className="text-left p-3 font-bold">Pago</th>
                  <th className="text-left p-3 font-bold">Fundamento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-3 font-semibold">Enfermedad general</td>
                  <td className="p-3">3 días sin pago</td>
                  <td className="p-3">60% del SDI desde el día 4</td>
                  <td className="p-3">Art. 96 y 98 LSS</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Riesgo de trabajo</td>
                  <td className="p-3">Sin carencia</td>
                  <td className="p-3">100% del SDI desde el día 1</td>
                  <td className="p-3">Art. 487 LFT, 58 LSS</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Maternidad</td>
                  <td className="p-3">Sin carencia</td>
                  <td className="p-3">100% del SDI por 84 días</td>
                  <td className="p-3">Art. 101 LSS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Guías relacionadas</h2>
          <ul className="list-disc list-inside space-y-1.5">
            <li>
              <Link href="/guias/incapacidad-enfermedad-general" className="text-blue-600 underline">
                ¿Cuánto me pagan si tengo incapacidad por enfermedad?
              </Link>
            </li>
            <li>
              <Link href="/guias/primeros-3-dias-incapacidad" className="text-blue-600 underline">
                ¿Quién paga los primeros 3 días de incapacidad?
              </Link>
            </li>
            <li>
              <Link href="/guias/incapacidad-riesgo-trabajo" className="text-blue-600 underline">
                Incapacidad por riesgo de trabajo: 100% del SDI desde el día 1
              </Link>
            </li>
            <li>
              <Link href="/guias/incapacidad-maternidad" className="text-blue-600 underline">
                Maternidad IMSS: cálculo de los 84 días
              </Link>
            </li>
            <li>
              <Link href="/guias/como-calcular-sdi" className="text-blue-600 underline">
                Cómo calcular tu Salario Diario Integrado (SDI)
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
          Herramienta informativa basada en la Ley del Seguro Social y la Ley Federal del Trabajo
          vigentes. Para casos específicos consulta al IMSS o a un abogado laboralista.
        </p>
      </section>
    </main>
  );
}
