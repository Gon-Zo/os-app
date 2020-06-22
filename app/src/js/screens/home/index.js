import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

import Main from './main.js'
import Detail from '../detail/index'

export default () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}
