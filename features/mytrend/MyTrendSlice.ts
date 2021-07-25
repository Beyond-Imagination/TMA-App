import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchMyTrendAll = createAsyncThunk(
  'myTrend/fetchAll',
  async (_, thunkAPI) => {
    try {
      const value = await AsyncStorage.getItem('myTrends');
      let parse: Trend[] = JSON.parse(value ? value : '[]');
      return parse;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const addMyTrend = createAsyncThunk(
  'myTrend/addTrend',
  async (myTrends: Trend[], thunkAPI) => {
    try {
      await AsyncStorage.setItem('myTrends', JSON.stringify(myTrends));
      return myTrends;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

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
    builder.addCase(addMyTrend.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'loading';
      }
    });
    builder.addCase(addMyTrend.fulfilled, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'idle';
        state.myTrends = action.payload;
      }
    });
    builder.addCase(addMyTrend.rejected, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'pending';
        state.error = action.error;
      }
    });
  },
});

export default trendSlice.reducer;
