import React, { useState, useEffect } from 'react';
import {
  Drawer,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Divider,
  Alert,
  Snackbar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../store';
import { createAnalyticsEntry } from '../../store/thunks/analyticsThunks';
import { fetchAnalytics, fetchSummary } from '../../store/thunks/analyticsThunks';

interface AddEntryDrawerProps {
  open: boolean;
  onClose: () => void;
}

const AddEntryDrawer: React.FC<AddEntryDrawerProps> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    gameId: '',
    playerId: '',
    score: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Reset form when drawer closes
  useEffect(() => {
    if (!open) {
      setFormData({
        gameId: '',
        playerId: '',
        score: '',
      });
      setErrors({});
    }
  }, [open]);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.gameId.trim()) {
      newErrors.gameId = 'Game ID is required';
    }

    if (!formData.playerId.trim()) {
      newErrors.playerId = 'Player ID is required';
    }

    if (!formData.score.trim()) {
      newErrors.score = 'Score is required';
    } else {
      const scoreNum = Number(formData.score);
      if (isNaN(scoreNum) || scoreNum < 0) {
        newErrors.score = 'Score must be a positive number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      await dispatch(
        createAnalyticsEntry({
          gameId: formData.gameId.trim(),
          playerId: formData.playerId.trim(),
          score: Number(formData.score),
        })
      ).unwrap();

      setSnackbar({
        open: true,
        message: 'Analytics entry created successfully!',
        severity: 'success',
      });

      // Reset form
      setFormData({
        gameId: '',
        playerId: '',
        score: '',
      });

      // Refresh data
      dispatch(fetchAnalytics());
      dispatch(fetchSummary());

      // Close drawer after short delay
      setTimeout(() => {
        onClose();
      }, 500);
    } catch (error: any) {
      setSnackbar({
        open: true,
        message: error?.message || 'Failed to create analytics entry',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 400 },
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Header */}
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">Add New Entry</Typography>
            <IconButton onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Form Content */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              p: 3,
              overflow: 'auto',
            }}
          >
            <TextField
              label="Game ID"
              value={formData.gameId}
              onChange={handleChange('gameId')}
              error={!!errors.gameId}
              helperText={errors.gameId}
              required
              fullWidth
              margin="normal"
              disabled={loading}
            />
            
            <TextField
              label="Player ID"
              value={formData.playerId}
              onChange={handleChange('playerId')}
              error={!!errors.playerId}
              helperText={errors.playerId}
              required
              fullWidth
              margin="normal"
              disabled={loading}
            />
            
            <TextField
              label="Score"
              type="number"
              value={formData.score}
              onChange={handleChange('score')}
              error={!!errors.score}
              helperText={errors.score}
              required
              fullWidth
              margin="normal"
              inputProps={{ min: 0 }}
              disabled={loading}
            />
          </Box>

          <Divider />

          {/* Submit Button - Fixed at bottom */}
          <Box sx={{ p: 2 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              onClick={handleSubmit}
              disabled={loading}
              sx={{ py: 1.5 }}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Drawer>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddEntryDrawer;
