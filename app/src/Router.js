import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from "./screen/HomeScreen";
// import SettingScreen from "./bottom/SettingScreen";
import DetailScreen from "./screen/bottom/DetailScreen";
import React from "react";
import ProfileScreen from "./screen/ProfileScreen";

const home = createStackNavigator({
    Home: {
        screen: HomeScreen,
        // header style change
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f00',
                borderBottomWidth: 5,
                borderBottomColor: '#f0d',
                shadowOpacity: 0,
                elevation: 0,
            },
        },
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
            },
        }
    },
});

const profile = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
            },
        }
    },
});

const BottomNav = createBottomTabNavigator({
    Home: home,
    Profile: profile
});

const MyApp = createStackNavigator({
    MyApp: {screen: BottomNav}
}, {headerMode: "none"});

const Router = createAppContainer(MyApp);

export default Router

