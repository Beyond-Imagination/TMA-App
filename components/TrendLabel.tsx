import * as React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Body2, TouchableOpacity} from './Themed';
import {light05, primaryColor02} from '../constants/Colors';
import {vwConverter} from '../constants/Ratio';

interface Props {
  onPress?: any;
  title: string;
  style?: ViewStyle;
  removable?: boolean;
  removePress?: any;
}

const TrendLabel: React.FC<Props> = ({
  onPress,
  title,
  style,
  removable = false,
  removePress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.label, style]}>
      {removable ? (
        <>
          <Body2 style={{marginRight: 8}}>{`${title}`}</Body2>
          <TouchableOpacity onPress={removePress}>
            <Body2 lightColor={light05}>X</Body2>
          </TouchableOpacity>
        </>
      ) : (
        <Body2>{`${title}`}</Body2>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    minWidth: vwConverter(70),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    borderColor: primaryColor02,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: vwConverter(15),
    marginBottom: vwConverter(8),
  },
});
export default TrendLabel;
