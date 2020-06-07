import {STATE_TYPE} from "../modules/enum";
import {ACTION_TYPE  , initData } from '../store/test'

export const onCountData = (paylaod) => ({type: ACTION_TYPE.COUNT.DATA, data: paylaod})

export const onCountLoad = () => ({type: ACTION_TYPE.COUNT.LOAD})

export const onCountError = (e) => ({type: ACTION_TYPE.COUNT.ERROR, error: e})

export const onTxtData = (payload) => ({type: ACTION_TYPE.TXT, data: payload})

export const onTxtLoad = () => ({type : ACTION_TYPE.TXT.LOAD})

export const onTxtError = (e) => ({type: ACTION_TYPE.TXT.ERROR, error: e})

const reducer = (state = initData, action) => {
    switch (action.type) {
        // count
        case ACTION_TYPE.COUNT.DATA:
            state.count.type = STATE_TYPE.S
            if (action.data == '+') {
                state.count.data += 1
            } else {
                state.count.data -= 1
            }
            break;
        case ACTION_TYPE.COUNT.LOAD:
            state.count.type = STATE_TYPE.L
            break;
        case ACTION_TYPE.COUNT.ERROR :
            state.count.type = STATE_TYPE.E
            state.count.error = action.error
            break;
        //   Txt
        case ACTION_TYPE.TXT.DATA :
            state.txt.type = STATE_TYPE.S
            state.txt.data = action.data
            break;
        case ACTION_TYPE.TXT.LOAD :
            state.txt.type = STATE_TYPE.L
            break;
        case ACTION_TYPE.TXT.ERROR :
            state.txt.type = STATE_TYPE.E
            state.txt.error = action.error
            break
    }
    return state;
}

export default reducer

