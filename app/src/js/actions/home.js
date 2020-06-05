import {onInput , onOutput} from '../reducers/home'

export const httpInput = function (dispatch) {
        dispatch(onInput())
}

export const httpOutput = function (dispatch) {
        dispatch(onOutput())
}
