import types from "../types";

// id to checking
export function checkSignId(text) {
    return {
        type: types.CHECK_ID,
        value: text
    }
}

// password to checking
export function checkSignPwd(text) {
    return {
        type: types.CHECK_PWD,
        value: text
    }
};

// check Address
export function checkSignAddress(text) {
    return {
        type: types.CHECK_ADDRESS,
        value: text
    }
}
