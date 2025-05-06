import { Alert, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4 }}>
      <Alert severity="error" sx={{ mb: 2 }}>
        <Typography variant="h5">Something went wrong</Typography>
      </Alert>
      <Button variant="contained" onClick={() => navigate('/')}>
        Return Home
      </Button>
    </Container>
  );
};