import { EMIResult } from '../types/types';

export const useEMICalculator = (
  principal: number,
  annualRate: number,
  years: number
): EMIResult => {
  const monthlyRate = annualRate / 12 / 100;
  const totalPayments = years * 12;
  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  const schedule = [];
  let remainingBalance = principal;

  for (let month = 1; month <= totalPayments; month++) {
    const interest = remainingBalance * monthlyRate;
    const principalPaid = monthlyPayment - interest;
    remainingBalance -= principalPaid;

    schedule.push({
      month,
      principal: principalPaid,
      interest,
      remainingBalance: remainingBalance > 0 ? remainingBalance : 0,
    });
  }

  return { monthlyPayment, amortizationSchedule: schedule };
};