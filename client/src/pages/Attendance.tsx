import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Attendance: React.FC = () => {
  return (
    <Box sx={{ width: '100%', height:"100%", overflowX: 'auto' }}>
      <Paper sx={{ width: '100%', height:"100%", backgroundColor:"#F0F2EF" }}>
        <TableContainer sx={{maxHeight:"100%"}}>
          <Table stickyHeader sx={{ minWidth: 650 ,overflow:'auto'}} aria-label="simple table">
            <TableHead sx={{ position: 'sticky', top: 0, zIndex: 10 }}>
              <TableRow>
                <TableCell sx={{fontWeight:600}}>Profile</TableCell>
                <TableCell sx={{fontWeight:600}}>Name</TableCell>
                <TableCell sx={{fontWeight:600}}>In Time</TableCell>
                <TableCell sx={{fontWeight:600}}>Out Time</TableCell>
                <TableCell sx={{fontWeight:600}}>Total Hours</TableCell>
                <TableCell sx={{fontWeight:600}}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Replace with your data */}
              {[...Array(20)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>Heloo</TableCell>
                  <TableCell>Heloo</TableCell>
                  <TableCell>Heloo</TableCell>
                  <TableCell>Heloo</TableCell>
                  <TableCell>Heloo</TableCell>
                  <TableCell>Heloo</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Attendance;
