import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

//export default class App extends Component{

 /* constructor(props) {
    super(props)
    this.state = {
      response: "Click to connect server"
    }
  }
  connect = () => {
    const URL = "http://localhost:10000/hi";
    fetch(URL).then(response => {
      if (response.status == 200) {
        return response.text();
      }
      else {
        throw new Error("Error");
      }
    }).then(responseText => {
      this.setState({ response: responseText });
    })

      .catch(error => {
        console.alert(error.message);
      });
  }
*/
const App =() => {
/*
  const axios = require('axios')
axios({
  method : 'get',
  url : 'http://localhost:10000/hi'
}).then((res)=>{
  console.log(res)
})
*/
const callapi=()=>{
  axios
  .get('http://localhost:10000/hi')
  .then(function(response){
    console.log(response);
  })
  .catch(function(err){
    alert(err);
  });

};


  return (
    <View style={styles.container}>
      <Text>click button to connect</Text>
      <StatusBar style="auto" />
   <Button title = "connect" 
   onPress={()=>callapi()}></Button>
	  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


