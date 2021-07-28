import * as React from 'react';
import {Caption, ScrollView, View} from './Themed';
import Suggestion from './Suggestion';
import {Suggestion as SuggestionType} from '../features/suggestion/SuggestionSlice';
import {light07} from '../constants/Colors';

interface Props {
  suggestions: SuggestionType[];
}

const Suggestions: React.FC<Props> = ({suggestions}) => {
  return (
    <>
      {suggestions.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {suggestions.map((suggestion, index) => (
            <Suggestion key={index} {...suggestion} />
          ))}
        </ScrollView>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '75%',
          }}>
          <Caption style={{color: light07}}>
            현재 등록된 데이터가 없습니다.
          </Caption>
        </View>
      )}
    </>
  );
};

export default Suggestions;
