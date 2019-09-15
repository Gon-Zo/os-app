import React from 'react-native'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

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


const AppRouter = createAppContainer(bottomNav);

export default AppRouter
