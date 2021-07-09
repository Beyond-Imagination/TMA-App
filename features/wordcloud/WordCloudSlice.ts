import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {wordCloudApi} from './wordCloudApi';

const fetchWordCloudAll = createAsyncThunk('wordCloud/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await wordCloudApi.fetchAll();
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export interface WordCloud {
  date: Date; // 이미지 생성 날짜
  wordcloud: string; // image url
}

export interface WordCloudState {
  wordClouds: WordCloud;
  loading: 'idle' | 'loading' | 'pending';
  error: any;
}

const initialState: WordCloudState = {
  wordClouds: {
    date: new Date(),
    wordcloud: '',
  },
  loading: 'idle',
  error: null,
};

export const wordCloudSlice = createSlice({
  name: 'wordCloud',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWordCloudAll.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'loading';
      }
    });
    builder.addCase(fetchWordCloudAll.fulfilled, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'idle';
        state.wordClouds = action.payload;
      }
    });
    builder.addCase(fetchWordCloudAll.rejected, (state, action) => {
      // Add user to the state array
      if (state.loading === 'loading') {
        state.loading = 'pending';
        state.error = action.error;
      }
    });
  },
});

export default wordCloudSlice.reducer;
