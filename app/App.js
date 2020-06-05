import React from 'react';
import MainNavigation from "./src/js/screens/MainNavigation";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store/store';


const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MainNavigation/>
            </PersistGate>
        </Provider>
  );
};

export default App;
