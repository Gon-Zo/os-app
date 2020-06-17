import React  from 'react'
import { Platform } from 'react-native';
import axios from "axios";

export const APP_OS = Platform == 'ios' ? 'ios' : 'md'

export const AUTH_POINT = axios.defaults.headers.common['Authorization']

export const Fonts = {
    BMHANNA: "BMHANNA"
}

