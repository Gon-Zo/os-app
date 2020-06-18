import {STATE_TYPE} from "../modules/enum";

export const ACTION_TYPE = {
    LOGIN: {
        DATA: 'statics/data',
        LOAD: 'statics/load',
        ERROR: 'statics/erro',
    }
}

export const initData = {
    isLogin: {
        type: STATE_TYPE.L,
        data: false,
        error: null
    }
}
