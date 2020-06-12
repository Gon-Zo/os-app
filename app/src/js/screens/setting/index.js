import React from 'react'
import Main from './main'
import SignUp from './sing-up'

import { createStackNavigator } from '@react-navigation/stack';

const Setting = createStackNavigator()

export default () => {
    return (
        <Setting.Navigator>
            <Setting.Screen name="Setting"
                            component={Main}
                            options={{headerShown: false}}/>

            <Setting.Screen name="SignUp"
                            component={SignUp}
                            options={{
                                headerTitle : '회원가입'
                            }}/>
        </Setting.Navigator>
    )
}
