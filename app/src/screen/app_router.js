import React from 'react-native'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

// import Screen
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import {createDrawerNavigator} from "react-navigation-drawer";
import PopScreen from "./PopScreen";
import LoadSpinner from "../component/LoadSpinner";
import Test1 from "./drawer/Test1";
import Test2 from "./drawer/Test2";


import DrawerNavigation from './drawer/index'


const homStackNav = createStackNavigator({
    Home: {
        screen: HomeScreen,
        // header style change
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 5,
                borderBottomColor: '#000',
                shadowOpacity: 0,
                elevation: 0,
            },
        },
    }
});

const profileStackNav = createStackNavigator({
    Profile: {screen: ProfileScreen}
});

const bottomNav = createBottomTabNavigator({
    Home: homStackNav,
    Profile: profileStackNav
});

const popNav = createDrawerNavigator({
    Pop: PopScreen,
});

const loadNav = createDrawerNavigator({
    Load: LoadSpinner
});

const DrawerNavigator = createDrawerNavigator({
    Test1: Test1,
    Test2: Test2
}, {
    contentComponent: DrawerNavigation,
});


// Public Screens
const MyApp = createStackNavigator({
    Bottom: bottomNav,
    Pop: popNav,
    Load: loadNav,
    Menu: DrawerNavigator
}, {headerMode: "none"});

const AppRouter = createAppContainer(MyApp);

export default AppRouter
