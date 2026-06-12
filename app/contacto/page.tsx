import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | CalculadoraFiniquito.mx',
};

export default function Contacto() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 text-gray-700">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h1>
      <p className="mb-6 text-sm text-gray-600">
        ¿Encontraste un error en el cálculo o tienes una sugerencia? Escríbenos.
      </p>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-sm space-y-4">
        <div>
          <p className="font-semibold text-gray-900">Correo electrónico</p>
          <a href="mailto:oscargml@gmail.com" className="text-blue-600 underline">
            oscargml@gmail.com
          </a>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Tiempo de respuesta</p>
          <p>Respondemos en un plazo de 2-3 días hábiles.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Aviso</p>
          <p>
            No brindamos asesoría legal ni podemos revisar casos particulares. Para eso, consulta
            a un abogado laboral.
          </p>
        </div>
      </div>
    </main>
  );
}
