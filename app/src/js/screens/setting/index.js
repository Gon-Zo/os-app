import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";

import Main from './main.js'

const Stack = createStackNavigator()

export default () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={"Main"} component={Main}/>
        </Stack.Navigator>
    )
}
