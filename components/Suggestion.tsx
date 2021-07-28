import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Body2, Caption, Subtitle01, TouchableOpacity, View} from './Themed';
import {vhConverter, vwConverter} from '../constants/Ratio';
import {light03} from '../constants/Colors';
import * as WebBrowser from 'expo-web-browser';

interface Props {
  title: string;
  content: string;
  url: string;
  createdAt: Date;
}

const Suggestion: React.FC<Props> = ({title, content, createdAt, url}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        WebBrowser.openBrowserAsync(url);
      }}>
      <View style={styles.title}>
        <Subtitle01 numberOfLines={1}>{title}</Subtitle01>
      </View>
      <View style={styles.contents}>
        <Body2 numberOfLines={1}>{content}</Body2>
      </View>
      <View>
        <Caption>{createdAt.toString().split('T')[0]}</Caption>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: vhConverter(8),
    paddingLeft: vwConverter(8),
    paddingRight: vwConverter(8),
    paddingTop: vwConverter(16),
    paddingBottom: vwConverter(16),
    borderColor: light03,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {marginBottom: vhConverter(8)},
  contents: {marginBottom: vhConverter(8)},
});
export default Suggestion;
