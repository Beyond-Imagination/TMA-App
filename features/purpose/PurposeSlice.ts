import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {purposeApi} from './purposeApi';

const fetchPurposeAll = createAsyncThunk('purpose/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await purposeApi.fetchAll();
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export interface Purpose {
  _id: number;
  title: string;
  contents: string;
  topic: string[];
  created_at: Date;
}
interface PurposeState {
  purposes: Purpose[];
  loading: 'idle' | 'loading' | 'pending';
  error: any;
}

const initialState: PurposeState = {
  purposes: [],
  loading: 'idle',
  error: null,
};

export const purposeSlice = createSlice({
  name: 'purpose',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPurposeAll.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'loading';
      }
    });
    builder.addCase(fetchPurposeAll.fulfilled, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'idle';
        state.purposes = action.payload;
      }
    });
    builder.addCase(fetchPurposeAll.rejected, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'pending';
        state.error = action.error;
      }
    });
  },
});

export default purposeSlice.reducer;
