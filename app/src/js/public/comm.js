import React  from 'react'
import { Platform } from 'react-native';
import axios from "axios";

export const APP_OS = Platform == 'ios' ? 'ios' : 'md'

export const AUTH_POINT = axios.defaults.headers.common['Authorization']

export const Fonts = {
    BMHANNA: "BMHANNA"
}

export function isLogin() {
    let test = typeof axios.defaults.headers.common['Authorization'] === 'undefined'
    console.log("isLogin", test)
    return test
}
