import {STATE_TYPE} from "../modules/enum";

export const ACTION_TYPE = {
    COUNT: {
        DATA: "count/input",
        LOAD: "count/load",
        ERROR: "count/error",
    } ,
    TXT : {
        DATA  : "txt/data" ,
        LOAD : "txt/load" ,
        ERROR : "txt/error"
    }
}

export const initData = {
    count : {
        type : STATE_TYPE.S ,
        data : 0 ,
        error : null
    },
    txt : {
        type : STATE_TYPE.S ,
        data : '' ,
        error : null
    }
}

