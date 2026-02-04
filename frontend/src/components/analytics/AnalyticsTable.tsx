import React, { useEffect, useState, useMemo } from 'react';
import { Table, TableColumnsType, Input } from 'antd';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { SearchOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchAnalytics } from '../../store/thunks/analyticsThunks';
import { Analytics } from '../../types/analytics';
import { format } from 'date-fns';
import AddEntryDrawer from './AddEntryDrawer';

const AnalyticsTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { analytics, loading } = useAppSelector((state) => state.analytics);
  const [searchText, setSearchText] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  // Filter data based on search text
  const filteredData = useMemo(() => {
    if (!searchText.trim()) {
      return analytics;
    }

    const searchLower = searchText.toLowerCase();
    return analytics.filter((item) => {
      return (
        item.gameId.toLowerCase().includes(searchLower) ||
        item.playerId.toLowerCase().includes(searchLower) ||
        item.score.toString().includes(searchText)
      );
    });
  }, [analytics, searchText]);

  const columns: TableColumnsType<Analytics> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      width: 80,
    },
    {
      title: 'Game ID',
      dataIndex: 'gameId',
      key: 'gameId',
      sorter: (a, b) => a.gameId.localeCompare(b.gameId),
    },
    {
      title: 'Player ID',
      dataIndex: 'playerId',
      key: 'playerId',
      sorter: (a, b) => a.playerId.localeCompare(b.playerId),
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      sorter: (a, b) => a.score - b.score,
      render: (score: number) => score.toLocaleString(),
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
      sorter: (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
      render: (timestamp: string) => {
        try {
          return format(new Date(timestamp), 'PPpp');
        } catch {
          return timestamp;
        }
      },
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      {/* Toolbar with Search and Add Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Input
          placeholder="Search by Game ID, Player ID, or Score"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
          style={{ flex: 1, minWidth: 250, maxWidth: 400 }}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setDrawerOpen(true)}
          sx={{ whiteSpace: 'nowrap' }}
        >
          Add New
        </Button>
      </Box>

      {/* Table - Always visible */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          loading={loading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `Total ${total} entries`,
          }}
          scroll={{ x: 'max-content', y: 'calc(100vh - 250px)' }}
          locale={{
            emptyText: filteredData.length === 0 && searchText
              ? `No results found for "${searchText}"`
              : analytics.length === 0
              ? 'No analytics data available. Click "Add New" to create your first entry.'
              : 'No data',
          }}
        />
      </Box>

      <AddEntryDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
};

export default AnalyticsTable;
