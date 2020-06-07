import {onInput , onOutput , onLoad , onError} from '../reducers/home'

export const httpInput = function (dispatch) {
        dispatch(onLoad())
        try {
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
