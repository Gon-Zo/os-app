import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Test from './test/index'
import Setting from './setting/index'
import Home from './home/index'

const Tab = createMaterialBottomTabNavigator();

// const MyTheme = {
//     dark: false,
//     colors: {
//         primary: 'rgb(255, 45, 85)',
//         background: 'rgb(242, 242, 242)',
//         card: 'rgb(255, 255, 255)',
//         text: 'rgb(28,28,30)',
//         border: 'rgb(199, 199, 204)',
//     },
// };

// activeColor="#f0edf6"
// inactiveColor="#3e2465"
// barStyle={{backgroundColor: '#8c63fa'}}
// <NavigationContainer theme={MyTheme}>

const MainNavigation: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#3e2465"
                inactiveColor="#c9c9c9"
                barStyle={{backgroundColor: '#ffffff'}}
            >
                <Tab.Screen name="Home"
                            component={Home}
                            options={{
                                tabBarLabel: "Home",
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26}/>)
                            }}
                />
                <Tab.Screen name="Test"
                            component={Test}
                            options={{
                                tabBarLabel: 'Test',
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons name="access-point" color={color} size={26}/>
                                ),
                            }}/>
                <Tab.Screen name="Setting"
                            component={Setting}
                            options={{
                                tabBarLabel: 'Setting',
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons name="cogs" color={color} size={26}/>
                                ),
                            }}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation
