/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react';
import {
  StyleSheet,
  Text as DefaultText,
  TouchableOpacity as DefaultTouchableOpacity,
  View as DefaultView,
} from 'react-native';
import {SafeAreaView as DefaultSafeAreaView} from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TouchableOpacityProps = ThemeProps &
  DefaultTouchableOpacity['props'];

export function Text(props: TextProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function H6(props: TextProps) {
  return <Text style={[fontStyle.h6]} {...props} />;
}
export function Subtitle01(props: TextProps) {
  return <Text style={[fontStyle.subTitle01]} {...props} />;
}
export function Body01(props: TextProps) {
  return <Text style={[fontStyle.body01]} {...props} />;
}
export function Caption(props: TextProps) {
  return <Text style={[fontStyle.caption]} {...props} />;
}

export function View(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return (
    <DefaultTouchableOpacity
      style={[{backgroundColor}, style]}
      {...otherProps}
    />
  );
}

export function SafeAreaView(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );
  return (
    <DefaultSafeAreaView style={[{backgroundColor}, style]} {...otherProps} />
  );
}

const fontStyle = StyleSheet.create({
  h6: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 0.15,
  },
  subTitle01: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    /* identical to box height */
    letterSpacing: 0.15,
  },
  body01: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    /* identical to box height */
    letterSpacing: 0.25,
  },
  caption: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    /* identical to box height */
    letterSpacing: 0.4,
  },
});

