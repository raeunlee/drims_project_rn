import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Mypage from "../screens/Mypage"
import Add_travel from "../screens/Add_travel";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={Home} />
            <Tab.Screen name = "추가" component={Add_travel}/>
            <Tab.Screen name = "나" component={Mypage}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;

/*import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Add_travel from '../screens/Add_travel';


const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        // focused: bool, 클릭했는지 여부

        switch (route.name) {
          case 'Home':
            iconName = 'magnify';
            break;
          case 'Mypage':
            iconName = 'forum-outline';
            break;
          default:
            iconName = 'star-outline';
        }
        return (
          <MaterialCommunityIcons size={size} name={iconName} color={color} />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#1B2228', // 활성화 되었을 때 색
      inactiveTintColor: '#C7CDD3', // 비활성화 색
      showLabel: false, // 텍스트 숨기기
    }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Mypage" component={MypageScreen} />

  </Tab.Navigator>
);

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Stack" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
*/