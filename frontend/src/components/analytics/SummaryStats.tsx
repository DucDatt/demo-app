import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchSummary } from '../../store/thunks/analyticsThunks';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const SummaryStats: React.FC = () => {
  const dispatch = useAppDispatch();
  const { summary, loading } = useAppSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  if (loading && !summary) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!summary) {
    return null;
  }

  const statCards = [
    {
      title: 'Total Entries',
      value: summary.total,
      icon: <TrendingUpIcon />,
      color: '#1976d2',
    },
    {
      title: 'Average Score',
      value: summary.averageScore.toFixed(2),
      icon: <TrendingUpIcon />,
      color: '#388e3c',
    },
    {
      title: 'Max Score',
      value: summary.maxScore,
      icon: <TrendingUpIcon />,
      color: '#f57c00',
    },
    {
      title: 'Min Score',
      value: summary.minScore,
      icon: <TrendingDownIcon />,
      color: '#d32f2f',
    },
    {
      title: 'Total Games',
      value: summary.totalGames,
      icon: <SportsEsportsIcon />,
      color: '#7b1fa2',
    },
    {
      title: 'Unique Players',
      value: summary.uniquePlayers,
      icon: <PeopleIcon />,
      color: '#0288d1',
    },
    {
      title: 'Unique Games',
      value: summary.uniqueGames,
      icon: <SportsEsportsIcon />,
      color: '#c2185b',
    },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 3,
        mb: 4,
      }}
    >
      {statCards.map((stat, index) => (
        <Card sx={{ height: '100%' }} key={index}>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  {stat.title}
                </Typography>
                <Typography variant="h4" component="div">
                  {stat.value}
                </Typography>
              </Box>
              <Box
                sx={{
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {stat.icon}
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SummaryStats;
