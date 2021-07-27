import * as React from 'react';
import {StyleSheet} from 'react-native';
import {H6, View} from './Themed';
import {
  light01,
  light07,
  primaryColor01,
  primaryColor02,
} from '../constants/Colors';
import Swiper from 'react-native-swiper/src';
import {vhConverter, vwConverter} from '../constants/Ratio';
import {Suggestion as SuggestionType} from '../features/suggestion/SuggestionSlice';
import SuggestionWithIcon from './SuggestionWithIcon';

interface Props {
  suggestions: SuggestionType[];
}

const TOTAL_PAGE = 3;
const PAGE_SIZE = 3;

function renderSuggestion(i: number, suggestions: SuggestionType[]) {
  var suggArray = [];
  for (let j = 0; j < PAGE_SIZE; j++) {
    suggArray.push(<SuggestionWithIcon suggestion={suggestions[i + j]} />);
  }
  return suggArray;
}

function renderSugestions(suggestions: SuggestionType[]) {
  var array = [];
  for (let i = 0; i < TOTAL_PAGE; i++) {
    const suggestion = renderSuggestion(i, suggestions);
    array.push(<View lightColor={primaryColor02}>{suggestion}</View>);
  }
  return array;
}

const SuggestionsWithIcon: React.FC<Props> = ({suggestions}) => {
  return (
    <View lightColor={primaryColor02} style={styles.suggestions}>
      <View lightColor={primaryColor02} style={styles.suggestionsTitle}>
        <H6 lightColor={light01}>{'다음 제안 어떠세요?'}</H6>
      </View>
      <Swiper
        loop={false}
        showsButtons={false}
        dot={
          <View
            style={[
              swiperStyle.dot,
              {
                backgroundColor: light07,
              },
            ]}
          />
        }
        activeDot={
          <View
            style={[
              swiperStyle.dot,
              {
                backgroundColor: primaryColor01,
              },
            ]}
          />
        }>
        {renderSugestions(suggestions)}
      </Swiper>
    </View>
  );
};
const swiperStyle = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -12,
  },
});
const styles = StyleSheet.create({
  suggestions: {
    padding: vwConverter(16),
    paddingTop: vhConverter(66),
    height: vhConverter(340),
    marginBottom: vhConverter(16),
  },
  suggestionsTitle: {marginBottom: vhConverter(24)},
});
export default SuggestionsWithIcon;
