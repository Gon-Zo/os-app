import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text, StatusBar, TextInput} from 'react-native';
import {View, Animated} from 'react-native';
import {_fadeIn, _fadeOut} from "../../../public/styles/Anim";

export default class InputText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayYn: false,
            value: new Animated.Value(0),
            text: '',
        }
    }

    _getStyle() {
        return {
            opacity: this.state.value,
        }
    }

    _DisplayFunc(val) {

        if(val === ''){
            _fadeOut(this.state.value)
        }else{
            _fadeIn(this.state.value)
        }

        let temp = val !== '';
        this.state.displayYn = temp;
        this.setState({displayYn: temp})

    }

    _TextStyle() {
        return ({
            color: '#424242',
            fontSize: 16,
        })
    }

    render() {
        return (
            <View style={{
                width: this.props.width,
                height: 100,
                padding: 10,
            }}>
                <View style={{
                    width: '100%',
                    height: 20,
                }}>
                    <Animated.View style={this._getStyle()}>
                        <Text style={this._TextStyle()}>{this.props.placeholder}</Text>
                    </Animated.View>
                </View>

                <View style={{
                    padding: 5,
                    borderBottomWidth: 2,
                    borderBottomColor: '#c9c9c9',
                }}>

                    <TextInput
                        placeholder={this.props.placeholder}
                        keyboardType={this.props.keyType}
                        style={{
                            width: '100%',
                            height: 45,
                            justifyContent: 'center',
                            color: "#000",
                            fontSize: 17,
                        }}
                        // Focus in event
                        onFocus={() => {

                        }}
                        // Focus out event
                        onBlur={() => {
                        }}
                        onChangeText={(text) => this._DisplayFunc(text)}/>

                </View>
            </View>

        );
    }
}
