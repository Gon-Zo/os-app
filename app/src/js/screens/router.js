import React , {useEffect} from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
const BottomNav = createMaterialBottomTabNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {APP_OS} from "../public/comm";
import {useDispatch, useSelector} from "react-redux";
import {LoginButton} from "./common/button";
import AsyncStorage from '@react-native-community/async-storage';
import * as Screen from './index'
import {onIsTheme, updateLoginData} from "../actions/statics";
import {GET_COLOR, THEME} from "../public/colors";

const BottomNavigation = ({navigation}) => {

    const initData = useSelector(state=>state.Statics , [])

    React.useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <LoginButton navigation={navigation} isLogin={initData.isLogin}/>
            ),
        });

    }, [navigation]);

    const color = GET_COLOR()

    return (
            <BottomNav.Navigator
                initialRouteName="Home"
                activeColor={color.ACTIVE_COLOR}
                inactiveColor={color.INACTIVE_COLOR}
                barStyle={{backgroundColor: color.FG1}}>

                <BottomNav.Screen name="Home"
                                  component={Screen.Home}
                                  options={{
                                      tabBarLabel: "홈",
                                      tabBarIcon: ({color}) => (<Ionicons name={`${APP_OS}-home`} color={color} size={24}/>)
                                  }}
                />

                <BottomNav.Screen name="Store"
                                  component={Screen.Store}
                                  options={{
                                      tabBarLabel: "스토어",
                                      tabBarIcon: ({color}) => (<Ionicons name={`${APP_OS}-business`} color={color} size={24}/>)
                                  }}
                />

                <BottomNav.Screen name="Basket"
                                  component={Screen.Basket}
                                  options={{
                                      tabBarLabel: "장바구니",
                                      tabBarIcon: ({color}) => (<FontAwesome name={`shopping-cart`} color={color} size={24}/>)
                                  }}
                />

                <BottomNav.Screen name="Setting"
                                  component={Screen.Setting}
                                  options={{
                                      tabBarLabel: '더보기',
                                      tabBarIcon: ({color}) => (<FontAwesome name={`ellipsis-h`} color={color} size={24}/>),
                                  }}/>

            </BottomNav.Navigator>
    );
};

const Stack = createStackNavigator()

const Router = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        AsyncStorage.getItem('token')
            .then(res => updateLoginData(dispatch, res !== null))
            .catch(err => console.log(err))

        AsyncStorage.getItem("theme")
            .then(res => {
                const text = res == null ? THEME.L : res
                AsyncStorage.setItem("theme", text)
                onIsTheme(dispatch, text == THEME.D)
            })
            .catch(err => console.log(err))

    }, [])

    const color = GET_COLOR()

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: color.ACTIVE_COLOR,
                    headerStyle: { backgroundColor: color.FG1 },
                }}>
                <Stack.Screen name="Main" component={BottomNavigation}/>
                {/*<Stack.Screen name="Basket" component={Screen.Basket}/>*/}
                <Stack.Screen name="Login" component={Screen.Login}/>
                <Stack.Screen name="SignUp" component={Screen.SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

