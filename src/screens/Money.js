import React from "react";
import { StyleSheet, View, Text } from "react-native";


const Money = () => {
    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                돈 쓰는거 나오는 페이지임
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
        fontSize: 30,
        marginBottom: 10,
    },

});

export default Money;
