import types from "../../actions/types";

const defaultState = {
    values: {
        search: ''
    }
};


export default user = (state = defaultState, action) => {

    switch (action.type) {
        // search event
        case types.SEARCH_STATE :
            return {
                search: action.value
            };

        default :
            return state

    }
}
