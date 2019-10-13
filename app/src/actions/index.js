import * as loginAction from './login/LoginAction'
import * as signAction from './sign/SignAction'
import * as userAction from './user/UserAction'

const ActionCreators = Object.assign({},
    // login
    loginAction,
    // sign
    signAction,
    // Search
    userAction
);

export default ActionCreators
