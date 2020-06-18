import axios from "axios";
import {onLoginData, onLoginError, onLoginLoad} from "../reducers/statics";

export function onLogin(dispatch, navigation, payload) {

    dispatch(onLoginLoad())
    try {
        axios.post(`login`, payload)
            .then((res) => {
                const token = `Bearer ${res.data.token}`
                axios.defaults.headers.common['Authorization'] = token
                dispatch(onLoginData(true))
                navigation.goBack()
            })
            .catch(err => {
                dispatch(onLoginData(false))
                alert("Login Fail")
            })
    }catch (e) {
        dispatch(onLoginError(e))
    }

}
