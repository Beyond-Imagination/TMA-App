import * as React from 'react';
import {Caption, H6, TouchableOpacity, View} from './Themed';
import {Suggestion as SuggestionType} from '../features/suggestion/SuggestionSlice';
import Suggestion from './Suggestion';
import {StyleSheet} from 'react-native';
import {vhConverter, vwConverter} from '../constants/Ratio';
import {light07} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';

interface Props {
  suggestions: SuggestionType[];
}

const NewSuggestions: React.FC<Props> = ({suggestions}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginBottom: vhConverter(8)}}
        onPress={() => {
          navigation.navigate('Trend', {screen: 'TrendScreen'});
        }}>
        <H6>{'최신 제안 >'}</H6>
      </TouchableOpacity>
      {suggestions.length > 0 ? (
        <View>
          {suggestions.slice(0, 2).map(value => {
            return <Suggestion {...value} />;
          })}
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '20%',
          }}>
          <Caption style={{color: light07}}>
            현재 등록된 데이터가 없습니다.
          </Caption>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingLeft: vwConverter(16), paddingRight: vwConverter(16)},
});
export default NewSuggestions;
