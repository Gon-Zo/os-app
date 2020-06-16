/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios'

axios.defaults.baseURL = 'http://ec2-3-34-48-181.ap-northeast-2.compute.amazonaws.com:9000';

axios.interceptors.request.use(request => {
    console.log('request', request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

AppRegistry.registerComponent(appName, () => App);
