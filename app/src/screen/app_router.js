import React from 'react-native'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

// import Screen
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import {createDrawerNavigator} from "react-navigation-drawer";
import PopScreen from "./PopScreen";

const homStackNav = createStackNavigator({
    Home: {screen: HomeScreen}
});

const profileStackNav = createStackNavigator({
    Profile: {screen: ProfileScreen}
});

const bottomNav = createBottomTabNavigator({
    Home: homStackNav,
    Profile: profileStackNav
});

const popNav = createDrawerNavigator({
    Pop: PopScreen
});

const MyApp = createStackNavigator({
    Bottom: bottomNav,
    Pop: popNav
}, {headerMode: "none"});

const AppRouter = createAppContainer(MyApp);

export default AppRouter
