import React from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Alert} from "react-native";
import { useState } from "react";
import axios, * as others from 'axios';
import { useNavigation } from "@react-navigation/native";


const AddTravel = () => {
    const navigation = useNavigation();
    const [travel, setTravel] = useState("");
    const [money, setMoney] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const onChangeTravelHandler = (travel) => {
        setTravel(travel);
    };
    const onChangeMoneyHandler = (money) => {
        setMoney(money);
    };

    const onSubmitButtonHandler = async() => {
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/travel", {
                travel,
                money,
            
        });
        if (response.status == 201) {
            alert('success');
            console.log('ddd!!');
            setIsLoading(false);
            setTravel('');
            setMoney(0);
        }   else {
            throw new Error ("errr");
        }

    } catch (error) {
        alert("errr");
        setIsLoading(false);
    }
};



    const getTravel = () => {
        axios.get("http://localhost:3000/travel").then((response) => {
            console.log(response.data);
        });
    };

    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                당신의 여행을 추가하세요
            </Text>
            <TextInput placeholder="여행의 이름을 지어주세요"
             value={travel}
             editable={!isLoading}
             onChangeText={onChangeTravelHandler}/>

            <TextInput placeholder="예산을 알려주세요"
            value={String(money)}
            editable={!isLoading}
            onChangeText={onChangeMoneyHandler}/>

            <Button title = "저장하기 (서버로 전송하기)" 
            onPress={onSubmitButtonHandler}
            />
            <Button title="나의 여행으로 돌아가기" 
            onPress={() => navigation.navigate('Home')}
            />
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