import React from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Alert} from "react-native";
import Input from '../component/Input';
import { useState } from "react";




const AddTravel = () => {
    const [travel, setTravel] = useState("");
    const [money, setMoney] = useState(0);

    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                당신의 여행을 추가하세요
            </Text>
            <TextInput placeholder="여행이름을 걍 써라"
            onChange={(event) => {setTravel(event.target.value)}}/>

            <TextInput placeholder="예산 써봐라"
            onChange={(event) => {setMoney(event.target.value)}}/>

            <Button title = "눌르면 서버로 전송한 담에 여행 생성된 페이지로 이동하도록" />
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

export default AddTravel;
