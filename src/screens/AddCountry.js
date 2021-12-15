import React from "react";
import { StyleSheet, View, Text } from "react-native";


const AddCountry = () => {
    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                국가추가
            </Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    Containe가: {

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

export default AddCountry;
