import React from 'react';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {mapping, light as theme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppRouter from './src/containers/root'

const App = () => (

    <ApplicationProvider mapping={mapping} theme={theme}>
        <IconRegistry icons={EvaIconsPack}/>
        <AppRouter/>
    </ApplicationProvider>
);

export default App;

