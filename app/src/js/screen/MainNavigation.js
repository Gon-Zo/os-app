import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import Home from './home/index'
import Setting from './setting/index'

const Tab = createMaterialBottomTabNavigator();

const MainNavigation: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Setting" component={Setting}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation
