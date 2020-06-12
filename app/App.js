import React from 'react';
import MainNavigation from "./src/js/screens/MainNavigation";

import reducer from './src/js/reducers/index'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const store = createStore(reducer);

const App : () => React$Node = () =>{
    return (
        <Provider store={store}>
            <MainNavigation/>
        </Provider>
    )
}

export default App;
