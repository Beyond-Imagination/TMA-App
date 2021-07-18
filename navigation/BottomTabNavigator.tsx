/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import BrowserScreen from '../screens/BrowserScreen';
import {
  BottomTabParamList,
  ConfigParamList,
  HomeParamList,
  InterestParamList,
  TrendParamList,
  TrendRankParamList,
} from '../types';
import TrendScreen from '../screens/TrendScreen';
import InterestScreen from '../screens/IntrestScreen';
import TrendRankScreen from '../screens/TrendRankScreen';
import ConfigScreen from '../screens/ConfigScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Trend"
        component={TrendNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Interest"
        component={InterestNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="star" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TrendRank"
        component={TrendRankNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name="trending-up" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Config"
        component={ConfigNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="BrowserScreen"
        component={BrowserScreen}
        options={{headerTitle: 'BrowserScreen'}}
      />
    </HomeStack.Navigator>
  );
}

const TrendStack = createStackNavigator<TrendParamList>();

function TrendNavigator() {
  return (
    <TrendStack.Navigator>
      <TrendStack.Screen
        name="TrendScreen"
        component={TrendScreen}
        options={{headerTitle: 'TrendScreen'}}
      />
      <TrendStack.Screen
        name="BrowserScreen"
        component={BrowserScreen}
        options={{headerTitle: 'BrowserScreen'}}
      />
    </TrendStack.Navigator>
  );
}

const InterestStack = createStackNavigator<InterestParamList>();

function InterestNavigator() {
  return (
    <InterestStack.Navigator>
      <InterestStack.Screen
        name="InterestScreen"
        component={InterestScreen}
        options={{headerTitle: 'InterestScreen'}}
      />
    </InterestStack.Navigator>
  );
}

const TrendRankStack = createStackNavigator<TrendRankParamList>();

function TrendRankNavigator() {
  return (
    <TrendRankStack.Navigator>
      <TrendRankStack.Screen
        name="TrendRankScreen"
        component={TrendRankScreen}
        options={{headerTitle: 'TrendRankScreen'}}
      />
    </TrendRankStack.Navigator>
  );
}

const ConfigStack = createStackNavigator<ConfigParamList>();

function ConfigNavigator() {
  return (
    <ConfigStack.Navigator>
      <ConfigStack.Screen
        name="ConfigScreen"
        component={ConfigScreen}
        options={{headerTitle: 'ConfigScreen'}}
      />
    </ConfigStack.Navigator>
  );
}
