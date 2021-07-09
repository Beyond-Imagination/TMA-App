import {configureStore} from '@reduxjs/toolkit';
import trendStore from '../features/trend/TrendSlice';
import myTrendStore from '../features/mytrend/MyTrendSlice';
import purposeStore from '../features/purpose/PurposeSlice';
import wordCloudStore from '../features/wordcloud/WordCloudSlice';
export const store = configureStore({
  reducer: {
    trend: trendStore,
    myTrend: myTrendStore,
    purpose: purposeStore,
    wordCloud: wordCloudStore,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
