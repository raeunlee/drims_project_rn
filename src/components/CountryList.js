import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet , Button, View, Text} from 'react-native';
import Home from '../screens/Home';
import { useNavigation } from '@react-navigation/native';


class CountryList extends React.Component {
    render() {
        return (
                <CountryListView
                id = {this.props.id}
                travel_name = {this.props.travel_name}
                />
        );
    }
}



// 여행 나열할 때!
class CountryListView extends React.Component{
    render(){
        
        return(
          
            <View style = {styles.Box1}>
            <View style = {styles.TextBox1}> 
                <Text style = {styles.Text1}>
                    {this.props.id}
                    {this.props.travel_name}
                </Text>
            </View>
            </View>
     
        )
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
export default CountryList;