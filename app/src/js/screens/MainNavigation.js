import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import {TouchableOpacity} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";

const BottomNav = createMaterialBottomTabNavigator();

import Ionicons from "react-native-vector-icons/Ionicons";

import Setting from './setting/index'
import Home from './home/index'
import Store from './store/index'
import Basket from './basket/index'
import Login from './login/index'
import SignUp from './signup/index'

import {APP_OS, CHECK_AUTH} from "../public/comm";

function BasketButton(props) {
    const navigation = props.navigation
    if (CHECK_AUTH) {
        return (
            <>
            </>
        )
    }
    return(
        <TouchableOpacity
            onPress={() => {
                    navigation.navigate('Basket')
            }}
            style={{paddingRight: 10}}>
            <Ionicons name="ios-basket" color="#424242" size={20}/>
        </TouchableOpacity>
    )
}

const BottomNavigation = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <BasketButton navigation={navigation}/>
            ),
        });
    }, [navigation]);

    return (
            <BottomNav.Navigator
                initialRouteName="Home"
                activeColor="#3e2465"
                inactiveColor="#c9c9c9"
                barStyle={{backgroundColor: '#ffffff'}}>

                <BottomNav.Screen name="Home"
                                  component={Home}
                                  options={{
                                      tabBarLabel: "Home",
                                      tabBarIcon: ({color}) => (<Ionicons name={`${APP_OS}-home`} color={color} size={24}/>)
                                  }}
                />

                <BottomNav.Screen name="Store"
                                  component={Store}
                                  options={{
                                      tabBarLabel: "Store",
                                      tabBarIcon: ({color}) => (<Ionicons name={`${APP_OS}-business`} color={color} size={24}/>)
                                  }}
                />

                {/*<BottomNav.Screen name="Search"*/}
                {/*                  component={Search}*/}
                {/*                  options={{*/}
                {/*                      tabBarLabel: "Search",*/}
                {/*                      tabBarIcon: ({color}) => (<Ionicons name={`${APP_OS}-search`} color={color} size={26}/>)*/}
                {/*                  }}*/}
                {/*/>*/}

                <BottomNav.Screen name="Setting"
                                  component={Setting}
                                  options={{
                                      tabBarLabel: 'Setting',
                                      tabBarIcon: ({color}) => (<Ionicons name={`${APP_OS}-cog`} color={color} size={24}/>),
                                  }}/>

            </BottomNav.Navigator>
    );
};

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomNavigation}/>
                <Stack.Screen name="Basket" component={Basket}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
           </Stack.Navigator>
       </NavigationContainer>
   )
}

export default Router

