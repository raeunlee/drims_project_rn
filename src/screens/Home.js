//홈화면_ 여행을 추가할수있는 페이지! 가장 중심이 됨
import { NavigationContainer } from '@react-navigation/native';
import axios, { Axios } from 'axios';
import { setStatusBarHidden } from 'expo-status-bar';
import React from 'react';
import { StyleSheet , Button, View, Text} from 'react-native';
import { useState } from 'react';


const Home = ({navigation}) => {

 
    const Callapi=()=>{
        axios
        .get('http://localhost:10000/hi')
        .then(function(response){
            console.log(response.data);
          })
        .catch(function(err){
          alert(err);
        });
     
        return(
            <View>
                <Text>

                    connect
                    </Text>
            </View>
        );
    };

    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                여행 추가하는 홈 메인 화면 버튼 네비 아직 안만들었음 
                <Callapi />
            </Text>
           
            <Button title = "여행추가하는 페이지로 이동" 
            onPress={()=> navigation.navigate('AddTravel')} />
            <Button title = "국가추가하는 페이지로 이동" 
            onPress={()=> navigation.navigate('AddCountry')} />
             
        </View>
    );
}


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
