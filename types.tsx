/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Trend: {selectedTrend: string};
  Interest: undefined;
  TrendRank: undefined;
  Config: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  BrowserScreen: undefined;
};

export type TrendParamList = {
  TrendScreen: {selectedTrend: string};
  BrowserScreen: undefined;
};

export type InterestParamList = {
  InterestScreen: undefined;
};

export type TrendRankParamList = {
  TrendRankScreen: undefined;
};

export type ConfigParamList = {
  ConfigScreen: undefined;
};
