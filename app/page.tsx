import CalculadoraLaboral from '@/components/CalculadoraLaboral';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora de Finiquito y Liquidación 2026 | México',
  description:
    'Calcula tu finiquito o liquidación por despido injustificado en México con las leyes LFT 2026 actualizadas. Incluye aguinaldo proporcional, vacaciones, prima vacacional e indemnización constitucional.',
  keywords: [
    'calculadora finiquito mexico 2026',
    'cuanto me toca de finiquito por 2 años de trabajo',
    'calculadora de liquidacion por despido injustificado',
    'calcular aguinaldo proporcional por renuncia',
    'finiquito por renuncia voluntaria',
    'liquidacion por despido mexico',
    'calculadora prestaciones laborales',
  ],
  alternates: {
    languages: { 'es-MX': '/' },
  },
  openGraph: {
    title: 'Calculadora de Finiquito y Liquidación 2026',
    description: 'Herramienta gratuita para calcular tus prestaciones laborales en México.',
    locale: 'es_MX',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Calculadora de Finiquito y Liquidación México 2026
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Calcula en segundos tus prestaciones laborales conforme a la Ley Federal del Trabajo y
            las constantes fiscales vigentes para 2026.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <CalculadoraLaboral />
      </section>

      {/* AdSense Auto Ads — Google places ads automatically once approved */}

      {/* SEO Educational Content */}
      <section className="max-w-4xl mx-auto px-4 pb-16 text-gray-700 leading-relaxed space-y-8">
        <hr className="border-gray-200" />

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Guía Completa: ¿Cómo calcular finiquito y liquidación en México?
          </h2>
          <p>
            Terminar una relación laboral en México genera muchas dudas, tanto para los trabajadores
            como para los departamentos de recursos humanos. La legislación mexicana, regida por la{' '}
            <strong>Ley Federal del Trabajo (LFT)</strong>, protege los derechos de los empleados,
            pero establece diferencias muy claras dependiendo de cómo se dé la separación.
          </p>
          <p className="mt-3">
            Si te preguntas <em>¿cuánto me toca de finiquito?</em> o necesitas un cálculo preciso
            con las normativas fiscales vigentes, esta guía te explica paso a paso la matemática
            legal que utiliza nuestra herramienta automatizada.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            ¿Cuál es la diferencia entre finiquito y liquidación por la LFT?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>El Finiquito:</strong> Se otorga cuando la relación laboral termina de mutuo
              acuerdo o por decisión del trabajador (renuncia voluntaria). Incluye solo días
              trabajados y prestaciones proporcionales.
            </li>
            <li>
              <strong>La Liquidación:</strong> Es la indemnización obligatoria cuando el patrón
              despide al trabajador sin causa justificada. Incluye la indemnización constitucional
              de 90 días, 20 días por año y prima de antigüedad.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            ¿Cómo afectó la Ley de Vacaciones Dignas al cálculo?
          </h2>
          <p>
            Desde 2023, el piso mínimo de vacaciones es de <strong>12 días en el primer año</strong>
            , aumentando 2 días por cada año adicional hasta el quinto. Este cambio eleva
            directamente el <strong>Salario Diario Integrado (SDI)</strong>, que incluye la parte
            proporcional del aguinaldo y prima vacacional. A mayor SDI, mayor monto en liquidación.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            ¿Qué conceptos integran la liquidación por despido injustificado?
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Indemnización constitucional:</strong> 90 días (3 meses) de SDI.
            </li>
            <li>
              <strong>20 días por año laborado:</strong> 20 días de SDI por cada año de servicio
              (y su parte proporcional).
            </li>
            <li>
              <strong>Prima de antigüedad:</strong> 12 días de salario por año trabajado, con tope
              de 2 veces el salario mínimo general vigente ($630.08 MXN/día en 2026).
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Impuestos y exenciones: ¿el finiquito genera retención de ISR?
          </h2>
          <p>
            Sí, pero con importantes exenciones fiscales calculadas con base en la{' '}
            <strong>UMA ($117.31 MXN/día en 2026)</strong>. Los conceptos de liquidación están
            libres de impuestos hasta por un monto equivalente a{' '}
            <strong>90 UMAs por cada año de servicio</strong>. Nuestra calculadora analiza
            automáticamente estos topes fiscales del Artículo 93 de la LISR para ofrecerte un
            estimado del total neto.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Preguntas Frecuentes (FAQ)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">
                ¿Cuánto me toca de finiquito después de 2 años de trabajo?
              </h3>
              <p className="text-sm mt-1">
                Con 2 años y un sueldo de $15,000 MXN/mes en renuncia voluntaria, aproximadamente
                recibirías: aguinaldo proporcional + 14 días de vacaciones proporcionales + prima
                vacacional. El total depende exactamente de la fecha de ingreso y baja. Usa la
                calculadora para obtener el monto exacto.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                ¿Qué es el Salario Diario Integrado (SDI)?
              </h3>
              <p className="text-sm mt-1">
                Es el salario diario más la parte proporcional del aguinaldo (15 días) y la prima
                vacacional (25% de los días de vacaciones). Es el monto base que se usa para
                calcular las indemnizaciones por despido injustificado.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                ¿La zona fronteriza norte cambia mi liquidación?
              </h3>
              <p className="text-sm mt-1">
                Sí. El salario mínimo en la Zona Libre de la Frontera Norte es $440.87 MXN/día
                (vs. $315.04 general). Esto afecta el tope de la prima de antigüedad, que no puede
                exceder el doble del salario mínimo aplicable a tu región.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
          Esta herramienta es de carácter informativo. Los resultados son estimaciones con base en
          las constantes legales publicadas para 2026. Para asesoría legal vinculante, consulta a
          un abogado laboral certificado.
        </p>
      </section>
    </main>
  );
}
