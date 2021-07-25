import * as React from 'react';
import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Caption, H6, SafeAreaView, Text, View} from '../components/Themed';
import StatusBar from '../components/StatusBar';
import TrendLabel from '../components/TrendLabel';
import {vhConverter, vwConverter} from '../constants/Ratio';
import {light03} from '../constants/Colors';
import {Input} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {myTrendApi} from '../features/mytrend/myTrendApi';
import {addMyTrend, fetchMyTrendAll} from '../features/mytrend/MyTrendSlice';
import {Trend} from '../features/trend/TrendSlice';

export default function InterestScreen() {
  const {trends} = useSelector((state: RootState) => state.trend);
  const {myTrends, loading} = useSelector((state: RootState) => state.myTrend);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyTrendAll());
  }, [dispatch]);

  const addArr = (newMyTrends: Trend[]) => {
    dispatch(addMyTrend(newMyTrends));
    dispatch(fetchMyTrendAll());
  };
  if (loading == 'loading') {
    return (
      <SafeAreaView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar title={'관심사'} />
      <View style={{marginTop: vhConverter(16)}}>
        <View style={{marginBottom: vhConverter(16)}}>
          <H6>회원님의 주요 관심사</H6>
          <Caption>관심사는 최대 10개까지 가능합니다.</Caption>
        </View>
        <View style={styles.labelContainer}>
          {myTrends.map((value, idx) => {
            return (
              <TrendLabel
                key={idx}
                title={value.title}
                removable={true}
                removePress={() =>
                  addArr(myTrends.filter(value1 => value1.title != value.title))
                }
              />
            );
          })}
        </View>
        <View style={styles.border} />
        <View>
          <View style={{marginBottom: vhConverter(16)}}>
            <H6>추천 관심사</H6>
          </View>
          <View>
            <Input
              placeholder="직접 입력"
              style={{fontSize: 14}}
              leftIcon={
                <Ionicons
                  size={20}
                  style={{marginBottom: -3}}
                  name={'search-outline'}
                />
              }
              onChangeText={text => {
                setSearch(text);
              }}
            />
          </View>
          <View style={styles.labelContainer}>
            {trends
              .filter(trend => trend.title.includes(search))
              .map((trend, idx) => {
                return (
                  <TrendLabel
                    key={idx}
                    title={trend.title}
                    style={{borderColor: light03}}
                    onPress={() => {
                      addArr(
                        [...myTrends.map(myTrend => myTrend), trend].filter(
                          onlyUnique,
                        ),
                      );
                    }}
                  />
                );
              })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function onlyUnique(value: Trend, index: number, self: Trend[]) {
  let strings = self.map(test => test.title);
  return strings.indexOf(value.title) === index;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    paddingLeft: vwConverter(16),
    paddingRight: vwConverter(16),
  },
  labelContainer: {
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    flexWrap: 'wrap',
    marginBottom: vhConverter(32),
  },
  border: {
    borderWidth: 1,
    borderColor: light03,
    marginBottom: vhConverter(16),
  },
});
