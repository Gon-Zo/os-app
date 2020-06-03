import {Navigation } from "react-native-navigation";
import React from 'react'

import Home from './screen/home/index'
import Store from './screen/store/index'
import Search from './screen/search/index'
import Setting from './screen/setting/index'

import Icon from "react-native-vector-icons/dist/FontAwesome";

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Store', () => Store);
Navigation.registerComponent('Search', () => Search);
Navigation.registerComponent('Setting', () => Setting);

let Nav = Navigation.events().registerAppLaunchedListener(() => {

    Navigation.setRoot({

        root: {

            bottomTabs: {
                id : "BOTTOM_TAB_LAYOUT" ,
                children : [

                    {
                        stack :{
                            id: "HOME_LAYOUT",
                            children : [
                                {
                                    component : {
                                        id : "HOME_LAYOUT",
                                        name : "Home",
                                    }
                                }
                            ] ,
                            options : {
                                bottomTab : {
                                    text  :"Home" ,
                                    textColor : '#f0f' ,
                                    icon : () => (<Icon name="glass"/>)
                                }
                            }

                        }
                    },

                    {
                        stack :{
                            id: "STORE_LAYOUT",
                            children : [
                                {
                                    component : {
                                        id : "main",
                                        name : "Store",
                                    }
                                }
                            ] ,
                            options : {
                                bottomTab : {
                                    text  :"Store" ,
                                    textColor : '#f0f'
                                }
                            }
                        }
                    }






                ]
            }

        }
    })
})

export default Nav
