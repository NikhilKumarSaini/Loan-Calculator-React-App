export type Currency = 'USD' | 'EUR' | 'GBP' | 'INR' | 'JPY';

export type ExchangeRates = {
  [key in Currency]?: number;
};

export type AmortizationEntry = {
  month: number;
  principal: number;
  interest: number;
  remainingBalance: number;
};

export type EMIResult = {
  monthlyPayment: number;
  amortizationSchedule: AmortizationEntry[];
};

export type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  exchangeRates: ExchangeRates;
  loading: boolean;
  error: string | null;
};