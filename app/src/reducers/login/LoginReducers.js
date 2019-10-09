import types from "../../actions/types";

const defaultState = {
    loginInfo: {
        id: '',
        pwd: '',
        state: false
    },
};

export default login = (state = defaultState, action) => {
    switch (action.type) {

        case types.CHECK_ID :
            return {
                loginInfo: {
                    id: action.value,
                    pwd: state.loginInfo.pwd,
                    state: state.loginInfo.state
                }
            };

        case types.CHECK_PWD :
            return {
                loginInfo: {
                    id: state.loginInfo.id,
                    pwd: action.value,
                    state: state.loginInfo.state
                }
            };

        case types.USER_LOGIN :

            return {
                loginInfo: {
                    state: action.state,
                    id: state.loginInfo.id,
                    pwd: state.loginInfo.pwd
                }
            };

        default :
            return state

    }
};
