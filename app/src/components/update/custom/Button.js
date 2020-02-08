import React, {Component} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,TouchableOpacity} from 'react-native';
import NotoSans from "./NotoSans";

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={this.props.opacity}
                style={{
                width : '50%',
                height : 45,
                backgroundColor : "#f00",
                alignItems : 'center',
                justifyContent : 'center',
                borderRadius : 20
            }} onPress={this.props.onPress}>
                <NotoSans
                    type={'Bold'}
                    style={{
                        fontSize  : 15,
                        color: '#424242',
                    }} text={this.props.text}/>
            </TouchableOpacity>
        );
    }
}
