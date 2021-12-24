import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import axios, { Axios } from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';

// https://github.com/mmazzarolo/react-native-modal-datetime-picker

const Example = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const [date2, setDate2] = useState(new Date(1598051730000));
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);

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



/*
200 OK: 성공적으로 처리했을 때 쓰인다. 가장 일반적으로 볼 수 있는 HTTP 상태
201 Created: 요청이 성공적으로 처리되어서 리소스가 만들어졌음을 의미한다.
*/

const AddCountry = () => {
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const placeholder = '국가를 선택해주세요';

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const [date2, setDate2] = useState(new Date(1598051730000));
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);
    

    const onChangeText = (value) => {
      //  console.warn(value)
        setText(value);
    }

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

    const onSubmitButtonHandler = async() => {
    setIsLoading(true);
    try{
        axios.post("http://localhost:3000/country",{
        text,
        date,
        date2,
    });
    if (response.status == 201) {
        alert('success');
        console.log('ddd!!');
        setIsLoading(false);
        setText('');
        date([]);
        date2([]);
    }   else {
        throw new Error ("errr");
    }

    } catch (error) {
    alert("errr");
    setIsLoading(false);
    }
    };

    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                국가를 선택해주세요
            </Text>
             
             <View style = {styles.Picker}>
            <RNPickerSelect
                textInputProps={{ underlineColorAndroid: 'transparent'}}
                placeholder={{
                    label: placeholder,
                }}
                fixAndroidTouchableBug={true}
                value={text}
                onValueChange={value => onChangeText(value)}
                useNativeAndroidPickerStyle={false}
                items = {[
                    {label: '프랑스', value:'France' ,key:'1'},
                    {label: '스페인',value:'Spain', key: '2'},
                    {label: '이탈리아',value:'Italy', key: '3'},
                ]}
            />

            <Example />
            </View>
            <Button title = "눌르면 서버로 전송한 담에 여행 생성된 페이지로 이동하도록" 
            onPress={onSubmitButtonHandler}
           />
        </View>
    );
};

const styles = StyleSheet.create ({
Container: {
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
},
Text1: {
    fontSize: 30,
    marginBottom: 10,
},
Picker:{
    width: 200,
    alignItems: 'center', 
    justifyContent: 'center',
},
    inputIOS: {
        fontSize: 16,
        height: 50, 
        width: 300, 
        color: '#000000',
        borderColor: '#000000', 
        borderWidth: 1, 
        borderRadius: 12,
        padding: 10
    },
    inputAndroid: {
        fontSize: 16,
        height: 50, 
        width: 300, 
        color: '#000000',
        borderColor: '#000000', 
        borderWidth: 1, 
        borderRadius: 12,
        padding: 10
    },

});

export default AddCountry;