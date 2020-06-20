import React, {useEffect} from 'react';
import Router from "./src/js/screens/router";
import reducer from './src/js/reducers/index'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const store = createStore(reducer);

const App : () => React$Node = () =>{

    useEffect(()=>{

    },[])

    return (
            <Provider store={store}>
                <Router/>
            </Provider>
    )

}

export default App;
