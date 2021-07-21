import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, View} from '../components/Themed';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import HorizontalTab from '../components/HorizontalTab';
import StatusBar from '../components/StatusBar';
import {StyleSheet} from 'react-native';
import {light05} from '../constants/Colors';
import {vh} from '../constants/Ratio';

export default function TrendScreen() {
  const [selected, select] = useState('환경');
  const {trends} = useSelector((state: RootState) => state.trend);
  return (
    <SafeAreaView>
      <View style={styles.container} lightColor={light05}>
        <StatusBar title={selected} />
        <HorizontalTab
          items={trends.map(trend => trend.title)}
          selected={selected}
          onPress={(title: string) => {
            select(title);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: vh(100),
    flexDirection: 'column',
  },
});
