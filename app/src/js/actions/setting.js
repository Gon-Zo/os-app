import axios from 'axios'

export function onLogin( navigation , payload) {
    axios.post(`login`, payload)
        .then((res) => {
            const token = res.data.token
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            navigation.goBack()
        })
        .catch(err => console.log(err))
}
