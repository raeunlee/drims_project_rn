import React from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Alert} from "react-native";
import { useState } from "react";
import axios, * as others from 'axios';



const AddTravel = () => {
    const [travel, setTravel] = useState("");
    const [money, setMoney] = useState(0);
    const [travellist, setTravellist] = useState([]);

    const addTravel = () => {
        axios.post("http://localhost:3000/hi", {
            travel : travel,
            money: money,
        }).then (()=> {
            console.log("보냄");
        }).catch((error)=> {

        }).then(() => { })
    };

    const getTravel = () => {
        axios.get("http://localhost:3000/travel").then((response) => {
            console.log(response);
        });
    };

    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                당신의 여행을 추가하세요
            </Text>
            <TextInput placeholder="여행이름을 걍 써라"
            onChange={(event) => {setTravel(event.target.value)}}/>

            <TextInput placeholder="예산 써봐라"
            onChange={(event) => {setMoney(event.target.value)}}/>

            <Button title = "눌르면 서버로 전송한 담에 여행 생성된 페이지로 이동하도록" 
            onPress={addTravel}/>

            <Button title = "누르면 보여줘~" 
            onPress={getTravel}/> 
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
