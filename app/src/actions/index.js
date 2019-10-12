import * as sumAction from './ex/SumAction'
import * as loginAction from './login/LoginAction'
import * as signAction from './sign/SignAction'


const ActionCreators = Object.assign({},
    // login
    loginAction,
    // sign
    signAction
);

export default ActionCreators
