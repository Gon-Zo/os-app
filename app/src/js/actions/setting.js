import axios from 'axios'

export function onLogin(payload) {
    return axios.post(`login`, payload)
        .then((res) => {
            const token = res.data.token
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        })
        .catch(err => console.log(err))
}
