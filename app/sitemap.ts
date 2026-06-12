import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const guias = [
  'cuanto-me-toca-de-finiquito-ejemplos',
  'finiquito-por-renuncia',
  'liquidacion-despido-injustificado',
  'guia-incapacidades-lft',
  'incapacidad-enfermedad-general',
  'primeros-3-dias-incapacidad',
  'incapacidad-riesgo-trabajo',
  'incapacidad-maternidad',
  'como-calcular-sdi',
  'imss-vs-issste-vs-seguro-privado',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/incapacidad`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/hipoteca`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/guias`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...guias.map((slug) => ({
      url: `${SITE_URL}/guias/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/privacidad`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/terminos`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/contacto`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];
}
