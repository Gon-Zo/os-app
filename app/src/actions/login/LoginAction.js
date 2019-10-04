import types from "../types";

// id to checking
export function checkId(text) {
    return {
        type: types.CHECK_ID,
        value: text
    }
}

// password to checking
export function checkPwd(text) {
    return {
        type: types.CHECK_PWD,
        value: text
    }
}
