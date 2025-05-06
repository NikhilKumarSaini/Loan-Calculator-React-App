import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@mui/material';
import { ThemeToggle } from './components/ThemeToggle';
import { CurrencySelector } from './components/CurrencySelector';
import { CalculatorForm } from './components/CalculatorForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
          <CurrencySelector />
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CalculatorForm />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}