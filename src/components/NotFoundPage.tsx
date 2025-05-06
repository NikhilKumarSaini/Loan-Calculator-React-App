import { Alert, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4 }}>
      <Alert severity="warning" sx={{ mb: 2 }}>
        <Typography variant="h5">Page Not Found</Typography>
      </Alert>
      <Button variant="contained" onClick={() => navigate('/')}>
        Go to Calculator
      </Button>
    </Container>
  );
};