import {onCountData, onCountLoad, onCountError, onTxtLoad, onTxtError, onTxtData} from '../reducers/test'

export const httpCount = function (dispatch, payload) {
    dispatch(onCountLoad())
    try {
        dispatch(onCountData(payload))
    } catch (e) {
        dispatch(onCountError(e))
    }
}

export function httpTxt(dispatch , payload) {
    dispatch(onTxtLoad())
    try {
        dispatch(onTxtData(payload))
    }catch (e) {
        dispatch(onTxtError(e))
    }
}

