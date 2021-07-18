import {fetchTrendAll} from '../features/trend/TrendSlice';
import {
  fetchSuggestionAll,
  Suggestion as SuggestionType,
} from '../features/suggestion/SuggestionSlice';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Platform, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {
  light01,
  light07,
  primaryColor01,
  primaryColor02,
} from '../constants/Colors';
import {
  Body01,
  Caption,
  H6,
  Subtitle01,
  Text,
  TouchableOpacity,
  View,
} from '../components/Themed';
import {vhConverter, vwConverter} from '../constants/Ratio';
import Swiper from 'react-native-swiper';

const TOTAL_PAGE = 3;
const PAGE_SIZE = 3;

function renderSugestions(suggestions: SuggestionType[]) {
  var array = [];
  for (let i = 0; i < TOTAL_PAGE; i++) {
    const suggestion = renderSuggestion(i, suggestions);
    array.push(<View lightColor={primaryColor02}>{suggestion}</View>);
  }
  return array;
}
function renderSuggestion(i: number, suggestions: SuggestionType[]) {
  var suggArray = [];
  for (let j = 0; j < PAGE_SIZE; j++) {
    suggArray.push(<Suggestion suggestion={suggestions[i + j]}> </Suggestion>);
  }
  return suggArray;
}

export default function HomeScreen() {
  const {
    suggestions,
    error: suggestionError,
    loading: suggestionLoading,
  } = useSelector((state: RootState) => state.suggestion);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendAll());
    dispatch(fetchSuggestionAll());
  }, [dispatch]);

  return suggestionLoading == 'loading' || suggestions.length <= 0? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <View lightColor={primaryColor02} style={suggestionStyle.suggestions}>
        <View
          lightColor={primaryColor02}
          style={suggestionStyle.suggestionsTitle}>
          <H6 lightColor={light01}>{'다음 제안 어떠세요? >'}</H6>
        </View>
        <Swiper
          loop={false}
          showsButtons={false}
          dot={
            <View
              style={{
                backgroundColor: light07,
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: -12,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: primaryColor01,
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: -12,
              }}
            />
          }>
          {renderSugestions(suggestions)}
        </Swiper>
      </View>
    </View>
  );
}
const Suggestion: React.FC<any> = ({suggestion}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      lightColor={primaryColor02}
      style={suggestionStyle.suggestion}>
      <View style={[styles.icon]}>
        <Text>{suggestion.topic[0]}</Text>
      </View>
      <View
        lightColor={primaryColor02}
        style={[suggestionStyle.suggestionContainer]}>
        <View lightColor={primaryColor02} style={[suggestionStyle.header]}>
          <View
            lightColor={primaryColor02}
            style={[suggestionStyle.titleContainer]}>
            <Subtitle01 numberOfLines={1}>{suggestion.title}</Subtitle01>
          </View>
          <View
            lightColor={primaryColor02}
            style={[suggestionStyle.dateContainer]}>
            <Caption lightColor={light01}>{suggestion.created_at}</Caption>
          </View>
        </View>
        <View lightColor={primaryColor02} style={suggestionStyle.contents}>
          <Body01 numberOfLines={1}>{suggestion.contents}</Body01>
        </View>
        <View style={suggestionStyle.border} />
      </View>
    </TouchableOpacity>
  );
};

const suggestionStyle = StyleSheet.create({
  suggestions: {
    padding: vwConverter(16),
    paddingTop: vhConverter(66),
    height: vhConverter(340),
  },
  suggestion: {
    flexDirection: 'row',
    marginBottom: vhConverter(12),
  },
  contents: {
    marginBottom: vhConverter(8),
  },
  header: {
    flexDirection: 'row',
    marginBottom: vhConverter(8),
  },
  border: {
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: light01,
  },
  suggestionsTitle: {marginBottom: vhConverter(24)},
  suggestionContainer: {width: vwConverter(280)},
  titleContainer: {width: vwConverter(200)},
  dateContainer: {width: vwConverter(80)},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

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
