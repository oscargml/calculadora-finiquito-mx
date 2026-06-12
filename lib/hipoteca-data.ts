export interface Bank {
  id: string;
  name: string;
  product: string;
  nominalRate: number;
  cat: number;
  maxTermYears: number;
  minDownPaymentPct: number;
  type: 'private' | 'government';
  notes: string;
  highlight?: boolean;
}

export const BANKS: Bank[] = [
  { id: 'banorte', name: 'Banorte', product: 'Hipoteca Tradicional', nominalRate: 9.15, cat: 11.2, maxTermYears: 20, minDownPaymentPct: 10, type: 'private', notes: 'Acepta Cofinavit. Descuento clientes nómina.', highlight: true },
  { id: 'banregio', name: 'Banregio', product: 'InburCasa', nominalRate: 9.25, cat: 11.4, maxTermYears: 20, minDownPaymentPct: 15, type: 'private', notes: 'Tasas competitivas para perfil sólido.', highlight: true },
  { id: 'inbursa', name: 'Inbursa', product: 'CrediResidencial', nominalRate: 9.5, cat: 11.8, maxTermYears: 20, minDownPaymentPct: 20, type: 'private', notes: 'Una de las tasas más bajas del mercado.', highlight: true },
  { id: 'afirme', name: 'Afirme', product: 'Hipoteca Afirme', nominalRate: 9.6, cat: 11.9, maxTermYears: 20, minDownPaymentPct: 15, type: 'private', notes: 'Atención personalizada en el norte del país.' },
  { id: 'mifel', name: 'Mifel', product: 'Hipoteca Mifel', nominalRate: 9.7, cat: 12.1, maxTermYears: 20, minDownPaymentPct: 15, type: 'private', notes: 'Banca privada y patrimonial.' },
  { id: 'santander', name: 'Santander', product: 'Pago Fijo / Hipoteca Free', nominalRate: 10.25, cat: 12.6, maxTermYears: 20, minDownPaymentPct: 10, type: 'private', notes: 'Variante sin comisión por apertura.' },
  { id: 'scotiabank', name: 'Scotiabank', product: 'Hipoteca Fija', nominalRate: 10.5, cat: 12.8, maxTermYears: 25, minDownPaymentPct: 5, type: 'private', notes: 'Hasta 95% de financiamiento.' },
  { id: 'hsbc', name: 'HSBC', product: 'Hipoteca Fuerte', nominalRate: 10.6, cat: 12.9, maxTermYears: 20, minDownPaymentPct: 10, type: 'private', notes: 'Flexible con ingresos variables.' },
  { id: 'bbva', name: 'BBVA México', product: 'Hipoteca Fija', nominalRate: 11.2, cat: 13.2, maxTermYears: 20, minDownPaymentPct: 10, type: 'private', notes: 'Mayor cartera del país. Plataforma digital robusta.' },
  { id: 'infonavit', name: 'Infonavit', product: 'Crédito Tradicional / T100', nominalRate: 10.45, cat: 11.5, maxTermYears: 30, minDownPaymentPct: 0, type: 'government', notes: 'Monto máx. $2.83M. Para trabajadores IMSS.' },
  { id: 'fovissste', name: 'Fovissste', product: 'Crédito Tradicional', nominalRate: 5.0, cat: 6.2, maxTermYears: 30, minDownPaymentPct: 0, type: 'government', notes: 'Tasas 4%-6%. Solo trabajadores del Estado.' },
];

export interface IsaiState {
  code: string;
  name: string;
  isaiRate: number;
  notaryFeeMin: number;
  notaryFeeMax: number;
  registrationFeePct: number;
  notes: string;
}

export const ISAI_STATES: IsaiState[] = [
  { code: 'AGU', name: 'Aguascalientes', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'BCN', name: 'Baja California', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'BCS', name: 'Baja California Sur', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'CAM', name: 'Campeche', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'CHP', name: 'Chiapas', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'CHH', name: 'Chihuahua', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'CMX', name: 'Ciudad de México (CDMX)', isaiRate: 3.0, notaryFeeMin: 3.5, notaryFeeMax: 6.0, registrationFeePct: 0.75, notes: 'Tasa progresiva; vivienda de interés social exenta.' },
  { code: 'COA', name: 'Coahuila', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'COL', name: 'Colima', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'DUR', name: 'Durango', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'GUA', name: 'Guanajuato', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: 'Reducción por vivienda nueva.' },
  { code: 'GRO', name: 'Guerrero', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'HID', name: 'Hidalgo', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'JAL', name: 'Jalisco', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: 'Reducción para primera vivienda.' },
  { code: 'MEX', name: 'Estado de México', isaiRate: 3.0, notaryFeeMin: 3.0, notaryFeeMax: 5.5, registrationFeePct: 0.75, notes: '' },
  { code: 'MIC', name: 'Michoacán', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'MOR', name: 'Morelos', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'NAY', name: 'Nayarit', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'NLE', name: 'Nuevo León', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: 'Zona metropolitana con alta actividad inmobiliaria.' },
  { code: 'OAX', name: 'Oaxaca', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'PUE', name: 'Puebla', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'QUE', name: 'Querétaro', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: 'Crecimiento inmobiliario acelerado.' },
  { code: 'ROO', name: 'Quintana Roo', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: 'Zona turística; alta demanda de vivienda.' },
  { code: 'SLP', name: 'San Luis Potosí', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'SIN', name: 'Sinaloa', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'SON', name: 'Sonora', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'TAB', name: 'Tabasco', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'TAM', name: 'Tamaulipas', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'TLA', name: 'Tlaxcala', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'VER', name: 'Veracruz', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'YUC', name: 'Yucatán', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: 'Mérida lidera crecimiento inmobiliario del sureste.' },
  { code: 'ZAC', name: 'Zacatecas', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
];
