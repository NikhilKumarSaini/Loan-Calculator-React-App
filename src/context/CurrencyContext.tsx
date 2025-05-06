import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Currency, CurrencyContextType, ExchangeRates } from '../types/types';

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  exchangeRates: {},
  loading: false,
  error: null,
});

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // API configuration
  const API_KEY = '68f6b35b6e32d58725bdf2fd'; // Your ExchangeRate-API key
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL, {
          timeout: 5000, // 5-second timeout
        });
        
        if (response.data.result === 'success') {
          setExchangeRates(response.data.conversion_rates);
        } else {
          throw new Error(response.data['error-type'] || 'API response error');
        }
      } catch (err) {
        setError('Failed to fetch exchange rates. Using default rates.');
        console.error('API Error:', err);
        // Fallback rates if API fails
        setExchangeRates({
          USD: 1,
          EUR: 0.85,
          GBP: 0.73,
          INR: 74.5,
          JPY: 110.2,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, exchangeRates, loading, error }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};