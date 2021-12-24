//홈화면_ 여행을 추가할수있는 페이지! 가장 중심이 됨
import { NavigationContainer } from '@react-navigation/native';
import axios, { Axios } from 'axios';
import { setStatusBarHidden } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet , Button, View, Text} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import TravelList from '../components/TravelList';


const MakeTravel = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate("AddTravel")}>
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
       </TouchableOpacity>
    );
}



//추후 데이터 받아올 예정

class Home extends Component { 

    state = {
            loading:false,
            TravelList: [],
        };
    loadTravel(){
        axios
        .get("http://192.168.3.187:3000/travel/data",{})
        .then((response) => {
            const data = response.data
            console.log(data);
            this.setState({ 
                loading:true,
                TravelList:data
            });
            }) .catch(e => {
                console.error(e);
                this.setState({
                    loading:false
            });
            });
         };
    componentDidMount(){
        this.loadTravel();
    }
    render(){ 
        console.log(this.state.TravelList);
    return(
        

    <View>
    <MakeTravel/>      
        {
            this.state.TravelList.map(c => {
                return(
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("MyTravel")}>
                    
                    <TravelList
                    key={c.key}
                    travelName = {c.travelName}
                    totalMoney = {c.totalMoney}
                 />
                    </TouchableOpacity>

                );
            })
        }
        <Button title = "국가추가하는 페이지로 이동" 
        onPress={()=> navigation.navigate('AddCountry')} />
        <Button title = "로그인하는 페이지로 이동" 
        onPress={()=> navigation.navigate('Login')} />
        </View>
        
    );
    }
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