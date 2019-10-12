import types from "../../actions/types";

const defaultState = {
    singInfo : {
        id : '' ,
        pwd : '' ,
        address : ''
    }
};

export default sign = (state = defaultState , action) =>{

    switch (action.type) {
        case types.CHECK_ID :
            return {
                singInfo : {
                    id : action.value ,
                    pwd : state.singInfo.pwd ,
                    address : state.singInfo.address
                }
            };

        case types.CHECK_PWD :
            return {
                singInfo : {
                    id : state.singInfo.pwd ,
                    pwd : action.value ,
                    address : state.singInfo.address
                }
            };

        case types.CHECK_ADDRESS :
            return {
                singInfo : {
                    id : state.singInfo.pwd ,
                    pwd : action.value ,
                    address : state.singInfo.address
                }
            };

        default :
            return state
    }

}
