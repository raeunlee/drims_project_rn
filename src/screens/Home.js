//홈화면_ 여행을 추가할수있는 페이지! 가장 중심이 됨
import { NavigationContainer } from '@react-navigation/native';
import axios, { Axios } from 'axios';
import { setStatusBarHidden } from 'expo-status-bar';
import React from 'react';
import { StyleSheet , Button, View, Text} from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = ({navigation}) => {

    return(
        <View style= {styles.Container}>

        <View style = {styles.Box1}>
        <View style = {styles.TextBox1}> 
            <Text style = {styles.Text1}>
             새로운 여행을 추가해주세요
            </Text> 
        </View>
        <View style = {styles.IconBox}>
            <Text style = {styles.Icon}>
             +
            </Text>
        </View>   
        </View>

            <Button title = "여행추가하는 페이지로 이동" 
            onPress={()=> navigation.navigate('AddTravel')} />
            <Button title = "국가추가하는 페이지로 이동" 
            onPress={()=> navigation.navigate('AddCountry')} />
             
        </View>
    );
}

const Box1= () => {
 return(
     <View style = {styles.Box1}>
           <View style = {styles.TextBox1}> 
            <Text style = {styles.Text1}>
             여행을 추가해주세요
            </Text> 
        </View>
        <View style = {styles.IconBox}>
            <Text style = {styles.Icon}>
             +
            </Text>
        </View>   
    </View>
 )   
}

const styles = StyleSheet.create ({
    Container: {
    flex:1,
    backgroundColor: '#f1f3f5',
   // alignItems: 'center',
    flexDirection: 'column',
    //justifyContent: 'space-around'
    },  
    Box1 :{
    marginTop: '3%',
    marginLeft: '4%',
    marginRight: '4%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
    TextBox1 :{
    //marginLeft:'3%',
    //marginRight:'5%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    },
    Text1: {
        fontSize: 23,
        marginBottom: '7%',
        marginTop: '7%',
        marginLeft:'7%',
        marginRight:'10%',
    },
    IconBox:{
    backgroundColor: '#ffffff',
    justifyContent:'center',
    borderRadius: 20,
    marginRight:'5%',
    marginLeft:'5%',
    },
    Icon: {
        fontSize: 25,
        color: '#b6b6b6',
    },

  

});

export default Home;