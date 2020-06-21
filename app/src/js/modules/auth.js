import {AsyncStorage} from 'react-native'

export function getJwtFromUser() {
    return setJwt()
}

const setJwt = () => {
    return AsyncStorage.getItem("token")
        .then(res => {
            if (res != null) {
                return setDecodeJwt(res)
            }
            return null;
        })
        .catch(err => console.log(err))
}

const setDecodeJwt = (jwt) => {

    const jwtDecode = require('jwt-decode');

    const user =  jwtDecode.jwt_decode(jwt)

    return user

}
