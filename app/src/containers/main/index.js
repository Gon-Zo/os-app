import {createBottomTabNavigator} from "react-navigation-tabs";

import SettingScreen from "./setting";
import HomeScreen from "./home";
import Test2Screen from "./temp";


import * as icon from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

import React from "react";
import BasketScreen from "./basket";
import EtcScreen from "./etc";
import StoreScreen from "./store";


const MainRoot = createBottomTabNavigator({
    Temp: {screen: Test2Screen},
    Etc: {screen: EtcScreen},
    Test: {screen: Test2Screen},
    Store: {screen: StoreScreen},
    Basket: {screen: BasketScreen},
    Home: {screen: HomeScreen, navigationOptions: {}},
}, {
    defaultNavigationOptions: ({navigation}) => ({
        // custom tab bar
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            // return <Icon name={getIcon(routeName)} size={24} color={tintColor}/>
            return <FontAwesomeIcon icon={test(routeName)} size={20} color={tintColor}/>
        },
    }),
    tabBarOptions: {
        // 버튼 사용시
        activeTintColor: '#000',
        // 비사용 시
        inactiveTintColor: '#c9c9c9',
        showLabel: false
    },
});

function test(tapName) {
    switch (tapName) {
        case "Home" :
            return icon.faHome;
        case "Setting":
            return icon.faCog;
        case "Temp":
            return icon.faInbox;
        case "Basket":
            return icon.faShoppingCart;
        case "Etc":
            return icon.faEllipsisH;
        case "Store":
            return icon.faStore;
        default:
            return icon.faHotel;
    }
}

export default MainRoot
