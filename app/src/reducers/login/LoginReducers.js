import types from "../../actions/types";

const defaultState = {
    id: '',
    pwd: ''
};

export default login = (state = defaultState, action) => {
    switch (action.type) {

        case types.CHECK_ID :
            return {
                id: action.value,
                pwd: state.pwd
            };

        case types.CHECK_PWD :
            return {
                id: state.id,
                pwd: action.value
            };

        default :
            return state

    }
};
