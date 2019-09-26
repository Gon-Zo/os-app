import React from 'react';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {mapping, light as theme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Root from "./src/root";


// import {Provider} from 'react-redux'
// import {store} from './src/store/index'
{/*<Provider store={store}>*/
}
// </Provider>


const App = () => (

    <ApplicationProvider mapping={mapping} theme={theme}>
        <IconRegistry icons={EvaIconsPack}/>
        <Root/>
    </ApplicationProvider>
);

export default App;

