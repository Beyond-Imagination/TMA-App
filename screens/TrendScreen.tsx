import * as React from 'react';
import {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from '../components/Themed';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import HorizontalTab from '../components/HorizontalTab';
import StatusBar from '../components/StatusBar';
import {StyleSheet} from 'react-native';
import {light05} from '../constants/Colors';
import {vh, vwConverter} from '../constants/Ratio';
import Suggestions from '../components/Suggestions';
import {StackScreenProps} from '@react-navigation/stack';
import {TrendParamList} from '../types';
import {fetchSuggestionAll} from '../features/suggestion/SuggestionSlice';
import {fetchTrendAll} from '../features/trend/TrendSlice';

const TrendScreen: React.FC<StackScreenProps<TrendParamList, 'TrendScreen'>> =
  ({route}) => {
    const {selectedTrend} = route.params;

    const [selected, select] = useState('');
    const {trends, loading} = useSelector((state: RootState) => state.trend);
    const {suggestions} = useSelector((state: RootState) => state.suggestion);
    const dispatch = useDispatch();

    useEffect(() => {
      if (selectedTrend) {
        select(selectedTrend);
      } else {
        select('최신');
      }
    }, [selectedTrend]);

    useEffect(() => {
      dispatch(fetchSuggestionAll(selected === '최신' ? '' : selected));
    }, [dispatch, selected]);

    if (loading == 'loading') {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <SafeAreaView>
        <View style={styles.container} lightColor={light05}>
          <StatusBar title={selected} />
          <HorizontalTab
            items={['최신', ...trends.trends.map(trend => trend)]}
            selected={selected}
            onPress={(title: string) => {
              select(title);
            }}
          />
          <View
            style={{
              paddingLeft: vwConverter(8),
              paddingRight: vwConverter(8),
              paddingTop: vwConverter(8),
              paddingBottom: vwConverter(46),
              height: '80%',
            }}>
            <Suggestions suggestions={suggestions} />
          </View>
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    height: vh(100),
    flexDirection: 'column',
  },
});

export default TrendScreen;
