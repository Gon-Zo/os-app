import reducers from '../reducers'
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";

import ReduxThunk from 'redux-thunk';

const logger = createLogger();

export default function initStore() {
    const store = createStore(
        reducers,
        applyMiddleware(logger, ReduxThunk)
    );
    return store;
};
