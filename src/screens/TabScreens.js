import React from "react";
import { StyleSheet , Text, View } from "react-native";


export const Mypage = () => {
    return (
        <View style = {styles.Container}>
        <Text style = {styles.Text1}>
            마이페이지
        </Text>
    </View>
    );
};

export const Home = () => {
    return (
        <View style = {styles.Container}>
        <Text style = {styles.Text1}>
           홈화면
        </Text>
    </View>
    ); 
};

const styles = StyleSheet.create ({
    Container: {

    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
},
    Text1: {
        fontSize: '30px',
        marginBottom: '10px',
    },

});