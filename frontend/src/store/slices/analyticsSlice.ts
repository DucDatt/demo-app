import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Analytics, AnalyticsSummary } from '../../types/analytics';
import { fetchAnalytics, fetchSummary, createAnalyticsEntry } from '../thunks/analyticsThunks';

interface AnalyticsState {
  analytics: Analytics[];
  summary: AnalyticsSummary | null;
  loading: boolean;
  error: string | null;
}

const initialState: AnalyticsState = {
  analytics: [],
  summary: null,
  loading: false,
  error: null,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch Analytics
    builder
      .addCase(fetchAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalytics.fulfilled, (state, action: PayloadAction<Analytics[]>) => {
        state.loading = false;
        state.analytics = action.payload;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch analytics';
      });

    // Fetch Summary
    builder
      .addCase(fetchSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSummary.fulfilled, (state, action: PayloadAction<AnalyticsSummary>) => {
        state.loading = false;
        state.summary = action.payload;
      })
      .addCase(fetchSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch summary';
      });

    // Create Analytics Entry
    builder
      .addCase(createAnalyticsEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAnalyticsEntry.fulfilled, (state, action: PayloadAction<Analytics>) => {
        state.loading = false;
        state.analytics = [action.payload, ...state.analytics];
      })
      .addCase(createAnalyticsEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create analytics entry';
      });
  },
});

export const { clearError } = analyticsSlice.actions;
export default analyticsSlice.reducer;
