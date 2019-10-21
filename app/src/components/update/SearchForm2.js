import React, {Component} from 'react';
import {
    SafeAreaView, StyleSheet, ScrollView, Text, StatusBar, TouchableOpacity,
    TextInput, Button, View,
} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import *  as screen from '../../public/styles/comm'

class SearchButton extends Component {

    static defaultState = {
        onPress: null
    };

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#c9c9c9'
                }}
                onPress={this.props.onPress}>
                <FontAwesomeIcon icon={icon.faSearch} size={20} color={'#424242'}/>
            </TouchableOpacity>
        )
    }
}


export default class SearchForm2 extends Component {

    constructor(props) {
        super(props);

        // todo : "Value Change"

        this.state = {
            test1: screen.widthPercentageToDP("90%"),
            inputYn: false
        }
    }

    _moveLeft() {
        let flag = !this.state.inputYn;

        let moveValue = flag ?
            this.state.test1 -= screen.widthPercentageToDP("90%") :
            this.state.test1 += screen.widthPercentageToDP("90%");
        this.setState({test1: moveValue, inputYn: flag})
    }

    render() {
        return (
            <View style={{
                width: screen.widthPercentageToDP("100%"),
                height: 50,
                backgroundColor: '#f00',
                position: 'relative',
            }}>

                <View style={{
                    width: screen.widthPercentageToDP("90%"),
                    height: 50,
                    backgroundColor: '#00f',
                    borderColor: '#000',
                    borderBottom: 1,
                    position: 'absolute',
                    left: this.state.test1,
                }}>
                    <TextInput style={{
                        backgroundColor: "#c9c9c9",
                        width: '100%',
                        height: 40
                    }}/>
                </View>
                <View style={{
                    width: screen.widthPercentageToDP("10%"),
                    height: 50,
                    backgroundColor: '#f0f',
                    position: 'absolute',
                    right: 0,
                    zIndex: 100
                }}>
                    <SearchButton onPress={() => {
                        this._moveLeft()
                    }}/>

                    {/*<Button title={"c"} style={{width: '100%', height: '100%'}}*/}
                    {/*        onPress={() => {*/}
                    {/*            this._moveLeft()*/}
                    {/*        }}/>*/}

                </View>

            </View>
        );
    }
}
