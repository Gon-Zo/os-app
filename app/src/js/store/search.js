import {STATE_TYPE} from "../modules/enum";

export const ACTION_TYPE = {
    ITEMS : {
        DATA: "items/data",
        LOAD: "items/load",
        ERROR: "items/error"
    }
}

export const initData = {
    items: {
        type: STATE_TYPE.L,
        data: [],
        error: null
    }
}
