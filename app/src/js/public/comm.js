import React  from 'react'
import { Platform } from 'react-native';

export const APP_OS = Platform.OS == 'ios' ? 'ios' : 'md'

export const Fonts = {
    BMHANNA: "BMHANNA"
}

export function isFalse(val){
   return val == false
}

