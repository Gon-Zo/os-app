import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()

import Main from './main'
import LoginForm from './loginForm'
import {BackButton} from "../common/button";

export default ({navigation})=>{

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <BackButton navigation={navigation}/>
            )
        })
    }, [navigation])

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
          <Stack.Screen name={"Main"}  component={Main}/>
          <Stack.Screen name={"LoginForm"}  component={LoginForm}/>
       </Stack.Navigator>
    )
}
