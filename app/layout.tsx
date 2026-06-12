import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://calculadorafiniquitomx.xyz'),
  title: 'Calculadora Finiquito y Liquidación México 2026',
  description: 'Calcula tus prestaciones laborales en México conforme a la LFT 2026.',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: '9QOIEw9h8EQXwTxGcS2FIAtMZrvIJyc009PzXOQULjg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <head>
        <link rel="alternate" hrefLang="es-mx" href="/" />
        {/* Google AdSense — must be in <head> for crawler detection */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8643026289824701"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50">
        <div className="flex-1">{children}</div>
        <footer className="bg-gray-800 text-gray-400 text-sm py-6 px-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-3">
            <p>© {new Date().getFullYear()} CalculadoraFiniquitoMX.xyz — Herramienta informativa</p>
            <nav className="flex gap-4">
              <a href="/privacidad" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="/terminos" className="hover:text-white transition-colors">
                Términos
              </a>
              <a href="/contacto" className="hover:text-white transition-colors">
                Contacto
              </a>
            </nav>
          </div>
        </footer>
        <CookieBanner />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7B124V9DV4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7B124V9DV4');
          `}
        </Script>
      </body>
    </html>
  );
}
