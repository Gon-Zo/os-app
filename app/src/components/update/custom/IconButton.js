import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";

export default class IconButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{
                    width: 60,
                    height: 60,
                    marginLeft: 5,
                    marginRight: 5,
                    alignItems : 'center',
                    justifyContent : 'center',
                    backgroundColor : "#f00"
                }}
                onPress={()=>{
                    alert("test success")
                }}
            >
                <FontAwesomeIcon icon={icon.faCog} size={35} color={'#424242'}/>
            </TouchableOpacity>
        );
    }
}
