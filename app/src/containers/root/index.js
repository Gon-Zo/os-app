import React from 'react-native'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

// main Root
import MainRoot from "../main";
import FormNav from "../single/update";
import LoginNav from "../single/login";
import DetailNav from "../single/detail";
import SignNav from "../single/sign";

const MyApp = createStackNavigator({
    Main: MainRoot,
    Update: FormNav,
    Login: LoginNav,
    Detail : DetailNav,
    Sign : SignNav
}, {headerMode: "none"});

const AppRouter = createAppContainer(MyApp);

export default AppRouter
