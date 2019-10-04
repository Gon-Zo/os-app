import React, {Component} from 'react';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {mapping, light as theme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppRouter from './src/containers/root'
import initStore from './src/store'
import {Provider} from 'react-redux'

const store = initStore();

export default class App extends Component {
    render() {
        return (
            <ApplicationProvider mapping={mapping} theme={theme}>
                <Provider store={store}>
                    <IconRegistry icons={EvaIconsPack}/>
                    <AppRouter/>
                </Provider>
            </ApplicationProvider>
        )
    }
}
