
import {onItemsData, onItemsError, onItemsLoad} from "../reducers/search";

export function saveItems(dispatch, payload) {
    dispatch(onItemsLoad())
    try {
        dispatch(onItemsData(payload))
    } catch (e) {
        dispatch(onItemsError(e))
    }
}
