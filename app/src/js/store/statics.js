import {STATE_TYPE} from "../modules/enum";

export const ACTION_TYPE = {
    LOGIN: {
        DATA: 'statics/data',
        LOAD: 'statics/load',
        ERROR: 'statics/error',
    },

    THEME: {
        DATA: 'theme/data',
        LOAD: 'theme/load',
        ERROR: 'theme/error',
    }

}

export const initData = {
    isLogin: {
        type: STATE_TYPE.L,
        data: false,
        error: null
    },
    isTheme : {
        type : STATE_TYPE.L ,
        data : false ,
        error : null
    }
}
