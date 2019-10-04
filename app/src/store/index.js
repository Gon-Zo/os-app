import reducers from '../reducers'
import {applyMiddleware, createStore} from "redux";

export default function initStore() {
    const store = createStore(
        reducers,
        // applyMiddleware()
    )
    return store;
};
