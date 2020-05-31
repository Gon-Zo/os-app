
import React from 'react';

import Nav  from './src/script/navigation'
import {Platform} from 'react-native'

let App = () => {
    console.log(`OS :: ${Platform.OS}`)
    return (
        <Nav/>
    );
};

export default App;
