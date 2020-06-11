import React from 'react';
import MainNavigation from "./src/js/screens/MainNavigation";

import reducer from './src/js/reducers/index'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const store = createStore( reducer );

const App : () => React$Node = () =>{
    return (
        <Provider store={store}>
            <MainNavigation/>
        </Provider>
    )
}

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

const RooterNav = createStackNavigator()

const Rooter = () => {
    return (
        <NavigationContainer>
            <RooterNav.Navigator>
                <RooterNav.Screen name={MainNavigation}/>
            </RooterNav.Navigator>
        </NavigationContainer>
    )
}

export default App;
