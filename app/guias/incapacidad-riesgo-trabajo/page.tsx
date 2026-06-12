import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: 'Incapacidad por Riesgo de Trabajo: 100% del SDI desde el día 1',
  description:
    'Accidente laboral o de trayecto: el IMSS paga el 100% de tu SDI sin días de carencia. Qué cuenta como riesgo de trabajo, el formato ST-7 y errores que cuestan dinero.',
  alternates: { canonical: '/guias/incapacidad-riesgo-trabajo' },
};

const faq = [
  {
    q: '¿El accidente de trayecto cuenta como riesgo de trabajo?',
    a: 'Sí. El Artículo 474 de la LFT incluye los accidentes ocurridos al trasladarse directamente del domicilio al trabajo o viceversa. Aplican las mismas prestaciones: 100% del SDI sin carencia.',
  },
  {
    q: '¿Qué es el formato ST-7?',
    a: 'Es el aviso de atención médica y calificación de probable riesgo de trabajo. El patrón debe llenarlo; si se niega, tú mismo puedes solicitarlo en la unidad médica del IMSS para que el riesgo quede calificado.',
  },
  {
    q: '¿Qué pasa si quedo con secuelas permanentes?',
    a: 'El IMSS dictamina una incapacidad permanente parcial o total con derecho a indemnización global o pensión, según el porcentaje de valuación (Arts. 58 LSS y 492-495 LFT).',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="Incapacidad por riesgo de trabajo: 100% del SDI desde el día 1"
      intro="Si tu lesión ocurrió trabajando — o yendo o viniendo del trabajo — la ley te da el tratamiento más protector de todos: pago completo, sin días de carencia."
      faq={faq}
      related={[
        { href: '/guias/primeros-3-dias-incapacidad', label: '¿Quién paga los primeros 3 días de incapacidad?' },
        { href: '/guias/incapacidad-enfermedad-general', label: 'Incapacidad por enfermedad general' },
        { href: '/guias/como-calcular-sdi', label: 'Cómo calcular tu SDI' },
      ]}
    >
      <div>
        <H2>Qué recibes exactamente</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>100% del SDI</strong> por cada día de incapacidad, pagado por el IMSS desde el
            primer día (Art. 58 LSS).
          </li>
          <li>
            <strong>Sin carencia:</strong> a diferencia de la enfermedad general, no pierdes los
            primeros 3 días.
          </li>
          <li>
            <strong>Atención médica, rehabilitación y prótesis</strong> a cargo del IMSS.
          </li>
          <li>
            <strong>Conservación de derechos:</strong> el tiempo incapacitado cuenta como cotizado.
          </li>
        </ul>
      </div>

      <div>
        <H2>Qué califica como riesgo de trabajo</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>Accidentes durante la jornada, dentro o fuera de las instalaciones.</li>
          <li>
            <strong>Accidentes de trayecto</strong> (casa → trabajo o trabajo → casa, ruta
            directa).
          </li>
          <li>
            <strong>Enfermedades de trabajo:</strong> padecimientos derivados de la actividad
            (hipoacusia por ruido, lesiones por esfuerzo repetitivo, etc., tabla del Art. 513 LFT).
          </li>
        </ul>
      </div>

      <div>
        <H2>Ejemplo: 21 días, SDI de $600</H2>
        <p>
          Riesgo de trabajo: 21 × $600 × 100% = <strong>$12,600</strong>. Si el mismo caso se
          clasificara (mal) como enfermedad general: 18 días × $600 × 60% ={' '}
          <strong>$6,480</strong>. La clasificación correcta vale casi el doble — compara tu caso
          en la{' '}
          <Link href="/incapacidad" className="text-blue-600 underline font-semibold">
            calculadora de incapacidades
          </Link>
          .
        </p>
      </div>

      <div>
        <H2>Errores que cuestan dinero</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>No reportar el accidente de inmediato:</strong> repórtalo a tu jefe y al IMSS
            el mismo día; la demora facilita que lo clasifiquen como enfermedad general.
          </li>
          <li>
            <strong>Aceptar «mejor repórtalo como enfermedad»:</strong> algunos patrones lo piden
            para no afectar su prima de riesgo. Tú pierdes 40% del subsidio y prestaciones.
          </li>
          <li>
            <strong>No guardar evidencia del trayecto:</strong> ubicación, horario, testigos o
            parte vial sustentan la calificación.
          </li>
        </ul>
      </div>
    </GuiaShell>
  );
}
