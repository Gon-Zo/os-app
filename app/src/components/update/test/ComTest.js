import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';

var textArray = [
    {text: "[TEST] setstersteaetes1"},
    {text: "[TEST] setstersteaetes2"},
    {text: "[TEST] setstersteaetes3"},
    {text: "[TEST] setstersteaetes4"},
]
var i = 0
export default class CommTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            top: 0
        }
    }

    componentDidMount() {
        this._interval = setInterval(() => {

            console.log("test success " + i);
            i++

            let temp =  this.state.top ;



            let value = this.state.top += 40;

            

            this.setState({value})



            // if(this.state.top === 200){
            //     temp = -40
            //
            // }


            //


        }, 1000);
    }

    _renderRollText(data, idx) {
        return (
            <Text key={idx} style={{fontSize: 25, width: '100%', height: 50, fontWeight: 'bold', color: '#fff'}}>
                {data.text}
            </Text>
        )
    }


    _renderTest() {
        return (
            <View style={{
                width: "100%",
                height: 200,
                position: 'absolute',
                backgroundColor: '#f00',
                top: -(this.state.top),
                left: 0,
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
