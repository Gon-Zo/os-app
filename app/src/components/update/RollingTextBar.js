import React, {Component} from 'react';
import {Animated, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';

var textArray = [
    {text: "[공지사항] 개인정보 처리방침 개정안내1"},
    {text: "[공지사항] 개인정보 처리방침 개정안내2"},
    {text: "[공지사항] 개인정보 처리방침 개정안내3"},
    {text: "[공지사항] 개인정보 처리방침 개정안내4"},
];

export default class RollingTextBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top: 0
        }
    }

    componentDidMount() {
        // setInterval value's
        let timer = 5000;
        this._interval = setInterval(() => {
            let value;
            if (this.state.top === 150) {
                value = this.state.top = 0;
            } else {
                value = this.state.top += 50;
            }
            this.setState({value})
        }, timer );
    }

    _renderRollText(data, idx) {
        return (<Text key={idx} style={{
            fontSize: 17,
            width: '100%',
            height: 50,
            fontWeight: 'bold',
            color: '#424242',
            backgroundColor: 'transparent',
            lineHeight: 50,
            paddingLeft: 10,

        }}>
            {data.text}
        </Text>)
    }


    _renderTest() {
        return (
            <View style={{
                width: "100%",
                height: 200,
                position: 'absolute',
                backgroundColor: 'transparent',
                top: 0,
                left: 0,
                translateY: -(this.state.top),
            }}>
                {textArray.map((i, index) => this._renderRollText(i, index))}
            </View>
        )

    }

    render() {
        return (
            <View style={{
                width: "100%",
                height: 50,
                backgroundColor: "#c9c9c9",
                position: 'relative',
                overflow: "hidden"
            }}>
                {this._renderTest()}
            </View>
        );
    }
}
