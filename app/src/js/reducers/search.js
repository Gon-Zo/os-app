import {ACTION_TYPE, initData} from "../store/search";
import {STATE_TYPE} from "../modules/enum";

export const onItemsData = (payload) => ({type: ACTION_TYPE.ITEMS.DATA, data: payload})

export const onItemsLoad = () => ({type : ACTION_TYPE.ITEMS.LOAD})

export const onItemsError = (e) => ({type: ACTION_TYPE.ITEMS.ERROR, error: e})

const reducer = (state = initData, action) => {
    switch (action.type) {
        case ACTION_TYPE.ITEMS.DATA :
            state.items.type = STATE_TYPE.S
            state.items.data = action.data
            break;
        case ACTION_TYPE.ITEMS.LOAD :
            state.items.type = STATE_TYPE.L
            break;
        case ACTION_TYPE.ITEMS.ERROR :
            state.items.type = STATE_TYPE.E
            state.items.error = action.error
            break;
    }
    return state;
}

export default reducer
