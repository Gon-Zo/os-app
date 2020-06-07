import { onCountData , onCountLoad , onCountError} from '../reducers/test'

export const httpCount = function (dispatch, payload) {
    dispatch(onCountLoad())
    try {
        dispatch(onCountData(payload))
    } catch (e) {
        dispatch(onCountError(e))
    }
}
