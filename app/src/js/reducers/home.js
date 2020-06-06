import {STATE_TYPE} from "../modules/enum";

const INPUTACTION = "home/input"

const OUTPUTACTION = "home/output"

const LOADINGACTION = "home/load"

const ERRORACTION = "home/error"

export const onInput = () => ({type: INPUTACTION })

export const onOutput = () => ({type: OUTPUTACTION})

export const onLoad = () => ({type: LOADINGACTION})

export const onError = (e) => ({type: ERRORACTION , error : e })

const initData = {
    // loading , success  , error
    count : {
        type : STATE_TYPE.S ,
        data : 0 ,
        error : null
    },
}

const reducer = (state = initData, action) => {
    switch (action.type) {
        case INPUTACTION:
            state.count.type = STATE_TYPE.S
            state.count.data += 1
            break;
        case OUTPUTACTION:
            state.count.type = STATE_TYPE.S
            state.count.data -= 1
            break;
        case LOADINGACTION:
            state.count.type = STATE_TYPE.L
            break;
        case ERRORACTION :
            state.count.type = STATE_TYPE.E
            state.count.error = action.error
            break;
    }
    return state;
}

export default reducer

