import React from "react";
import { StyleSheet, View, Text } from "react-native";


const AddTravel = () => {
    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                여행 추가하는 페이지임
                

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

export default AddTravel;
