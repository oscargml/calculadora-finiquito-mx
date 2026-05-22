import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Uso | CalculadoraFiniquito.mx',
};

export default function Terminos() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Términos de Uso</h1>
      <p className="text-sm text-gray-500 mb-8">Última actualización: mayo 2026</p>

      <section className="space-y-6 text-sm">
        <div>
          <h2 className="font-semibold text-gray-900 mb-2">1. Carácter Informativo</h2>
          <p>
            CalculadoraFiniquito.mx es una herramienta de estimación informativa. Los resultados
            generados <strong>no constituyen asesoría legal</strong> ni fiscal. Para determinar
            montos exactos con fuerza legal, consulta a un abogado laboral o contador certificado.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">2. Exactitud de los Datos</h2>
          <p>
            Mantenemos las constantes legales (UMA, salario mínimo, tabla LFT) actualizadas para
            el ejercicio fiscal vigente. Sin embargo, el usuario es responsable de verificar las
            cifras con las publicaciones oficiales del DOF y el SAT.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">3. Limitación de Responsabilidad</h2>
          <p>
            El sitio se proporciona &quot;tal cual&quot;. No somos responsables de errores en los
            cálculos derivados de datos incorrectos ingresados por el usuario, ni de cambios
            legislativos no reflejados en la herramienta.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">4. Uso Permitido</h2>
          <p>
            Puedes usar esta herramienta de forma personal y profesional sin costo. Queda prohibida
            la reproducción o redistribución del código fuente sin autorización escrita.
          </p>
        </div>
      </section>
    </main>
  );
}
