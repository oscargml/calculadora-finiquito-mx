import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: 'Incapacidad por Maternidad IMSS 2026: 84 días al 100% del SDI',
  description:
    'Maternidad IMSS: 84 días pagados al 100% del SDI, requisitos de semanas cotizadas, transferencia de semanas y qué hacer si el IMSS no te paga el subsidio.',
  alternates: { canonical: '/guias/incapacidad-maternidad' },
};

const faq = [
  {
    q: '¿Cuántas semanas cotizadas necesito para el subsidio de maternidad?',
    a: 'Al menos 30 semanas cotizadas en los 12 meses anteriores al inicio de la incapacidad (Art. 102 LSS). Si no las reúnes, el patrón debe pagar tu salario completo durante el descanso (Art. 103 LSS).',
  },
  {
    q: '¿Puedo transferir semanas del descanso prenatal al posnatal?',
    a: 'Sí: hasta 4 de las 6 semanas previas al parto pueden transferirse para después, con autorización médica (Art. 170 LFT).',
  },
  {
    q: '¿El periodo de lactancia está protegido?',
    a: 'Sí: dos reposos de media hora al día (o reducción de jornada de una hora, por acuerdo) durante 6 meses, sin descuento salarial.',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="Maternidad IMSS: derechos y cálculo de los 84 días"
      intro="La incapacidad por maternidad es la más protegida: 84 días al 100% del SDI, sin carencia, con empleo y antigüedad garantizados."
      faq={faq}
      related={[
        { href: '/guias/como-calcular-sdi', label: 'Cómo calcular tu SDI' },
        { href: '/guias/guia-incapacidades-lft', label: 'Guía completa de incapacidades' },
        { href: '/guias/imss-vs-issste-vs-seguro-privado', label: 'IMSS vs ISSSTE vs seguro privado' },
      ]}
    >
      <div>
        <H2>Cómo funciona el pago</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>84 días (12 semanas)</strong> de subsidio: 42 antes y 42 después del parto
            (Art. 101 LSS), transferibles parcialmente al posparto.
          </li>
          <li>
            <strong>100% del SDI</strong>, pagado directamente por el IMSS — sin días de carencia.
          </li>
          <li>
            En <strong>adopción</strong>, corresponden 6 semanas de descanso con goce de sueldo
            posteriores a la entrega del menor (Art. 170 LFT).
          </li>
        </ul>
      </div>

      <div>
        <H2>Ejemplo numérico</H2>
        <p>
          SDI de $520: 84 × $520 = <strong>$43,680 pagados por el IMSS</strong>, libres de la
          carencia y sin afectar tu aguinaldo ni vacaciones, que siguen corriendo. Calcula tu monto
          con la{' '}
          <Link href="/incapacidad" className="text-blue-600 underline font-semibold">
            calculadora de incapacidades
          </Link>
          .
        </p>
      </div>

      <div>
        <H2>Protecciones adicionales</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Despedirte por embarazo es discriminación</strong> y da lugar a reinstalación
            o indemnización completa; desde la reforma procesal, la carga de la prueba recae en el
            patrón.
          </li>
          <li>
            <strong>Tu puesto se conserva</strong> hasta por un año después del parto (Art. 170
            LFT).
          </li>
          <li>
            <strong>No hay trabajos insalubres</strong> durante embarazo y lactancia, sin
            reducción salarial.
          </li>
        </ul>
      </div>

      <div>
        <H2>Si el IMSS no te paga</H2>
        <p>
          Verifica que tu patrón te haya inscrito con el salario real y que el certificado se haya
          expedido correctamente. Si no reúnes las 30 semanas cotizadas, el obligado a pagar el
          descanso es el patrón. Cualquier negativa puede reclamarse en la unidad médica, en el
          buzón IMSS o ante PROFEDET.
        </p>
      </div>
    </GuiaShell>
  );
}
