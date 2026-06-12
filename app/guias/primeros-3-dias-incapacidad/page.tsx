import type { Metadata } from 'next';
import Link from 'next/link';
import { GuiaShell, H2 } from '@/components/Guia';

export const metadata: Metadata = {
  title: 'Primeros 3 días de incapacidad: ¿quién paga? (Ley 2026)',
  description:
    'Los primeros 3 días de una incapacidad por enfermedad general son días de carencia: ni el IMSS ni el patrón están obligados a pagarlos. Excepciones y qué puedes hacer.',
  alternates: { canonical: '/guias/primeros-3-dias-incapacidad' },
};

const faq = [
  {
    q: '¿Mi patrón está obligado a pagarme los primeros 3 días?',
    a: 'No por ley, en enfermedad general. Sí está obligado si tu contrato individual, contrato colectivo o el reglamento interior de la empresa lo establece. Muchas empresas pagan el 40% restante o el 100% como prestación.',
  },
  {
    q: '¿En riesgo de trabajo también hay 3 días de carencia?',
    a: 'No. En riesgo de trabajo (accidente laboral o de trayecto) el IMSS paga el 100% del SDI desde el día 1, sin carencia.',
  },
  {
    q: '¿Me pueden descontar esos 3 días como faltas?',
    a: 'No son faltas injustificadas: el certificado de incapacidad justifica tu ausencia y protege tu empleo. Simplemente son días sin subsidio, no causal de despido.',
  },
];

export default function Page() {
  return (
    <GuiaShell
      title="Primeros 3 días de incapacidad: ¿quién los paga?"
      intro="Es la duda más buscada sobre incapacidades en México — y la respuesta corta es incómoda: en enfermedad general, nadie está obligado. Aquí los detalles y las excepciones."
      faq={faq}
      related={[
        { href: '/guias/incapacidad-enfermedad-general', label: '¿Cuánto pagan por incapacidad de enfermedad general?' },
        { href: '/guias/incapacidad-riesgo-trabajo', label: 'Riesgo de trabajo: 100% desde el día 1' },
        { href: '/guias/guia-incapacidades-lft', label: 'Guía completa de incapacidades' },
      ]}
    >
      <div>
        <H2>Por qué existen los días de carencia</H2>
        <p>
          El Artículo 96 de la Ley del Seguro Social establece que el subsidio por enfermedad
          general se paga <strong>«a partir del cuarto día del inicio de la incapacidad»</strong>.
          El legislador diseñó la carencia como filtro contra ausencias breves y para contener el
          costo del seguro de enfermedades. El resultado práctico: los días 1, 2 y 3 no los cubre
          el IMSS, y la LFT tampoco traslada esa obligación al patrón.
        </p>
      </div>

      <div>
        <H2>Cuándo sí te pagan esos días</H2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Contrato colectivo o individual:</strong> muchas empresas (sobre todo grandes
            y sindicalizadas) pactan cubrir la carencia, a veces completando hasta el 100% del
            sueldo.
          </li>
          <li>
            <strong>Política interna / prestaciones superiores:</strong> revisa tu reglamento
            interior o pregunta a Recursos Humanos; es una prestación común.
          </li>
          <li>
            <strong>Riesgo de trabajo:</strong> si el origen es laboral o un accidente de
            trayecto, no hay carencia — exige que se clasifique correctamente.
          </li>
          <li>
            <strong>Maternidad:</strong> tampoco tiene carencia; son 84 días al 100%.
          </li>
        </ul>
      </div>

      <div>
        <H2>La clasificación importa (y mucho)</H2>
        <p>
          Si te lesionaste <strong>camino al trabajo</strong> y el médico lo registra como
          enfermedad general, pierdes el 100% desde el día 1 y cobras solo 60% desde el día 4.
          Declara siempre el origen real del padecimiento y, si fue de trayecto, aporta evidencia
          (hora, lugar, ruta). Compara los montos en la{' '}
          <Link href="/incapacidad" className="text-blue-600 underline font-semibold">
            calculadora de incapacidades
          </Link>{' '}
          — la diferencia suele ser de miles de pesos.
        </p>
      </div>
    </GuiaShell>
  );
}
