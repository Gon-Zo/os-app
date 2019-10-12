import {createBottomTabNavigator} from "react-navigation-tabs";

import SettingScreen from "./setting";
import HomeScreen from "./home";
import Test2Screen from "./temp";


import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";


const MainRoot = createBottomTabNavigator({
    Temp: {screen: Test2Screen},
    Setting: {screen: SettingScreen},
    Home: {screen: HomeScreen, navigationOptions: {}},
}, {
    defaultNavigationOptions: ({navigation}) => ({
        // custom tab bar
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            return <Icon name={getIcon(routeName)} size={24} color={tintColor}/>
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});

function getIcon(tapName) {
    switch (tapName) {
        case "Home" :
            return "home";
        case "Setting":
            return "cog";
        case "Temp":
            return "inbox";
        default:
            return "home";
    }
}


export default MainRoot
