import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: 'Finiquito por Renuncia Voluntaria 2026: qué te deben pagar',
  description:
    'Si renuncias, te corresponde aguinaldo proporcional, vacaciones no gozadas y prima vacacional. Te explicamos cada concepto, cómo se calcula y qué hacer si no te pagan.',
  alternates: { canonical: '/guias/finiquito-por-renuncia' },
};

const faq = [
  {
    q: '¿Si renuncio me toca liquidación?',
    a: 'No. La liquidación (90 días + 20 días por año) solo aplica en despido injustificado. Al renunciar recibes únicamente el finiquito: partes proporcionales de aguinaldo, vacaciones y prima vacacional, más salarios pendientes.',
  },
  {
    q: '¿Cuándo me toca prima de antigüedad si renuncio?',
    a: 'Solo si cumpliste 15 años o más de servicio (Art. 162 LFT). Son 12 días de salario por año, con tope de 2 veces el salario mínimo.',
  },
  {
    q: '¿Qué pasa si no me pagan mi finiquito?',
    a: 'Tienes 1 año para reclamarlo. Acude a la Procuraduría de la Defensa del Trabajo (PROFEDET) — es gratuita — o presenta demanda ante el Tribunal Laboral.',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="Finiquito por renuncia voluntaria: qué te deben pagar"
      intro="Renunciar no significa irte con las manos vacías. La ley te garantiza el pago proporcional de varias prestaciones — aquí está la lista completa."
      faq={faq}
      related={[
        { href: '/guias/cuanto-me-toca-de-finiquito-ejemplos', label: '¿Cuánto me toca de finiquito? Ejemplos por años trabajados' },
        { href: '/guias/liquidacion-despido-injustificado', label: 'Liquidación por despido injustificado' },
        { href: '/guias/como-calcular-sdi', label: 'Cómo calcular tu SDI' },
      ]}
    >
      <div>
        <H2>Lo que sí incluye tu finiquito al renunciar</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Salarios devengados:</strong> los días trabajados de la última semana o
            quincena que aún no te pagan.
          </li>
          <li>
            <strong>Aguinaldo proporcional:</strong> mínimo 15 días de salario al año (Art. 87
            LFT). Si te vas en julio, te toca la mitad aproximada.
          </li>
          <li>
            <strong>Vacaciones proporcionales y pendientes:</strong> desde la reforma de
            «Vacaciones Dignas», el primer año da 12 días, y suben 2 por año hasta 20 (luego 2 cada
            5 años). Los días no gozados se pagan.
          </li>
          <li>
            <strong>Prima vacacional:</strong> 25% sobre los días de vacaciones que te paguen
            (Art. 80 LFT).
          </li>
          <li>
            <strong>Prima de antigüedad</strong> — solo con 15+ años de servicio (Art. 162 LFT).
          </li>
          <li>
            <strong>Prestaciones extralegales pendientes:</strong> fondo de ahorro, bonos o
            comisiones ya generadas que estén en tu contrato.
          </li>
        </ul>
      </div>

      <div>
        <H2>Lo que NO incluye</H2>
        <p>
          Al ser una decisión voluntaria, <strong>no</strong> recibes indemnización constitucional
          (90 días) ni 20 días por año. Esos conceptos corresponden exclusivamente al despido
          injustificado o a la rescisión por causa imputable al patrón (Art. 51 LFT) — por ejemplo,
          si te redujeron el salario o sufres hostigamiento, puedes «autodespedirte» con derecho a
          liquidación completa.
        </p>
      </div>

      <div>
        <H2>Ejemplo numérico rápido</H2>
        <p>
          Sueldo $12,000/mes, renuncias el 30 de junio con 3 años de antigüedad y 8 días de
          vacaciones pendientes:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Aguinaldo proporcional (6 meses): ≈ $3,000</li>
          <li>Vacaciones pendientes (8 días): $3,200</li>
          <li>Prima vacacional (25%): $800</li>
          <li>
            <strong>Total bruto: ≈ $7,000</strong>
          </li>
        </ul>
        <p className="mt-3">
          Verifica tu caso con fechas exactas en la{' '}
          <Link href="/" className="text-blue-600 underline font-semibold">
            calculadora de finiquito
          </Link>
          .
        </p>
      </div>

      <div>
        <H2>Consejos antes de firmar</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>Pide el desglose por escrito de cada concepto.</li>
          <li>
            Firmar el finiquito no te impide reclamar después diferencias mal calculadas (la
            renuncia a derechos laborales es nula, Art. 33 LFT).
          </li>
          <li>Conserva copia de tu renuncia, finiquito y comprobantes de pago.</li>
        </ul>
      </div>
    </GuiaShell>
  );
}
