import {fetchTrendAll} from '../features/trend/TrendSlice';
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';

export default function HomeScreen() {
  const {trends, error, loading} = useSelector((state: RootState) => state.trend);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendAll());
  }, [dispatch]);

  return loading == 'loading' ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/HomeScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
