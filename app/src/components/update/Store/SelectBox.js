import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Picker,} from 'react-native';

export default class SelectBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickerValue: ''
        }
    }

    render() {
        return (
            <View style={{
                width: '100%',
                height: 30,
                position: 'relative'
            }}>
                <Picker
                    style={{
                        width: 150,
                        height: '100%',
                        position: 'absolute',
                        right: 0
                    }}
                    selectedValue={(this.state && this.state.pickerValue) || 'New'}
                    onValueChange={(value) => {
                        console.log(value + " >>>>>>>>>>")
                        this.setState({pickerValue: value});
                    }} itemStyle={{color: 'white'}}>
                    <Picker.Item label={'최신순'} value={'New'}/>
                    <Picker.Item label={'인기순'} value={'Best'}/>
                </Picker>
            </View>
        );
    }
}
