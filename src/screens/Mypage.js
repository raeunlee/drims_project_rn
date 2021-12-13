import React from "react";
import { StyleSheet, View, Text } from "react-native";


const Mypage = () => {
    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                마이페이지임
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

export default Mypage;
