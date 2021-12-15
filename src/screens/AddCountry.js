import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const PickerScreen = () => {

    const [text, setText] = useState("");
    const placeholder = '국가를 선택해주세요';

    const onChangeText = (value) => {
      //  console.warn(value)
        setText(value);
    }
    return(
        <View >
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
        </View>
    );
}



const AddCountry = () => {
    return(
        <View style= {styles.Container}>
            <Text>
                국가를 선택해주세요
            </Text>
            <PickerScreen />

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
