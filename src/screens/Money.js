/*import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import {Doughnut} from 'react-chartjs-2';
import 'chart.js/auto'
import Axios from "axios";

const id = 'roybae'
const date = '2021-11-14'

const data = {
    labels: ['음식','교통','관광','쇼핑','숙박','etc'],
    datasets: [{
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#07e02f', '#FF321F', '#00eFFe'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#07e02f', '#FF321F', '#00eFFe']
    }]
  };

function Add(category, pay) {
    for (let j = 0 ; j < 6 ; j++){
        if(category == data.labels[j]){
//      console.log(data.datasets[0].data[j])
        data.datasets[0].data[j] = data.datasets[0].data[j] + pay
 //     console.log(data.datasets[0].data[j])
        }
    }  
}

function App() {
    useEffect(()=>{
      Axios.post('http://localhost:3001/api/get',{    //여기서 body부분에 api에 넘길 id나 date 알맞은 자료를 가져오도록 하면 됨
        id: id,
        date: date
      }).then((response)=>{        
        for (let i = 0 ; i < response.data.length ; i++){
          Add(response.data[i].category, response.data[i].pay)  
        }
      });
    }, []);
}

const Money = () => {
    App()
    return(
        <View style= {styles.Container}>
            <div className="App">    
                {id}님 {date}일
                <Doughnut data={data} />
            </div>
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

export default Money;
*/
import React from "react";
import { StyleSheet, View, Text } from "react-native";


const Mypage = () => {
    return(
        <View style= {styles.Container}>
            <Text style = {styles.Text1}>
                마이페이지임
            </Text>
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

export default Mypage;
