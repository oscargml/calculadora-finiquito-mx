import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guías Laborales México 2026 | Finiquito, Incapacidades, SDI',
  description:
    'Guías gratuitas sobre derecho laboral mexicano: finiquito, liquidación, incapacidades IMSS, maternidad, riesgo de trabajo y cómo calcular tu SDI.',
  alternates: { canonical: '/guias' },
};

const guias = [
  {
    href: '/guias/cuanto-me-toca-de-finiquito-ejemplos',
    title: '¿Cuánto me toca de finiquito? Ejemplos reales por años trabajados',
    desc: 'Casos prácticos: 1, 2, 5 y 10 años de antigüedad, por renuncia y por despido.',
    tag: 'Finiquito',
  },
  {
    href: '/guias/finiquito-por-renuncia',
    title: 'Finiquito por renuncia voluntaria: qué te deben pagar',
    desc: 'Aguinaldo y vacaciones proporcionales, prima vacacional y plazos de pago.',
    tag: 'Finiquito',
  },
  {
    href: '/guias/liquidacion-despido-injustificado',
    title: 'Liquidación por despido injustificado: tus derechos en 2026',
    desc: '90 días de indemnización, 20 días por año, prima de antigüedad y cómo reclamar.',
    tag: 'Finiquito',
  },
  {
    href: '/guias/guia-incapacidades-lft',
    title: 'Guía completa de incapacidades: Ley Federal del Trabajo 2026',
    desc: 'Todos los tipos de incapacidad, quién paga, cuánto y con qué fundamento legal.',
    tag: 'Incapacidad',
  },
  {
    href: '/guias/incapacidad-enfermedad-general',
    title: '¿Cuánto me pagan si tengo incapacidad por enfermedad?',
    desc: 'El 60% del SDI a partir del día 4 — con ejemplos numéricos y tabla de montos.',
    tag: 'Incapacidad',
  },
  {
    href: '/guias/primeros-3-dias-incapacidad',
    title: 'Primeros 3 días de incapacidad: ¿quién los paga?',
    desc: 'Qué dice la ley sobre los días de carencia y qué hacen muchas empresas.',
    tag: 'Incapacidad',
  },
  {
    href: '/guias/incapacidad-riesgo-trabajo',
    title: 'Incapacidad por riesgo de trabajo: 100% del SDI desde el día 1',
    desc: 'Accidente laboral o de trayecto: pagos, requisitos y diferencias clave.',
    tag: 'Incapacidad',
  },
  {
    href: '/guias/incapacidad-maternidad',
    title: 'Maternidad IMSS: derechos y cálculo de los 84 días',
    desc: 'Cuánto recibes, cómo se transfieren semanas y qué pasa si el IMSS no paga.',
    tag: 'Incapacidad',
  },
  {
    href: '/guias/como-calcular-sdi',
    title: 'Cómo calcular tu SDI (Salario Diario Integrado)',
    desc: 'Fórmula exacta con aguinaldo y prima vacacional, ejemplos y errores comunes.',
    tag: 'SDI',
  },
  {
    href: '/guias/imss-vs-issste-vs-seguro-privado',
    title: 'IMSS vs ISSSTE vs seguro privado: comparativa de incapacidades',
    desc: 'Quién paga más, en qué plazos y qué conviene según tu situación.',
    tag: 'Incapacidad',
  },
];

export default function GuiasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Guías Laborales México</h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Explicaciones claras de tus derechos laborales, con fundamento legal y ejemplos
            numéricos. Complementa cada guía con nuestras calculadoras gratuitas.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {guias.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition p-5 flex flex-col"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-2">
              {g.tag}
            </span>
            <h2 className="font-bold text-gray-900 leading-snug mb-1.5">{g.title}</h2>
            <p className="text-sm text-gray-500">{g.desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
