import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: '¿Cuánto me toca de finiquito? Ejemplos por años trabajados (2026)',
  description:
    '¿Cuánto finiquito te corresponde con 1, 2, 5 o 10 años de trabajo? Ejemplos numéricos reales por renuncia y por despido injustificado, conforme a la LFT 2026.',
  alternates: { canonical: '/guias/cuanto-me-toca-de-finiquito-ejemplos' },
};

const faq = [
  {
    q: '¿Cuánto me toca de finiquito por 2 años de trabajo si renuncio?',
    a: 'Con sueldo de $15,000/mes: aproximadamente $6,200–$8,500 entre aguinaldo proporcional, vacaciones no gozadas y prima vacacional, según tu fecha de baja. No incluye indemnización porque la renuncia es voluntaria.',
  },
  {
    q: '¿Cuánto me toca de liquidación por 5 años si me despiden sin causa?',
    a: 'Con sueldo de $15,000/mes (SDI ≈ $521): unos $46,900 de indemnización constitucional (90 días) + $52,100 de 20 días por año + prima de antigüedad (~$18,900) + partes proporcionales. Total aproximado: $120,000–$125,000.',
  },
  {
    q: '¿En cuánto tiempo deben pagarme el finiquito?',
    a: 'La LFT no fija un plazo exacto, pero la práctica aceptada es el pago inmediato a la terminación o dentro de los días siguientes. Si no te pagan, tienes hasta 1 año para reclamarlo ante la Junta o el Tribunal Laboral.',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="¿Cuánto me toca de finiquito? Ejemplos reales por años trabajados"
      intro="La respuesta depende de tres cosas: tu sueldo, tu antigüedad y si fue renuncia o despido. Aquí tienes los números, caso por caso."
      faq={faq}
      related={[
        { href: '/guias/finiquito-por-renuncia', label: 'Finiquito por renuncia voluntaria: qué te deben pagar' },
        { href: '/guias/liquidacion-despido-injustificado', label: 'Liquidación por despido injustificado: tus derechos' },
        { href: '/guias/como-calcular-sdi', label: 'Cómo calcular tu SDI paso a paso' },
      ]}
    >
      <div>
        <H2>Las dos situaciones posibles</H2>
        <p>
          <strong>Renuncia voluntaria (finiquito):</strong> solo recibes partes proporcionales —
          aguinaldo (15 días por año, proporcional), vacaciones no gozadas y prima vacacional (25%).
          Si tienes 15+ años de antigüedad, también prima de antigüedad.
        </p>
        <p className="mt-3">
          <strong>Despido injustificado (liquidación):</strong> además de lo anterior, te
          corresponden <strong>90 días de indemnización constitucional</strong>,{' '}
          <strong>20 días de SDI por cada año trabajado</strong> y la{' '}
          <strong>prima de antigüedad</strong> (12 días por año, con tope de 2 salarios mínimos).
        </p>
      </div>

      <div>
        <H2>Ejemplos con sueldo de $15,000 MXN/mes</H2>
        <p className="mb-3">
          Salario diario: $500. SDI aproximado (con aguinaldo y prima vacacional integrados): $521.
          Montos brutos estimados; el ISR puede reducir el neto.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 bg-white rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 font-bold">Antigüedad</th>
                <th className="text-right p-3 font-bold">Renuncia (finiquito)</th>
                <th className="text-right p-3 font-bold">Despido (liquidación)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3">1 año</td>
                <td className="p-3 text-right">≈ $4,000 – $7,500</td>
                <td className="p-3 text-right">≈ $70,000 – $75,000</td>
              </tr>
              <tr>
                <td className="p-3">2 años</td>
                <td className="p-3 text-right">≈ $6,200 – $8,500</td>
                <td className="p-3 text-right">≈ $85,000 – $90,000</td>
              </tr>
              <tr>
                <td className="p-3">5 años</td>
                <td className="p-3 text-right">≈ $7,000 – $10,000</td>
                <td className="p-3 text-right">≈ $120,000 – $125,000</td>
              </tr>
              <tr>
                <td className="p-3">10 años</td>
                <td className="p-3 text-right">≈ $8,000 – $12,000</td>
                <td className="p-3 text-right">≈ $190,000 – $200,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Rangos estimados: varían según la fecha de baja (aguinaldo y vacaciones proporcionales) y
          los días de vacaciones pendientes.
        </p>
      </div>

      <div>
        <H2>Calcula tu caso exacto</H2>
        <p>
          Estos rangos son orientativos. Para obtener tu cifra exacta con tus fechas reales de
          ingreso y baja, usa la{' '}
          <Link href="/" className="text-blue-600 underline font-semibold">
            calculadora de finiquito y liquidación
          </Link>{' '}
          — incluye el desglose de ISR con las exenciones del Artículo 93 de la LISR (90 UMAs por
          año de servicio).
        </p>
      </div>

      <div>
        <H2>Errores comunes al estimar tu finiquito</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Usar el salario diario en lugar del SDI:</strong> la indemnización se calcula
            con el SDI, que es mayor porque integra aguinaldo y prima vacacional.
          </li>
          <li>
            <strong>Olvidar las vacaciones pendientes:</strong> los días no gozados del año
            anterior también se pagan, más su prima del 25%.
          </li>
          <li>
            <strong>Firmar la renuncia bajo presión:</strong> si te hacen firmar renuncia cuando en
            realidad te despidieron, pierdes la indemnización. No firmes sin leer.
          </li>
        </ul>
      </div>
    </GuiaShell>
  );
}
