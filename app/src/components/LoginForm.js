import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {Input, Button} from "react-native-ui-kitten";
import ActionCreators from "../actions";
import {connect} from 'react-redux'
import axios from 'axios'


class LoginForm extends Component {

    //# 생성자 생성
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <View>

                <View>
                    <TextInput
                        style={styles.input}
                        keyboardType={'default'}
                        placeholder={'ID'}
                        onChangeText={(text) => {

                            this.setState({text})

                            if (text !== '') {
                                this.props.checkId(text)
                            }

                        }}
                    />
                </View>
                {/*ID Input box end*/}
                <View>
                    <TextInput
                        style={styles.input}
                        keyboardType={'default'}
                        placeholder={'Password'}
                        onChangeText={(text) => {

                            this.setState({text})

                            if (text !== '') {
                                this.props.checkPwd(text)
                            }

                        }}
                    />
                </View>
                {/*password Input box end*/}
                <View>
                    <Button onPress={() => {
                        this.props.userLogin(this.props);
                    }}>Login</Button>
                </View>
                {/* button box end*/}

            </View>
            //loginFormWrap
        );
    }
}

// this.props setting
function mapStateToProps(state) {
    return {
        id: state.login.loginInfo.id,
        pwd: state.login.loginInfo.pwd,
        state: state.login.loginInfo.state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkId: (text) => {
            dispatch(ActionCreators.checkId(text));
        },
        checkPwd: (text) => {
            dispatch(ActionCreators.checkPwd(text));
        },
        userLogin: (obj) => {
            if (obj.id !== '' && obj.pwd !== '') {
                dispatch(ActionCreators.userLogin(true));
                obj.navigation.navigate('Main');
            }
        }
    }
}


const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#f00',
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
