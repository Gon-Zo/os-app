import {ACTION_TYPE, initData} from "../store/statics";
import {STATE_TYPE} from "../modules/enum";

export const onLoginData = (payload) => ({type : ACTION_TYPE.LOGIN.DATA , data : payload})

export const onLoginError = (e) => ({type : ACTION_TYPE.LOGIN.ERROR , error : e})

export const onLoginLoad = () =>({type : ACTION_TYPE.LOGIN.LOAD})

const reducer = (state = initData, action) => {
    switch (action.type) {
        case ACTION_TYPE.LOGIN.LOAD:
            state.isLogin.type = STATE_TYPE.L
            state.isLogin.data = action.data
            break;
        case ACTION_TYPE.LOGIN.DATA:
            state.isLogin.type = STATE_TYPE.S
            break;
        case ACTION_TYPE.LOGIN.ERROR:
            state.isLogin.type = STATE_TYPE.E
            state.isLogin.error = action.error
            break;
    }
    return state;
}
