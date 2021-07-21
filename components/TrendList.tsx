import {H6, Text, TouchableOpacity, View} from "./Themed";
import {ScrollView, StyleSheet} from "react-native";
import * as React from "react";
import {vhConverter, vwConverter} from "../constants/Ratio";
import {light03} from "../constants/Colors";

const seoulCategories = ['복지', '여성', '경제', '안전', '주택', '환경', '문화', '건강', '교통', '건설', '세금', '기획', '기타']

const TrendList: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <H6>관심사 톺아보기</H6>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {seoulCategories.map((value, index) => <Trend title={value} key={index}></Trend>)}
            </ScrollView>
        </View>
    )
}

const Trend = ({title}: { title: string }) => {
    //FIXME: Trend 탭 화면 개발 시 연동 필요
    return (<TouchableOpacity style={[styles.bigIcon]}>
        <Text>{title}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: vwConverter(16),
        paddingRight: vwConverter(16),
    },
    title: {
        marginBottom: vhConverter(16),
    },
    bigIcon: {
        width: vwConverter(80),
        height: vwConverter(80),
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: vwConverter(8),
        borderColor: light03,
        borderWidth: 1
    },
});
export default TrendList;
