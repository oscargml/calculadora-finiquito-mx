import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | CalculadoraFiniquito.mx',
};

export default function Privacidad() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Política de Privacidad</h1>
      <p className="text-sm text-gray-500 mb-8">Última actualización: mayo 2026</p>

      <section className="space-y-6 text-sm">
        <div>
          <h2 className="font-semibold text-gray-900 mb-2">1. Información que recopilamos</h2>
          <p>
            Esta herramienta es <strong>completamente estática y sin servidor</strong>. No
            almacenamos, transmitimos ni guardamos ningún dato personal que ingreses en la
            calculadora (fechas, salario, etc.). Todos los cálculos se realizan localmente en tu
            navegador.
          </p>
          <p className="mt-2">
            Utilizamos <strong>Google AdSense</strong> y <strong>Google Analytics</strong> para
            monetización y análisis de tráfico, los cuales pueden recopilar datos de uso anónimos
            mediante cookies.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">2. Uso de Cookies</h2>
          <p>
            Usamos cookies de terceros (Google AdSense / Google Analytics) para mostrar anuncios
            relevantes y medir el uso del sitio. Puedes controlar las cookies desde la
            configuración de tu navegador.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">3. Google AdSense</h2>
          <p>
            Google puede usar cookies de DoubleClick para mostrar anuncios basados en tus visitas
            anteriores. Puedes desactivar la personalización de anuncios en{' '}
            <a
              href="https://adssettings.google.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              adssettings.google.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">4. Tus Derechos (LFPDPPP)</h2>
          <p>
            Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares, puedes ejercer tus derechos ARCO enviando un correo a
            contacto@calculadorafiniquito.mx.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">5. Contacto</h2>
          <p>
            Dudas sobre esta política: <a href="/contacto" className="text-blue-600 underline">página de contacto</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
