import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: 'Liquidación por Despido Injustificado 2026: cuánto y cómo reclamar',
  description:
    'Despido sin causa justificada: 90 días de indemnización, 20 días por año, prima de antigüedad y salarios caídos. Cuánto te toca y los pasos para reclamar ante PROFEDET.',
  alternates: { canonical: '/guias/liquidacion-despido-injustificado' },
};

const faq = [
  {
    q: '¿Cuánto tiempo tengo para demandar un despido injustificado?',
    a: 'Dos meses a partir del día siguiente al despido (Art. 518 LFT). Es un plazo corto — actúa rápido y acude primero a PROFEDET, que es gratuita.',
  },
  {
    q: '¿Qué son los salarios caídos?',
    a: 'Si demandas y ganas, el patrón debe pagarte los salarios desde el despido hasta por 12 meses, más intereses del 2% mensual sobre 15 meses de salario si el juicio se alarga (Art. 48 LFT).',
  },
  {
    q: '¿Me pueden obligar a firmar mi renuncia?',
    a: 'No. Una renuncia firmada bajo presión es impugnable, pero probarlo es difícil. Si te presentan una renuncia que no escribiste tú, no la firmes; di que necesitas revisarla y busca asesoría el mismo día.',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="Liquidación por despido injustificado: tus derechos en 2026"
      intro="Si te despidieron sin una causa de las que enumera el Artículo 47 de la LFT, la ley te protege con una de las indemnizaciones más completas de América Latina."
      faq={faq}
      related={[
        { href: '/guias/cuanto-me-toca-de-finiquito-ejemplos', label: 'Ejemplos de finiquito y liquidación por años trabajados' },
        { href: '/guias/finiquito-por-renuncia', label: 'Finiquito por renuncia voluntaria' },
        { href: '/guias/como-calcular-sdi', label: 'Cómo calcular tu SDI' },
      ]}
    >
      <div>
        <H2>Los 4 conceptos de tu liquidación</H2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Indemnización constitucional:</strong> 90 días (3 meses) de SDI — Art. 123
            constitucional y 48 LFT.
          </li>
          <li>
            <strong>20 días por año:</strong> 20 días de SDI por cada año de servicio y parte
            proporcional (Art. 50 LFT).
          </li>
          <li>
            <strong>Prima de antigüedad:</strong> 12 días de salario por año, con tope de 2
            salarios mínimos por día ($630.08 en 2026; $881.74 en frontera norte).
          </li>
          <li>
            <strong>Partes proporcionales:</strong> aguinaldo, vacaciones pendientes y prima
            vacacional — lo mismo que en cualquier finiquito.
          </li>
        </ol>
      </div>

      <div>
        <H2>Ejemplo: 4 años de antigüedad, $18,000/mes</H2>
        <ul className="list-disc list-inside space-y-1">
          <li>Salario diario: $600 · SDI ≈ $626</li>
          <li>Indemnización 90 días: ≈ $56,340</li>
          <li>20 días × 4 años: ≈ $50,080</li>
          <li>Prima de antigüedad (12 × 4, con tope): ≈ $30,240</li>
          <li>Proporcionales (varía por fecha): ≈ $8,000–$12,000</li>
          <li>
            <strong>Total bruto: ≈ $145,000–$150,000</strong>
          </li>
        </ul>
        <p className="mt-3">
          Obtén el cálculo exacto — incluyendo la exención de ISR de 90 UMAs por año (Art. 93
          LISR) — con la{' '}
          <Link href="/" className="text-blue-600 underline font-semibold">
            calculadora de liquidación
          </Link>
          .
        </p>
      </div>

      <div>
        <H2>Pasos para reclamar</H2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>No firmes nada</strong> que diga «renuncia voluntaria» o un finiquito con el
            que no estés de acuerdo.
          </li>
          <li>
            <strong>Reúne pruebas:</strong> contrato, recibos de nómina, mensajes del despido,
            testigos.
          </li>
          <li>
            <strong>Acude a PROFEDET</strong> (gratuito, tel. 800 911 7877) o agenda la audiencia
            de conciliación prejudicial obligatoria en el Centro de Conciliación Laboral.
          </li>
          <li>
            <strong>Concilia o demanda:</strong> la mayoría de los casos se resuelven en
            conciliación con un convenio pagado en ese acto. Si no hay acuerdo, pasa al Tribunal
            Laboral.
          </li>
        </ol>
      </div>

      <div>
        <H2>Ojo con estas prácticas</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>«Te liquidamos con finiquito»:</strong> que el documento diga liquidación no
            garantiza que incluya los 90 días — revisa el desglose.
          </li>
          <li>
            <strong>Ofertas exprés:</strong> ofrecer 1 mes «para no hacerla larga» suele ser una
            fracción de lo que marca la ley.
          </li>
          <li>
            <strong>Descuentos indebidos:</strong> no pueden descontarte uniformes, herramientas ni
            «faltantes» sin tu consentimiento por escrito.
          </li>
        </ul>
      </div>
    </GuiaShell>
  );
}
