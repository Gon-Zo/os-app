import React from 'react';
import {ApplicationProvider} from 'react-native-ui-kitten';
import {mapping, light as theme} from '@eva-design/eva';
import Root from "./src/root";

const App = () => (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <Root/>
    </ApplicationProvider>
);

export default App;

