import {Text, View} from "./Themed";
import React, {useEffect, useState} from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

interface Props {
    message: string
}

const Error: React.FC<Props> = ({message}) => {
    const [timer, setTimer] = useState<number>(5);
    let navigation = useNavigation();
    if(timer > 0)
        setTimeout(() => {
            setTimer(timer-1)
        }, 1000);
    if(timer == 0){
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <View style={styles.popup}>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>
                        {message ? message : '알수없는에러가발생했습니다. \n홈화면으로이동합니다.'}
                    </Text>
                </View>
                <View style={styles.timerContainer}>
                    <Text style={styles.timer}>
                        {`${timer}초뒤 홈화면으로 이동됩니다.`}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate('Home')
                    }}>
                        <Text>
                            {'홈으로'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom: 32,
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
    }
})

export default Error;


