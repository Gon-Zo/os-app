import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Test from './test/index'
import Setting from './setting/index'
import Home from './home/index'
import Store from './store/index'
import Search from './search/index'

const Tab = createMaterialBottomTabNavigator();

const MainNavigation: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#3e2465"
                inactiveColor="#c9c9c9"
                barStyle={{backgroundColor: '#ffffff'}}
            >
                <Tab.Screen name="Home"
                            component={Home}
                            options={{
                                tabBarLabel: "Home",
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons name="home"
                                                            color={color}
                                                            size={26}/>)
                            }}
                />

                <Tab.Screen name="Store"
                            component={Store}
                            options={{
                                tabBarLabel: "Store",
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons
                                        name="store"
                                        color={color}
                                        size={26}/>
                                )
                            }}
                />

                <Tab.Screen name="Search"
                            component={Search}
                            options={{
                                tabBarLabel: "Search",
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons
                                        name="magnify"
                                        color={color}
                                        size={26}/>
                                )
                            }}
                />

                {/*<Tab.Screen name="Test"*/}
                {/*            component={Test}*/}
                {/*            options={{*/}
                {/*                tabBarLabel: 'Test',*/}
                {/*                tabBarIcon: ({color}) => (*/}
                {/*                    <MaterialCommunityIcons name="access-point" color={color} size={26}/>*/}
                {/*                ),*/}
                {/*            }}/>*/}

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
