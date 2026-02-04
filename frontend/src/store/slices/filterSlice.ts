import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnalyticsFilter } from '../../types/analytics';

interface FilterState {
  filters: AnalyticsFilter;
}

const initialState: FilterState = {
  filters: {},
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<AnalyticsFilter>) => {
      state.filters = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {};
    },
    updateFilter: (state, action: PayloadAction<Partial<AnalyticsFilter>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setFilters, clearFilters, updateFilter } = filterSlice.actions;
export default filterSlice.reducer;
