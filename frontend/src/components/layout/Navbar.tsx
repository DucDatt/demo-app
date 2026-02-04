import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useAppDispatch } from '../../store';
import { fetchAnalytics, fetchSummary } from '../../store/thunks/analyticsThunks';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const dispatch = useAppDispatch();

  const handleRefresh = () => {
    dispatch(fetchAnalytics());
    dispatch(fetchSummary());
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Game Analytics Dashboard
        </Typography>
        <IconButton color="inherit" onClick={handleRefresh}>
          <RefreshIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
