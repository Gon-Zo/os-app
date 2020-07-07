/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios'
import {AsyncStorage} from 'react-native'

axios.defaults.baseURL = 'http://ec2-3-34-48-181.ap-northeast-2.compute.amazonaws.com:9000';

axios.interceptors.request.use(request => {
    console.log('request', request);
    return checkingToToken(request)
}, error => {
    console.log('error', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log( 'response' , response)
    return response;
}, error => {
    console.log('error', error)
    return Promise.reject(error);
});

function checkingToToken(res) {
    return AsyncStorage.getItem("token")
        .then(r => {
            res.headers["Authorization"] = r
            return res
        })
        .catch(err => console.log(err))
}

ErrorUtils.setGlobalHandler(()=>{
    console.log("setGlobalHandler");
})

AppRegistry.registerComponent(appName, () => App);
