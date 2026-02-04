import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'dashboard' | 'analytics';
  onTabChange: (tab: 'dashboard' | 'analytics') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar onMenuClick={handleMenuClick} />
      <Sidebar
        open={sidebarOpen}
        onClose={handleSidebarClose}
        mobile={isMobile}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: '100%', md: sidebarOpen ? 'calc(100% - 320px)' : '100%' },
          minWidth: 0, // Prevent flex item from overflowing
          p: { xs: 2, sm: 3 },
          mt: { xs: 7, sm: 8 },
          ml: { 
            xs: 0,
            md: sidebarOpen ? '320px' : 0 
          },
          height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
          overflow: 'auto',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
