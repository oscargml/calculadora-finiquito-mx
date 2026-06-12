import Link from 'next/link';

/**
 * Shared article shell for /guias pages: hero, prose container,
 * related-links footer and optional FAQPage JSON-LD.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export function GuiaShell({
  title,
  intro,
  children,
  related,
  faq,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
  related: { href: string; label: string }[];
  faq?: FaqItem[];
}) {
  return (
    <main className="min-h-screen bg-gray-50">
      {faq && faq.length > 0 && (
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
      )}
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold mb-2">
            <Link href="/guias" className="hover:underline">
              Guías laborales
            </Link>
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">{title}</h1>
          <p className="text-blue-100 text-base sm:text-lg">{intro}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10 text-gray-700 leading-relaxed space-y-8">
        {children}

        {faq && faq.length > 0 && (
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
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <h2 className="font-bold text-gray-900 mb-2">Sigue leyendo</h2>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-blue-600 underline">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
          Contenido informativo basado en la legislación mexicana vigente. No constituye asesoría
          legal; para tu caso específico consulta a un abogado laboralista o a la autoridad
          competente.
        </p>
      </article>
    </main>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-gray-900 mb-3">{children}</h2>;
}
