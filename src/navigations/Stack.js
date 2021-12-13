import React from "react";
import { createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Add_travel from "../screens/add_travel";

const Stack = createStackNavigator();

const Stacknavigation = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name = "Home" component = {Home} />
            <Stack.Screen name = "Add_travel" component = {Add_travel}/>
        </Stack.Navigator>
    );
};

export default Stacknavigation;
