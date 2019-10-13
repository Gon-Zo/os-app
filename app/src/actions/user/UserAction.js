import types from "../types";

// Search Box event
export function searchFn(text) {
    return {
        type : types.SEARCH_STATE ,
        value : text
    }
}
