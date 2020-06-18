import axios from "axios";
import {AsyncStorage} from "react-native";

export function onLogin(navigation , payload) {
    axios.post(`login`, payload)
        .then((res) => {
            const token = `Bearer ${res.data.token}`
            axios.defaults.headers.common['Authorization'] = token
            test("token", token)
            navigation.goBack()
        })
        .catch(err =>{
            alert("Login Fail")
        })

}


async function test(key, val) {
    await AsyncStorage.setItem(key, val)
}
