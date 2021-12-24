import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from './navigations/Tab';
import Home from "./screens/Home";
import Mypage from "./screens/Mypage";
import AddTravel from "./screens/AddTravel";
import AddCountry from "./screens/AddCountry";
import Login from "./screens/Login";
import Sign from "./screens/Sign"
import MyTravel from "./screens/MyTravel";

const Stack = createStackNavigator();



const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            
            <Stack.Screen
                  name="Tab"
                  component={TabNavigation}
                  screenOptions = {
                      {headerShown: false,}
                  }
                />
           <Stack.Screen 
                name = "Login"
                component = {Login}
                />
             <Stack.Screen 
                name = "Sign"
                component = {Sign}
                />
             <Stack.Screen 
                name = "Home"
                component = {Home}
                />
             <Stack.Screen 
                name = "AddTravel"
                component = {AddTravel}
                />
             <Stack.Screen 
                name = "MyTravel"
                component = {MyTravel}
                />
        
             <Stack.Screen 
                name = "AddCountry"
                component = {AddCountry}
                />   

            </Stack.Navigator>
          
        </NavigationContainer>
    );
};


export default App;