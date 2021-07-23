import {fetchTrendAll} from '../features/trend/TrendSlice';
import {fetchSuggestionAll} from '../features/suggestion/SuggestionSlice';
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

export default function HomeScreen() {
  const {
    suggestions,
    error: suggestionError,
    loading: suggestionLoading,
  } = useSelector((state: RootState) => state.suggestion);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendAll());
    dispatch(fetchSuggestionAll(''));
  }, [dispatch]);

  return suggestionLoading == 'loading' || suggestions.length <= 0 ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <SuggestionsWithIcon suggestions={suggestions} />
      <TrendList />
      <NewSuggestions suggestions={suggestions} />
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
