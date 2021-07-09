import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {myTrendApi} from './myTrendApi';

const fetchMyTrendAll = createAsyncThunk('myTrend/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await myTrendApi.fetchAll();
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export interface Trend {
  title: string;
}

interface MyTrendState {
  myTrends: Trend[];
  loading: 'idle' | 'loading' | 'pending';
  error: any;
}

const initialState: MyTrendState = {
  myTrends: [],
  loading: 'idle',
  error: null,
};

export const trendSlice = createSlice({
  name: 'myTrend',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMyTrendAll.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'loading';
      }
    });
    builder.addCase(fetchMyTrendAll.fulfilled, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'idle';
        state.myTrends = action.payload;
      }
    });
    builder.addCase(fetchMyTrendAll.rejected, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'pending';
        state.error = action.error;
      }
    });
  },
});

export default trendSlice.reducer;
