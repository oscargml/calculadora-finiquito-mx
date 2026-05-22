'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-gray-900 text-white p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
      <p className="text-sm text-gray-300 max-w-2xl">
        Usamos cookies para mejorar tu experiencia y mostrar anuncios relevantes. Al continuar,
        aceptas nuestra{' '}
        <a href="/privacidad" className="underline text-blue-400">
          Política de Privacidad
        </a>
        .
      </p>
      <button
        onClick={accept}
        className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg"
      >
        Aceptar
      </button>
    </div>
  );
}
