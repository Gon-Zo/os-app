import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,} from 'react-native';

export default class TextButton extends Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={{
                    width: 200,
                    height: 50,
                    backgroundColor: 'transparent',
                    margin: 5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.props.onPress}>
                <Text style={{
                    fontSize: 17 ,
                    fontWeight : 'bold'
                }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}
