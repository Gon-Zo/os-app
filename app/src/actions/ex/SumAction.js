import types from "../types";

export function firstNum(num) {
    return {
        type: types.FIRST_NUM,
        payload: num
    }
}

export function secondNum(num) {
    return {
        type: types.SECOND_NUM,
        payload: num
    }
}
