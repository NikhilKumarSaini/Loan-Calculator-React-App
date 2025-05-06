import { useCurrency } from '../context/CurrencyContext';
import { MenuItem, Select, FormControl, InputLabel, CircularProgress, Alert } from '@mui/material';
import { Currency } from '../types/types';

export const CurrencySelector = () => {
  const { currency, setCurrency, loading, error } = useCurrency();

  if (loading) return <CircularProgress size={24} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <FormControl sx={{ minWidth: 120, mr: 2 }}>
      <InputLabel>Currency</InputLabel>
      <Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as Currency)}
        label="Currency"
      >
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="EUR">EUR</MenuItem>
        <MenuItem value="GBP">GBP</MenuItem>
        <MenuItem value="INR">INR</MenuItem>
        <MenuItem value="JPY">JPY</MenuItem>
      </Select>
    </FormControl>
  );
};