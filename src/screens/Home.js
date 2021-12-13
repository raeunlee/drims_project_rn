//홈화면_ 여행을 추가할수있는 페이지! 가장 중심이 됨
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet , Button, View, Text} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                여행 추가하는 홈 메인 화면 버튼 네비 아직 안만들었음
            </Text>
            <Button title = "추가하는 페이지로 이동" 
            onPress={()=> navigation.navigate('Add_travel')} />
            
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

export default Home;
