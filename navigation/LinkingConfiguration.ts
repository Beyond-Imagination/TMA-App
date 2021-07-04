/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
              BrowserScreen: 'home-browser',
            },
          },
          TrendList: {
            screens: {
              TrendScreen: 'trend',
              BrowserScreen: 'trend-browser',
            },
          },
          Interest: {
            screens: {
              InterestScreen: 'interest',
            },
          },
          TrendRank: {
            screens: {
              TrendRankScreen: 'trendRank',
            },
          },
          Config: {
            screens: {
              ConfigScreen: 'config',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
