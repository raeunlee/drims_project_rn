import React from "react";
import { createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Addtravel from "../screens/AddTravel";

const Stack = createStackNavigator();

const Stacknavigation = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name = "Home" component = {Home} />
            <Stack.Screen name = "Addtravel" component = {Addtravel}/>


        </Stack.Navigator>
    );
};

export default Stacknavigation;
