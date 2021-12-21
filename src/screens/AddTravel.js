import React from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Alert} from "react-native";
import { useState } from "react";
import axios, * as others from 'axios';
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';

// https://github.com/mmazzarolo/react-native-modal-datetime-picker




const AddTravel = () => {
    const navigation = useNavigation();
    const [travel, setTravel] = useState("");
    const [money, setMoney] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const [date2, setDate2] = useState(new Date(1598051730000));
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);

    const Example = () => {
     
  
      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
  
      const onChange2 = (event, selectedDate) => {
          const currentDate = selectedDate || date;
          setShow2(Platform.OS === 'ios');
          setDate2(currentDate);
        };
  
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
  
      const showMode2 = (currentMode) => {
          setShow2(true);
          setMode2(currentMode);
        };
  
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showDatepicker2 = () => {
      showMode2('date');
      };
  
      return (
        <View>
          <View>
            <Button onPress={showDatepicker} title="시작 날짜" />
          </View> 
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
             // is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <View>
            <Button onPress={showDatepicker2} title="끝 날짜" />
          </View> 
          {show && (
            <DateTimePicker
              testID="dateTimePicker2"
              value={date2}
              mode={mode2}
            //  is24Hour={true}
              display="default"
              onChange={onChange2}
            />
          )}
        </View>
      );
    };
    const onChangeTravelHandler = (travel) => {
        setTravel(travel);
    };
    const onChangeMoneyHandler = (money) => {
        setMoney(money);
    };

    const onSubmitButtonHandler = async() => {
        setIsLoading(true);
        try {
            const response = await axios.post("http://192.168.219.101:3000/travel", {
                travel:travel,
                date:date,
                date2:date2,
                money:money,
            
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
        axios.get("http://192.168.219.101:3000/travel").then((response) => {
            console.log(response.data);
        });
    };

    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                당신의 여행을 추가하세요
            </Text>
            <TextInput placeholder="여행이름을 지어주세요"
             value={travel}
             editable={!isLoading}
             onChangeText={onChangeTravelHandler}
             style = {styles.Text1}/>
           
           <Example />
 
            <TextInput placeholder="예산을 알려주세요"
            value={money}
            editable={!isLoading}
            onChangeText={onChangeMoneyHandler}
            style = {styles.Text1}/>

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