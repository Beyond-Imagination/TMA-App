import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {suggestionApi} from './suggestionApi';

export const fetchSuggestionAll = createAsyncThunk(
  'suggestion/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await suggestionApi.fetchAll();
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export interface Suggestion {
  _id: number;
  title: string;
  contents: string;
  topic: string[];
  created_at: Date;
}
interface SuggestionState {
  suggestions: Suggestion[];
  loading: 'idle' | 'loading' | 'pending';
  error: any;
}

const initialState: SuggestionState = {
  suggestions: [],
  loading: 'idle',
  error: null,
};

export const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSuggestionAll.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'loading';
      }
    });
    builder.addCase(fetchSuggestionAll.fulfilled, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'idle';
        state.suggestions = action.payload;
      }
    });
    builder.addCase(fetchSuggestionAll.rejected, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'pending';
        state.error = action.error;
      }
    });
  },
});

export default suggestionSlice.reducer;
