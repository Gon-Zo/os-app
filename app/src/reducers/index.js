import {combineReducers} from 'redux'
// import countReducers from './ex/countReducers'
import LoginReducers from './login/LoginReducers'
import SignReducers from "./sign/SignReducers";

export default combineReducers({
    // count: countReducers,
    login: LoginReducers,
    sign : SignReducers
});
