import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";

import Main from './main.js'
import Application from './application.js'

const Stack = createStackNavigator()

export default () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={"Main"} component={Main}/>
            <Stack.Screen name={"Application"} component={Application}/>
        </Stack.Navigator>
    )
}
