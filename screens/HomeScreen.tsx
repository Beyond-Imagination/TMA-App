import {
  fetchMySuggestionAll,
  fetchSuggestionAll,
} from '../features/suggestion/SuggestionSlice';
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {Text, View} from '../components/Themed';
import {vwConverter} from '../constants/Ratio';
import TrendList from '../components/TrendList';
import SuggestionsWithIcon from '../components/SuggestionsWithIcon';
import NewSuggestions from '../components/NewSuggestions';
import {fetchMyTrendAll} from '../features/mytrend/MyTrendSlice';
import {fetchTrendAll} from '../features/trend/TrendSlice';

export default function HomeScreen() {
  const {
    mySuggestions,
    error: suggestionError,
    loading: suggestionLoading,
  } = useSelector((state: RootState) => state.suggestion);
  const {myTrends, loading, error} = useSelector(
    (state: RootState) => state.myTrend,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyTrendAll());
    dispatch(fetchTrendAll());
  }, [dispatch]);

  useEffect(() => {
    if (myTrends.length == 0) {
      dispatch(fetchMySuggestionAll(''));
    }
    dispatch(
      fetchMySuggestionAll(
        myTrends[Math.floor(Math.random() * myTrends.length)],
      ),
    );
  }, [myTrends]);
  return suggestionLoading == 'loading' || mySuggestions.length <= 0 ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <SuggestionsWithIcon suggestions={mySuggestions.slice(0, 9)} />
      <TrendList />
      <NewSuggestions suggestions={mySuggestions.slice(0, 2)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  icon: {
    width: vwConverter(50),
    height: vwConverter(50),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: vwConverter(16),
  },
});
