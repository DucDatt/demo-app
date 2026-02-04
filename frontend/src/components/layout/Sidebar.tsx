import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ClearIcon from '@mui/icons-material/Clear';

const drawerWidth = 320;

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  mobile: boolean;
  activeTab: 'dashboard' | 'analytics';
  onTabChange: (tab: 'dashboard' | 'analytics') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, mobile, activeTab, onTabChange }) => {
  const handleTabClick = (tab: 'dashboard' | 'analytics') => {
    onTabChange(tab);
    if (mobile) {
      onClose();
    }
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Navigation</Typography>
        {mobile && (
          <IconButton onClick={onClose}>
            <ClearIcon />
          </IconButton>
        )}
      </Box>
      
      <List>
        <ListItem disablePadding>
          <ListItemButton
            selected={activeTab === 'dashboard'}
            onClick={() => handleTabClick('dashboard')}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
                '& .MuiListItemIcon-root': {
                  color: 'primary.contrastText',
                },
              },
            }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={activeTab === 'analytics'}
            onClick={() => handleTabClick('analytics')}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
                '& .MuiListItemIcon-root': {
                  color: 'primary.contrastText',
                },
              },
            }}
          >
            <ListItemIcon>
              <AnalyticsIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      variant={mobile ? 'temporary' : 'persistent'}
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
