import {onItemsData, onItemsError, onItemsLoad } from "../reducers/search";

export function $fetchItems(dispatch, payload) {
    // payload is search Value
    dispatch(onItemsLoad())
    try {
        dispatch(onItemsData(payload))
    } catch (e) {
        dispatch(onItemsError(e))
    }
}
