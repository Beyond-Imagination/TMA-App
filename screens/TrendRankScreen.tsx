import * as React from 'react';
import {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {H6, SafeAreaView, View} from '../components/Themed';
import StatusBar from '../components/StatusBar';
import {vh, vhConverter, vw, vwConverter} from '../constants/Ratio';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {primaryColor02} from '../constants/Colors';

export default function TrendRankScreen() {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const {trends} = useSelector((state: RootState) => state.trend);
  useEffect(() => {
    let date = new Date();
    setYear(date.getFullYear());
    setMonth(date.getUTCMonth());
    // setMonth(date.getUTCMonth());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar title={'트렌드'} />
      <View style={styles.cont}>
        <View style={styles.titleContainer}>
          <H6>{`${year}년 ${month + 1}월 트렌드`}</H6>
        </View>

        <Image
          source={{
            uri: `http://localhost:3000/wordcloud/${year % 100}.${
              month + 1
            }.png`,
          }}
          style={{
            resizeMode: 'contain',
            width: vw(100),
            height: vhConverter(300),
            marginBottom: vhConverter(32),
          }}
        />
        <View style={styles.rankContainer}>
          {trends.trends.slice(0, 10).map((value, idx) => {
            return (
              <View
                style={{
                  width: '50%',
                  marginBottom: vhConverter(16),
                  justifyContent: 'center',
                }}>
                <H6 lightColor={primaryColor02}>{`${idx + 1}위: ${value}`}</H6>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cont: {
    marginTop: vhConverter(48),
  },
  rankContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: vwConverter(36),
    paddingRight: vwConverter(36),
  },
  titleContainer: {
    paddingLeft: vwConverter(36),
    paddingRight: vwConverter(36),
    marginBottom: vhConverter(36),
  },
});
