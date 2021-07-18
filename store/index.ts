import {configureStore} from '@reduxjs/toolkit';
import trendStore from '../features/trend/TrendSlice';
import myTrendStore from '../features/mytrend/MyTrendSlice';
import suggestionStore from '../features/suggestion/SuggestionSlice';
export const store = configureStore({
  reducer: {
    trend: trendStore,
    myTrend: myTrendStore,
    suggestion: suggestionStore,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
