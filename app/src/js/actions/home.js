import {onInput , onOutput , onLoad , onError} from '../reducers/home'
import axios from 'axios'

export const httpInput = function (dispatch) {
        dispatch(onLoad())
        try {
                // axios.get(`https://localhost:8080/health/check-up`)
                dispatch(onInput())
        } catch (e) {
                dispatch(onError(e))
        }

}

export const httpOutput = function (dispatch) {
        dispatch(onLoad())
        try {
                dispatch(onOutput())
        } catch (e) {
                dispatch(onError(e))
        }
}
