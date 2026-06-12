import type { Metadata } from 'next';
import CalculadoraHipoteca from '@/components/CalculadoraHipoteca';

export const metadata: Metadata = {
  title: 'Calculadora Hipotecaria México 2026 | Compara bancos e ISAI',
  description:
    'Simula tu crédito hipotecario en México: mensualidad, tabla de amortización, comparativa de tasas por banco (BBVA, Banorte, Santander, Infonavit) y gastos de escrituración ISAI por estado.',
  alternates: { canonical: '/hipoteca' },
  keywords: [
    'calculadora hipotecaria mexico',
    'simulador credito hipotecario',
    'tabla de amortizacion hipoteca',
    'comparativa tasas hipotecarias bancos mexico',
    'cuanto cuesta escriturar una casa isai',
  ],
};

export default function HipotecaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Calculadora Hipotecaria México 2026
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Simula tu mensualidad, compara tasas de los principales bancos y estima los gastos de
            escrituración (ISAI) de tu estado.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <CalculadoraHipoteca />
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-16 text-gray-700 leading-relaxed space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Qué incluye el costo real de un crédito hipotecario?
          </h2>
          <p>
            La mensualidad no es el único costo. Para comparar ofertas usa el <strong>CAT</strong>{' '}
            (Costo Anual Total), que suma intereses, comisiones y seguros obligatorios. Además,
            al comprar deberás cubrir el <strong>ISAI</strong> (impuesto sobre adquisición de
            inmuebles, 2%–3% según el estado), los honorarios del notario y la inscripción en el
            Registro Público de la Propiedad — en conjunto, entre 4% y 10% del valor del inmueble.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Consejos para mejorar tu tasa</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Aumenta el enganche:</strong> con 20%+ de enganche casi todos los bancos
              ofrecen su mejor tasa.
            </li>
            <li>
              <strong>Domicilia tu nómina:</strong> Banorte, Santander y BBVA descuentan puntos
              porcentuales a clientes de nómina.
            </li>
            <li>
              <strong>Compara CAT, no tasa nominal:</strong> una tasa baja con comisiones altas
              puede salir más cara.
            </li>
            <li>
              <strong>Considera Cofinavit:</strong> combina tu subcuenta de vivienda Infonavit con
              un crédito bancario para ampliar tu capacidad de compra.
            </li>
          </ul>
        </div>
        <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
          Las tasas mostradas son de referencia y pueden cambiar sin previo aviso. Verifica las
          condiciones vigentes directamente con cada institución financiera.
        </p>
      </section>
    </main>
  );
}
