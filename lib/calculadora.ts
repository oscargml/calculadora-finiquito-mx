/**
 * 2026 Core Labor Constants for Mexico (LFT & LISR)
 */
export const CONSTANTS_2026 = {
  MIN_WAGE_GENERAL: 315.04,
  MIN_WAGE_NORTHERN_BORDER: 440.87,
  UMA: 117.31,
  DEFAULT_AGUINALDO_DAYS: 15,
  DEFAULT_PRIMA_VACACIONAL_PCT: 0.25,
};

export function getVacationDays(yearsOfSeniority: number): number {
  const years = Math.floor(yearsOfSeniority);
  if (years <= 1) return 12;
  if (years === 2) return 14;
  if (years === 3) return 16;
  if (years === 4) return 18;
  if (years === 5) return 20;
  if (years <= 10) return 22;
  if (years <= 15) return 24;
  if (years <= 20) return 26;
  return 28;
}

export interface CalculationInput {
  startDate: string;
  endDate: string;
  grossMonthlySalary: number;
  remainingVacationDaysPastYear?: number;
  isNorthernBorder?: boolean;
  isDismissal?: boolean;
}

export interface CalculationResult {
  metrics: {
    daysWorked: number;
    seniorityYears: string;
    dailyWage: string;
    integratedDailyWage: string;
    vacationDaysPerYear: number;
  };
  finiquito: {
    aguinaldo: string;
    vacaciones: string;
    primaVacacional: string;
    subtotal: string;
  };
  liquidacion: {
    indemnizacion90Dias: string;
    veinteDiasPorAno: string;
    primaAntiguedad: string;
    subtotal: string;
  };
  totals: {
    gross: string;
    taxDeductions: string;
    net: string;
    isrExemptLimit: string;
  };
}

export function calculateTermination({
  startDate,
  endDate,
  grossMonthlySalary,
  remainingVacationDaysPastYear = 0,
  isNorthernBorder = false,
  isDismissal = false,
}: CalculationInput): CalculationResult {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const totalDiffTime = Math.abs(end.getTime() - start.getTime());
  const totalDaysWorked = Math.ceil(totalDiffTime / (1000 * 60 * 60 * 24));
  const yearsOfSeniority = totalDaysWorked / 365.25;

  // Days worked in current calendar year (for Aguinaldo)
  const currentYear = end.getFullYear();
  const startOfCurrentYear = new Date(currentYear, 0, 1);
  const effectiveStart = start > startOfCurrentYear ? start : startOfCurrentYear;
  const daysInCurrentYear =
    Math.ceil((end.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  // Days since last work anniversary (for Vacaciones)
  const yearsCompleted = Math.floor(yearsOfSeniority);
  const lastAnniversary = new Date(start);
  lastAnniversary.setFullYear(start.getFullYear() + yearsCompleted);
  if (lastAnniversary > end) {
    lastAnniversary.setFullYear(lastAnniversary.getFullYear() - 1);
  }
  const daysSinceLastAnniversary =
    Math.ceil((end.getTime() - lastAnniversary.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const minWage = isNorthernBorder
    ? CONSTANTS_2026.MIN_WAGE_NORTHERN_BORDER
    : CONSTANTS_2026.MIN_WAGE_GENERAL;

  const SD = grossMonthlySalary / 30.0;
  const currentVacationDays = getVacationDays(yearsOfSeniority);

  const integrationFactor =
    1 +
    CONSTANTS_2026.DEFAULT_AGUINALDO_DAYS / 365 +
    (currentVacationDays * CONSTANTS_2026.DEFAULT_PRIMA_VACACIONAL_PCT) / 365;

  const SDI = SD * integrationFactor;

  // Finiquito
  const proportionalAguinaldo =
    (daysInCurrentYear / 365) * CONSTANTS_2026.DEFAULT_AGUINALDO_DAYS * SD;
  const proportionalVacationDays = (daysSinceLastAnniversary / 365) * currentVacationDays;
  const vacationPayout = (proportionalVacationDays + remainingVacationDaysPastYear) * SD;
  const primaVacacional = vacationPayout * CONSTANTS_2026.DEFAULT_PRIMA_VACACIONAL_PCT;
  const finiquitoSubtotal = proportionalAguinaldo + vacationPayout + primaVacacional;

  // Liquidación
  let liquidacionSubtotal = 0;
  let indemnizacion3Meses = 0;
  let veinteDiasPorAno = 0;
  let primaAntiguedad = 0;

  if (isDismissal) {
    indemnizacion3Meses = 90 * SDI;
    veinteDiasPorAno = 20 * yearsOfSeniority * SDI;
    const primaAntiguedadBase = Math.min(SD, 2 * minWage);
    primaAntiguedad = 12 * yearsOfSeniority * primaAntiguedadBase;
    liquidacionSubtotal = indemnizacion3Meses + veinteDiasPorAno + primaAntiguedad;
  }

  const grossTotal = finiquitoSubtotal + liquidacionSubtotal;

  // Art. 93 LISR — exempt up to 90 UMAs per year of service
  const roundedYearsForTax = Math.max(1, Math.round(yearsOfSeniority));
  const isrExemptLimit = 90 * CONSTANTS_2026.UMA * roundedYearsForTax;
  const taxableSeverance = Math.max(0, liquidacionSubtotal - isrExemptLimit);
  const estimatedIsr =
    taxableSeverance * 0.2 + proportionalAguinaldo * 0.1;
  const netTotal = Math.max(0, grossTotal - estimatedIsr);

  return {
    metrics: {
      daysWorked: totalDaysWorked,
      seniorityYears: yearsOfSeniority.toFixed(2),
      dailyWage: SD.toFixed(2),
      integratedDailyWage: SDI.toFixed(2),
      vacationDaysPerYear: currentVacationDays,
    },
    finiquito: {
      aguinaldo: proportionalAguinaldo.toFixed(2),
      vacaciones: vacationPayout.toFixed(2),
      primaVacacional: primaVacacional.toFixed(2),
      subtotal: finiquitoSubtotal.toFixed(2),
    },
    liquidacion: {
      indemnizacion90Dias: indemnizacion3Meses.toFixed(2),
      veinteDiasPorAno: veinteDiasPorAno.toFixed(2),
      primaAntiguedad: primaAntiguedad.toFixed(2),
      subtotal: liquidacionSubtotal.toFixed(2),
    },
    totals: {
      gross: grossTotal.toFixed(2),
      taxDeductions: estimatedIsr.toFixed(2),
      net: netTotal.toFixed(2),
      isrExemptLimit: isrExemptLimit.toFixed(2),
    },
  };
}
