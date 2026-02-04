import { createAsyncThunk } from '@reduxjs/toolkit';
import { analyticsApi } from '../../services/api';
import { CreateAnalyticsRequest } from '../../types/analytics';
import { RootState } from '../index';

export const fetchAnalytics = createAsyncThunk(
  'analytics/fetchAnalytics',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const filters = state.filters.filters;
    return await analyticsApi.getAnalytics(Object.keys(filters).length > 0 ? filters : undefined);
  }
);

export const fetchSummary = createAsyncThunk(
  'analytics/fetchSummary',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const filters = state.filters.filters;
    return await analyticsApi.getSummary(Object.keys(filters).length > 0 ? filters : undefined);
  }
);

export const createAnalyticsEntry = createAsyncThunk(
  'analytics/createAnalyticsEntry',
  async (data: CreateAnalyticsRequest) => {
    return await analyticsApi.createAnalytics(data);
  }
);
