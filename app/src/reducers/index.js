import {combineReducers} from 'redux'
import countReducers from './ex/countReducers'
import LoginReducers from './login/LoginReducers'

export default combineReducers({
    count: countReducers,
    login: LoginReducers,
});
