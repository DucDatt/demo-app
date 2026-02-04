import axios from 'axios';
import { Analytics, AnalyticsFilter, AnalyticsSummary, CreateAnalyticsRequest } from '../types/analytics';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const analyticsApi = {
  /**
   * Get all analytics data with optional filters
   */
  getAnalytics: async (filter?: AnalyticsFilter): Promise<Analytics[]> => {
    const params = new URLSearchParams();
    
    if (filter) {
      if (filter.gameId) params.append('gameId', filter.gameId);
      if (filter.playerId) params.append('playerId', filter.playerId);
      if (filter.minScore !== undefined) params.append('minScore', filter.minScore.toString());
      if (filter.maxScore !== undefined) params.append('maxScore', filter.maxScore.toString());
      if (filter.startDate) params.append('startDate', filter.startDate);
      if (filter.endDate) params.append('endDate', filter.endDate);
    }

    const response = await apiClient.get<Analytics[]>('/analytics', { params });
    return response.data;
  },

  /**
   * Get summary statistics with optional filters
   */
  getSummary: async (filter?: AnalyticsFilter): Promise<AnalyticsSummary> => {
    const params = new URLSearchParams();
    
    if (filter) {
      if (filter.gameId) params.append('gameId', filter.gameId);
      if (filter.playerId) params.append('playerId', filter.playerId);
      if (filter.minScore !== undefined) params.append('minScore', filter.minScore.toString());
      if (filter.maxScore !== undefined) params.append('maxScore', filter.maxScore.toString());
      if (filter.startDate) params.append('startDate', filter.startDate);
      if (filter.endDate) params.append('endDate', filter.endDate);
    }

    const response = await apiClient.get<AnalyticsSummary>('/analytics/summary', { params });
    return response.data;
  },

  /**
   * Create a new analytics entry
   */
  createAnalytics: async (data: CreateAnalyticsRequest): Promise<Analytics> => {
    const response = await apiClient.post<Analytics>('/analytics', data);
    return response.data;
  },
};
