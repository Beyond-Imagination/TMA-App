import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {trendApi} from './trendApi';

export const fetchTrendAll = createAsyncThunk(
  'trend/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await trendApi.fetchAll();
      return response.data.trends[0];
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export interface TrendDto {
  trends: string[];
  _id: string;
  month: string;
  createdAt: '';
  updatedAt: '';
  __v: number;
}

interface TrendState {
  trends: TrendDto;
  loading: 'idle' | 'loading' | 'pending';
  error: any;
}

const initialState: TrendState = {
  trends: {
    trends: [],
    _id: '',
    month: '',
    __v: 0,
    updatedAt: '',
    createdAt: '',
  },
  loading: 'idle',
  error: null,
};

export const trendSlice = createSlice({
  name: 'trend',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTrendAll.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'loading';
      }
    });
    builder.addCase(fetchTrendAll.fulfilled, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'idle';
        state.trends = action.payload;
      }
    });
    builder.addCase(fetchTrendAll.rejected, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'pending';
        state.error = action.error;
      }
    });
  },
});

export const trendActions = trendSlice.actions;
export default trendSlice.reducer;
