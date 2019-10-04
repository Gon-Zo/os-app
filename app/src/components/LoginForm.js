import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {Input, Button} from "react-native-ui-kitten";
import TextButton from "./TextButton";


export default class LoginForm extends Component {
    render() {
        return (
            <View>

                <View>
                    <Input/>
                </View>

                <View>
                    <Input/>
                </View>

                <View>
                    <Button>Login</Button>
                </View>

                <TextButton text={"this is test button "}/>
            </View>
            //loginFormWrap
        );
    }
}
