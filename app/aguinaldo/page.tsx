import type { Metadata } from 'next';
import Link from 'next/link';
import CalculadoraAguinaldo from '@/components/CalculadoraAguinaldo';

export const metadata: Metadata = {
  title: 'Calculadora de Aguinaldo 2026 México | Proporcional y completo',
  description:
    'Calcula tu aguinaldo 2026 gratis: completo o proporcional si entraste este año. Incluye exención de ISR (30 UMA), fecha límite de pago y fundamento legal (Art. 87 LFT).',
  alternates: { canonical: '/aguinaldo' },
  keywords: [
    'calculadora aguinaldo 2026',
    'como calcular aguinaldo proporcional',
    'cuanto me toca de aguinaldo',
    'aguinaldo proporcional por meses trabajados',
    'fecha limite pago aguinaldo 20 diciembre',
    'aguinaldo paga isr',
  ],
};

const faq = [
  {
    q: '¿Cuándo deben pagarme el aguinaldo?',
    a: 'A más tardar el 20 de diciembre de cada año (Art. 87 LFT). Si no te lo pagan, puedes reclamarlo ante PROFEDET hasta un año después.',
  },
  {
    q: '¿Cuántos días de aguinaldo me corresponden?',
    a: 'El mínimo legal es 15 días de salario por año completo trabajado. Si trabajaste solo parte del año, te toca la parte proporcional, sin importar si sigues o no en la empresa.',
  },
  {
    q: '¿El aguinaldo paga impuestos?',
    a: 'Está exento de ISR hasta 30 días de UMA ($3,519.30 en 2026). Solo el excedente se grava según tu tarifa de ISR.',
  },
  {
    q: '¿Si renuncié en el año me toca aguinaldo?',
    a: 'Sí. El aguinaldo proporcional por los días trabajados forma parte de tu finiquito, renuncies o te despidan.',
  },
];

export default function AguinaldoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Calculadora de Aguinaldo México 2026
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Calcula tu aguinaldo completo o proporcional en segundos, con la exención de ISR y la
            fecha límite de pago que marca la ley.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <CalculadoraAguinaldo />
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-16 text-gray-700 leading-relaxed space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Cómo se calcula el aguinaldo?</h2>
          <p>
            La fórmula del Artículo 87 de la Ley Federal del Trabajo es simple:{' '}
            <strong>salario diario × días de aguinaldo</strong> (mínimo 15). Si no trabajaste el
            año completo, se aplica la proporción de días laborados:
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm mt-3">
            <p>Salario diario = sueldo mensual ÷ 30</p>
            <p className="mt-2">
              Aguinaldo proporcional = salario diario × 15 × (días trabajados ÷ 365)
            </p>
          </div>
          <p className="mt-3">
            <strong>Ejemplo:</strong> sueldo de $12,000 y entraste el 1 de julio: salario diario
            $400 × 15 × (184 ÷ 365) = <strong>$3,024 de aguinaldo proporcional</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Reglas que conviene saber</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Fecha límite: 20 de diciembre.</strong> Pagarlo después (o en abonos sin tu
              acuerdo) es una violación sancionable.
            </li>
            <li>
              <strong>Incapacidades por riesgo de trabajo y maternidad</strong> cuentan como días
              trabajados para el aguinaldo; las de enfermedad general no.
            </li>
            <li>
              <strong>Trabajadores por comisión:</strong> se usa el promedio diario de ingresos del
              año.
            </li>
            <li>
              <strong>Si te fuiste de la empresa durante el año,</strong> tu proporcional debió
              incluirse en el finiquito — verifícalo con la{' '}
              <Link href="/" className="text-blue-600 underline font-semibold">
                calculadora de finiquito
              </Link>
              .
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-gray-800">{f.q}</h3>
                <p className="text-sm mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
          Herramienta informativa conforme a la LFT y la LISR vigentes. Para casos específicos
          consulta a un contador o abogado laboralista.
        </p>
      </section>
    </main>
  );
}
