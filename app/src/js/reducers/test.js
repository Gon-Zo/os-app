import {STATE_TYPE} from "../modules/enum";

const ACTION_TYPE = {
    COUNT: {
        DATA: "count/input",
        LOAD: "count/load",
        ERROR: "count/error",
    }
}

export const onCountData = (paylaod) => ({type: ACTION_TYPE.COUNT.DATA, data: paylaod})

export const onCountLoad = () => ({type: ACTION_TYPE.COUNT.LOAD})

export const onCountError = (e) => ({type: ACTION_TYPE.COUNT.ERROR, error: e})

const initData = {
    count : {
        type : STATE_TYPE.S ,
        data : 0 ,
        error : null
    },
}

const reducer = (state = initData, action) => {
    switch (action.type) {
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
    }
    return state;
}

export default reducer

