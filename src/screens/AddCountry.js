import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import axios, { Axios } from 'axios';


/*
200 OK: 성공적으로 처리했을 때 쓰인다. 가장 일반적으로 볼 수 있는 HTTP 상태
201 Created: 요청이 성공적으로 처리되어서 리소스가 만들어졌음을 의미한다.
*/

const AddCountry = () => {
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const placeholder = '국가를 선택해주세요';
    
    
const onChangeText = (value) => {
      //  console.warn(value)
        setText(value);
    }
const onSubmitButtonHandler = async() => {
    setIsLoading(true);
    try{
        axios.post("http://localhost:3000/country",{
        text,
    });
    if (response.status == 201) {
        alert('success');
        console.log('ddd!!');
        setIsLoading(false);
        setText('');
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
            <Text>
                국가를 선택해주세요
            </Text>
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
    justifyContent: 'center'
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