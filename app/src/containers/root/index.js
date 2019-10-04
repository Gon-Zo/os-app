import React from 'react-native'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

// main Root
import MainRoot from "../main";
import FormNav from "../single/update";

const MyApp = createStackNavigator({
    Main: MainRoot,
    Update: FormNav,
}, {headerMode: "none"});

const AppRouter = createAppContainer(MyApp);

export default AppRouter
