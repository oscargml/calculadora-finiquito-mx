import Link from 'next/link';

const links = [
  { href: '/', label: 'Finiquito' },
  { href: '/incapacidad', label: 'Incapacidad' },
  { href: '/hipoteca', label: 'Hipoteca' },
  { href: '/guias', label: 'Guías' },
];

export default function SiteNav() {
  return (
    <header className="bg-blue-800 text-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Link href="/" className="font-extrabold tracking-tight text-lg">
          🇲🇽 Calculadoras Laborales MX
        </Link>
        <nav className="flex gap-1 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
