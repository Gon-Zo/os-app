import {AsyncStorage} from 'react-native'

export function getJwtFromUser() {
    return setJwt()
}

const setJwt = () => {
    return AsyncStorage.getItem("token")
        .then(res => {
            if (res != null) {
               // return parseJwt(to)
                return res
            }
            return null;
        })
        .catch(err => console.log(err))
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};
