import {Dimensions} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const DESIGN_HEIGHT = 812;
const DESIGN_WIDTH = 375;

export const vh = (percent: number): number => {
  return calculatePercent(percent, SCREEN_HEIGHT);
};

export const vw = (percent: number): number => {
  return calculatePercent(percent, SCREEN_WIDTH);
};

export const vwConverter = (pixel: number): number => {
  return vw((pixel / DESIGN_WIDTH) * 100);
};
export const vhConverter = (pixel: number): number => {
  return vh((pixel / DESIGN_HEIGHT) * 100);
};

function calculatePercent(percent: number, value: number) {
  const decimal = percent * 0.01;
  return Math.round(value * decimal);
}
