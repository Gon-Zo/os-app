import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Input, Layout} from "react-native-ui-kitten";


export const FacebookIcon = (style) => (
    <Icon name='facebook' {...style} />
);

export const LoginButton = () => (
    <Button style={styles.btnStyle} icon={FacebookIcon}></Button>
);

export default class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    onInputValueChange = (inputValue: string) => {
        this.setState({inputValue});
    };

    render() {
        return (
            <View style={styles.wrap}>
                <Input
                    status='info'
                    value={this.state.inputValue}
                    onChangeText={this.onInputValueChange}
                />
                <LoginButton/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        height: '50%',
        position: "relative",
        backgroundColor: '#c9c9c9',
    },
    test: {
        position: "absolute",
        top: 0,
        left: 0
    },
    btnStyle: {
        width: 20,
        height: 20,
        position: "absolute",
        top: 0,
        right: 0,
        borderRadius: 20,
    }
});

