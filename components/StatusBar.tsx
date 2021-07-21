// @flow
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {H5, TouchableOpacity, View} from './Themed';
import {vhConverter, vwConverter} from '../constants/Ratio';
import {light01} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
}

function StatusBar(props: Props) {
  const {title} = props;
  const navigation = useNavigation();
  return (
    <View style={statusStyle.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          left: vwConverter(16),
          top: vhConverter(8),
        }}>
        <H5>{'<'}</H5>
      </TouchableOpacity>
      <View>
        <H5>{title}</H5>
      </View>
    </View>
  );
}

const statusStyle = StyleSheet.create({
  container: {
    height: vhConverter(44),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: vhConverter(8),
    paddingBottom: vhConverter(8),
    paddingLeft: vhConverter(16),
    paddingRight: vhConverter(16),
    borderBottomWidth: 1,
    borderBottomColor: light01,
  },
});
export default StatusBar;
