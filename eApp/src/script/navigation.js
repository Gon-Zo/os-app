import {Navigation} from "react-native-navigation";
import React from 'react'

import Home from './screen/home'
import Store from './screen/store'
import Search from './screen/search'
import Setting from './screen/setting'

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Store', () => Store);
Navigation.registerComponent('Search', () => Search);
Navigation.registerComponent('Setting', () => Setting);

let Nav = Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root : {
            bottomTabs: {
                children: [
                    {
                        component: {
                            name: 'Home',
                            options : {
                                statusBar : {
                                    backgroundColor : "#c9c9c9"
                                }
                            }
                        }
                    },

                ]
            }

        }
    })
})


export default Nav
