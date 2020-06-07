import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Test from './test/index'
import Setting from './setting/index'

const Tab = createMaterialBottomTabNavigator();

const MainNavigation: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{ backgroundColor: '#8c63fa' }}
            >
                <Tab.Screen name="Test"
                            component={Test}
                            options={{
                                tabBarLabel: 'Test',
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26}/>
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
