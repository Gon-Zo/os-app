import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import * as icon from '@fortawesome/free-solid-svg-icons'


export default class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayYn: false
        }
    }

    // display function to checking
    _renderDisplay() {
        return this.state.displayYn ? "none" : "block"
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={{
                    width: 150,
                    height: 200,
                    backgroundColor: '#f00'
                }}>
                <ImageBackground source={require("../../../public/img/test11.jpg")} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'stretch',
                    // position: 'relative'
                }}>
                    <View style={{
                        width: '100%',
                        height: 40,
                        // backgroundColor : '#f00',
                        backgroundColor: 'transparent',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>

                        <FontAwesomeIcon icon={icon.faBan} size={25} color={'#fff'}
                                         style={{marginRight: 5, display: "none"}} onPress={() => {
                            alert("Null")
                        }}/>

                    </View>

                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

