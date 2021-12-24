import React from "react";
import { TouchableOpacity, StyleSheet , Button, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CountryList from "../components/CountryList";

const country = [
    {
        'id': 1,
        'Country_name': 'Maxico'
    },
    {
        'id': 2,
        'Country_name': 'London'
    }
    ]


class MyTravel extends React.Component {
    render(){
        return(
            <View>
  
            {
                country.map(c => {
                    return(
                        <CountryList
                        key = {c.id}
                        
                        travel_name = {c.Country_name}
                     />

                    );
                })
            }
            </View>
        );
    }
}

export default MyTravel;