import {Body2, H6, SafeAreaView, Text, View} from './Themed';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {vh, vw} from '../constants/Ratio';

interface Props {
  title: string;
  message: string;
  onPress?: any;
}

const Popup: React.FC<Props> = ({title, message, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <View style={{...styles.messageContainer, marginBottom: 8}}>
          <H6>{title}</H6>
        </View>
        <View style={{...styles.messageContainer, marginBottom: 16}}>
          <Body2>{message}</Body2>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>{'닫기'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '120%',
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  message: {
    textAlign: 'center',
  },
  popup: {
    backgroundColor: 'white',
    width: '80%',
    padding: 22,
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timerContainer: {},
  timer: {
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#1EAE98',
    borderRadius: 4,
  },
});

export default Popup;
