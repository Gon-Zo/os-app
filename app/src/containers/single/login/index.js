import React, {Component} from 'react';
import {Layout} from "react-native-ui-kitten";
import {createDrawerNavigator} from "react-navigation-drawer";
import LoginForm from "../../../components/LoginForm";

class LoginScreen extends Component {
    render() {
        return (
            <Layout>
                <LoginForm navigation={this.props.navigation}/>
            </Layout>
        );
    }
}

const LoginNav = createDrawerNavigator({
    Login: LoginScreen
});

export default LoginNav
