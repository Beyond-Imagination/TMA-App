import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView, Subtitle01, TouchableOpacity, View} from './Themed';
import {vhConverter, vwConverter} from '../constants/Ratio';
import {primaryColor01} from '../constants/Colors';

interface Prop {
  items: string[];
  selected: string;
  onPress?: any;
}

const HorizontalTab: React.FC<Prop> = ({items, selected, onPress}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}>
        {items.map(item => (
          <TouchableOpacity
            style={[styles.tab, selected == item ? styles.selected : null]}
            onPress={() => {
              onPress(item);
            }}>
            <Subtitle01>{item}</Subtitle01>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {marginBottom: vhConverter(8)},
  scroll: {
    paddingLeft: vwConverter(16),
    paddingRight: vwConverter(16),
  },
  scrollContainer: {
    alignItems: 'center',
    height: vhConverter(34),
  },
  selected: {borderBottomWidth: 2, borderColor: primaryColor01},
  tab: {
    marginRight: vwConverter(16),
    paddingLeft: vwConverter(4),
    paddingRight: vwConverter(4),
    paddingTop: vhConverter(4),
    paddingBottom: vhConverter(4),
  },
});
export default HorizontalTab;
