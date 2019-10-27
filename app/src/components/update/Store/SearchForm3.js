import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import * as screen from "../../../public/styles/comm";


class SearchButton extends Component {

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: "100%",
                    backgroundColor: '#c9c9c9'
                }}
                onPress={this.props.onPress}>
                <FontAwesomeIcon icon={icon.faSearch} size={20} color={'#424242'}/>
            </TouchableOpacity>
        )
    }
}

export default class SearchForm3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            left: 200,
            inputYn: false
        }
    }

    _moveLeft() {
        let flag = !this.state.inputYn;

        let moveValue = flag ?
            this.state.left -= 200 :
            this.state.left += 200;
        this.setState({left: moveValue, inputYn: flag})
    }

    render() {
        return (
            <View style={{
                width: 250,
                height: '100%',
                backgroundColor: '#00f',
                position: "absolute",
                top: 0,
                right: 0,
                flexDirection: 'row',
            }}>
                <View style={{
                    width: '80%',
                    height: '100%',
                    backgroundColor: '#f0f',
                    translateX: this.state.left
                }}>
                    <TextInput style={{
                        width : '100%',
                        height : '100%',
                        backgroundColor : '#ff0',
                        fontSize : 17,
                    }}/>
                </View>

                <View style={{
                    width: "20%",
                    height: "100%",
                    backgroundColor: "#f0f"
                }}>
                    <SearchButton onPress={() => {this._moveLeft()}}/>
                </View>
            {/* */}
            </View>
            // wrap end
        );
    }
}
