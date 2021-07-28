import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  Body01,
  Caption,
  Subtitle01,
  Text,
  TouchableOpacity,
  View,
} from './Themed';
import {light01, primaryColor02} from '../constants/Colors';
import {vhConverter, vwConverter} from '../constants/Ratio';
import {Suggestion} from '../features/suggestion/SuggestionSlice';
import * as WebBrowser from 'expo-web-browser';

interface Props {
  suggestion: Suggestion;
}

const SuggestionWithIcon: React.FC<Props> = ({suggestion}) => {
  if (suggestion == undefined) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      lightColor={primaryColor02}
      style={styles.suggestion}
      onPress={() => {
        WebBrowser.openBrowserAsync(suggestion.url);
      }}>
      <View style={[styles.icon]}>
        <Text>
          {suggestion?.topic != null && suggestion.topic.length > 0
            ? suggestion.topic[0]
            : '기타'}
        </Text>
      </View>
      <View lightColor={primaryColor02} style={[styles.suggestionContainer]}>
        <View lightColor={primaryColor02} style={[styles.header]}>
          <View lightColor={primaryColor02} style={[styles.titleContainer]}>
            <Subtitle01 numberOfLines={1}>{suggestion.title}</Subtitle01>
          </View>
          <View lightColor={primaryColor02} style={[styles.dateContainer]}>
            <Caption lightColor={light01}>
              {suggestion.createdAt.toString().split('T')[0]}
            </Caption>
          </View>
        </View>
        <View lightColor={primaryColor02} style={styles.contents}>
          <Body01 numberOfLines={1}>{suggestion.content}</Body01>
        </View>
        <View style={styles.border} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  suggestionContainer: {width: vwConverter(280)},
  titleContainer: {width: vwConverter(200)},
  dateContainer: {width: vwConverter(80)},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
export default SuggestionWithIcon;
