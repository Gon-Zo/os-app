import React, {Component} from 'react';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {mapping, light as theme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppRouter from './src/containers/root'
import initStore from './src/store'
import {Provider} from 'react-redux'
import * as screen from './src/public/styles/comm'

const store = initStore();

export default () => {
    return(
        <ApplicationProvider mapping={mapping} theme={theme}>
            <Provider store={store}>
                <IconRegistry icons={EvaIconsPack}/>
                {displayInfo()}
                <AppRouter/>
            </Provider>
        </ApplicationProvider>
    )
}

function displayInfo() {
    // Px = dp * (dpi / 160 )
    // dp = px * (160 / dpi )
    // density = dpi / 160
    // dp / (160 / dpi ) = ( dp * (dpi / 160 ) )

    // console.log(screen.width * 50 / 100);

    console.log("=========[ MARKET APP ]===========");
    console.log("=========[ DISPLAY OS ]===========");
    console.log("=========[ " + screen.os + " ]===========");
    console.log("=================================")
}
