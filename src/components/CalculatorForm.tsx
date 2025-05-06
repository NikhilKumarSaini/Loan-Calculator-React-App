import { useState } from 'react';
import { useEMICalculator } from '../hooks/useEMICalculator';
import { useCurrency } from '../context/CurrencyContext';
import { 
  TextField, 
  Paper, 
  Typography, 
  Box,
  Stack
} from '@mui/material';
import { AmortizationTable } from './AmortizationTable';

export const CalculatorForm = () => {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(5);
  const { currency, exchangeRates } = useCurrency();

  const convertedPrincipal = principal * (exchangeRates[currency] || 1);
  const { monthlyPayment, amortizationSchedule } = useEMICalculator(
    convertedPrincipal,
    rate,
    years
  );

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Loan Details
      </Typography>
      
      {/* Using Stack instead of Grid for layout */}
      <Stack 
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        sx={{ mb: 3 }}
      >
        {/* Loan Amount Field */}
        <Box sx={{ width: { xs: '100%', sm: '33%' } }}>
          <TextField
            label="Loan Amount"
            type="number"
            fullWidth
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            InputProps={{
              startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
            }}
          />
        </Box>

        {/* Interest Rate Field */}
        <Box sx={{ width: { xs: '100%', sm: '33%' } }}>
          <TextField
            label="Interest Rate (%)"
            type="number"
            fullWidth
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            InputProps={{
              endAdornment: <Typography sx={{ ml: 1 }}>%</Typography>,
            }}
          />
        </Box>

        {/* Loan Term Field */}
        <Box sx={{ width: { xs: '100%', sm: '33%' } }}>
          <TextField
            label="Loan Term (Years)"
            type="number"
            fullWidth
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </Box>
      </Stack>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="subtitle1">
          Monthly Payment: {monthlyPayment.toFixed(2)} {currency}
        </Typography>
      </Box>

      <AmortizationTable schedule={amortizationSchedule} currency={currency} />
    </Paper>
  );
};