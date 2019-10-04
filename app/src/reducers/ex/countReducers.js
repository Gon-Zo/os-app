import types from "../../actions/types";

const defaultState = {
    result: 0,
    countInfo: {
        first: 0,
        second: 0
    }
};

export default count = (state = defaultState, action) => {


    switch (action.type) {
        case  types.FIRST_NUM :
            return {
                result: action.payload + state.countInfo.second,
                countInfo: {
                    first: action.payload,
                    second: state.countInfo.second
                }
            };
        case  types.SECOND_NUM :
            return {
                result: action.payload + state.countInfo.first,
                countInfo: {
                    first: state.countInfo.first,
                    second: action.payload
                }
            };
        default :
            return state
    }
};
