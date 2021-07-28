import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {suggestionApi} from './suggestionApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchSuggestionAll = createAsyncThunk(
  'suggestion/fetchAll',
  async (interest: string, thunkAPI) => {
    try {
      const response = await suggestionApi.fetchAll(interest);
      return response.data.suggestions;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const fetchMySuggestionAll = createAsyncThunk(
  'suggestion/fetchMyAll',
  async (interest: string, thunkAPI) => {
    try {
      const response = await suggestionApi.fetchAll(interest);
      return response.data.suggestions;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export interface Suggestion {
  _id: number;
  title: string;
  content: string;
  topic: string[];
  createdAt: Date;
  registeredAt: Date;
  updatedAt: Date;
  url: string;
  sn: number;
  hashtags: string[];
}

interface SuggestionState {
  suggestions: Suggestion[];
  mySuggestions: Suggestion[];
  loading: 'idle' | 'loading' | 'pending';
  error: any;
}

const initialState: SuggestionState = {
  suggestions: [],
  mySuggestions: [],
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
      if (state.loading === 'loading') {
        state.loading = 'idle';
        state.suggestions = action.payload;
      }
    });
    builder.addCase(fetchSuggestionAll.rejected, (state, action) => {
      if (state.loading === 'loading') {
        state.loading = 'pending';
        state.error = action.error;
      }
    });
    builder.addCase(fetchMySuggestionAll.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'loading';
      }
    });
    builder.addCase(fetchMySuggestionAll.fulfilled, (state, action) => {
      if (state.loading === 'loading') {
        state.loading = 'idle';
        state.mySuggestions = action.payload;
      }
    });
    builder.addCase(fetchMySuggestionAll.rejected, (state, action) => {
      if (state.loading === 'loading') {
        state.loading = 'pending';
        state.error = action.error;
      }
    });
  },
});

export default suggestionSlice.reducer;
