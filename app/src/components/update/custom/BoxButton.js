import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import NotoSans from "./NotoSans";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import * as icon from '@fortawesome/free-solid-svg-icons'

export default class BoxButton extends Component {
    render() {
        return (
            <TouchableOpacity style={{
                backgroundColor: '#c9c9c9',
                width: '50%',
                height: 45,
                flexDirection: 'row',
            }}
            >
                <View style={{
                    width: '80%',
                    backgroundColor: '#f0f',
                }}>
                    <NotoSans
                        type={'Bold'}
                        style={{
                            width: '100%',
                            fontSize: 15,
                            color: '#424242',
                            textAlign: 'center'
                        }} text={'test'}/>
                </View>

                <View style={{
                    width: "20%",
                    backgroundColor: "#00f",
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                }}>
                    <FontAwesomeIcon icon={icon.faAngleRight} size={20} color={'#f00'}/>
                </View>
            </TouchableOpacity>
        );
    }
}
