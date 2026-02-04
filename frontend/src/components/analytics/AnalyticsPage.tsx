import React from 'react';
import { Box } from '@mui/material';
import AnalyticsTable from './AnalyticsTable';

const AnalyticsPage: React.FC = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AnalyticsTable />
    </Box>
  );
};

export default AnalyticsPage;
