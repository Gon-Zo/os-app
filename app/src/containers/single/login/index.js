import React, {Component} from 'react';
import {Layout} from "react-native-ui-kitten";
import {createDrawerNavigator} from "react-navigation-drawer";
import LoginForm from "../../../components/LoginForm";
import TextButton from "../../../components/TextButton";

class LoginScreen extends Component {
    render() {
        return (
            <Layout>
                <LoginForm navigation={this.props.navigation}/>
                <TextButton navigation={this.props.navigation} text={'Test text button'}/>
            </Layout>
        );
    }
}

const LoginNav = createDrawerNavigator({
    Login: LoginScreen
});

export default LoginNav
