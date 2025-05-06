import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { AmortizationEntry } from '../types/types';

export const AmortizationTable = ({ schedule, currency }: { schedule: AmortizationEntry[]; currency: string }) => {
  return (
    <Paper elevation={2} sx={{ mt: 3, overflowX: 'auto' }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Amortization Schedule
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">Principal ({currency})</TableCell>
              <TableCell align="right">Interest ({currency})</TableCell>
              <TableCell align="right">Remaining ({currency})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.slice(0, 12).map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell align="right">{row.principal.toFixed(2)}</TableCell>
                <TableCell align="right">{row.interest.toFixed(2)}</TableCell>
                <TableCell align="right">{row.remainingBalance.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};