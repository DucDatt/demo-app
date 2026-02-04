import React from 'react';
import { Box } from '@mui/material';
import SummaryStats from '../analytics/SummaryStats';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ width: '100%', px: { xs: 1, sm: 2 } }}>
      <Box sx={{ mb: { xs: 2, sm: 4 } }}>
        <SummaryStats />
      </Box>
    </Box>
  );
};

export default Dashboard;
