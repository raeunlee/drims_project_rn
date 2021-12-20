import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from "../screens/Home";
import Mypage from "../screens/Mypage"
import AddTravel from "../screens/AddTravel";
import Money from "../screens/Money";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            
            <Tab.Screen name = "지출" component={Money}/>
            <Tab.Screen name = "Home" component={Home} />
            <Tab.Screen name = "나" component={Mypage}/>
        </Tab.Navigator>
    )
};

export default TabNavigator;
