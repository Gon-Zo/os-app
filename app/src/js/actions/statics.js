import axios from "axios";
import {onLoginData, onLoginError, onLoginLoad, onThemeData, onThemeError, onThemeLoad} from "../reducers/statics";
import AsyncStorage from '@react-native-community/async-storage';

export function onLogin(dispatch, navigation, payload) {

    dispatch(onLoginLoad())

    try {
        axios.post(`/login`, payload)
            .then((res) => {
                const token = `Bearer ${res.data.token}`

                AsyncStorage.setItem('token', token)
                    .then(r => {
                        dispatch(onLoginData(true))
                        navigation.goBack()
                    }).catch(err => console.log("err"));

            })
            .catch(err => {
                dispatch(onLoginData(false))
                alert("Login Fail")
            })

    }catch (e) {
        dispatch(onLoginError(e))
    }

}

export function onTest() {
    axios.get(`/manager/product/chart`)
        .then((res) => console.log(res.status))
        .catch(err => console.log(err))
}

export function updateLoginData(dispatch, payload) {
    dispatch(onLoginData(payload))
}

export function onIsTheme(dispatch, payload) {

    dispatch(onThemeLoad())
    try {
        dispatch(onThemeData(payload))
    } catch (e) {
        dispatch(onThemeError(e))
    }

}
