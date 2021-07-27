import * as React from 'react';
import {useState} from 'react';

import {H6, SafeAreaView, TouchableOpacity, View} from '../components/Themed';
import StatusBar from '../components/StatusBar';
import {light02, light07} from '../constants/Colors';
import {StyleSheet} from 'react-native';
import {vhConverter, vwConverter} from '../constants/Ratio';
import Popup from '../components/Popup';

export default function ConfigScreen() {
  const [error, setError] = useState(false);

  const handlePopup = () => {
    setError(!error);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar title={'설정'} />
      {error ? (
        <Popup
          title={'준비중입니다.'}
          message={'빠른 시일 내에\n더 나은 모습으로 찾아뵙겠습니다.'}
          onPress={handlePopup}
        />
      ) : null}
      <TouchableOpacity style={styles.menuBar} onPress={handlePopup}>
        <View style={styles.title}>
          <H6>제안 하기</H6>
          <H6 lightColor={light07}>{'>'}</H6>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBar} onPress={handlePopup}>
        <View style={styles.title}>
          <H6>고객 센터</H6>
          <H6 lightColor={light07}>{'>'}</H6>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBar} onPress={handlePopup}>
        <View style={styles.title}>
          <H6>제안 하기</H6>
          <H6 lightColor={light07}>{'>'}</H6>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuBar: {
    height: vhConverter(44),
    justifyContent: 'center',
    borderColor: light02,
    borderBottomWidth: 1,
  },
  title: {
    paddingLeft: vwConverter(16),
    paddingRight: vwConverter(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
