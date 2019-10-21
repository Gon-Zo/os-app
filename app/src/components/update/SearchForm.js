import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import {Layout} from "react-native-ui-kitten";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import * as icon from '@fortawesome/free-solid-svg-icons'
import * as screen from '../../public/styles/comm'
class SearchButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{
                    alignItems : 'center'
                }}
                onPress={()=>{
                    alert("test success")
                }}
            >
                <FontAwesomeIcon icon={icon.faSearch} size={20} color={'#424242'}/>
            </TouchableOpacity>
        )
    }
}

export default class SearchForm extends Component {
    render() {
        return (
            <Layout style={{
                width: screen.widthPercentageToDP('100%'),
                height: 50,
                backgroundColor: '#f00',
                flexDirection: 'row'
            }}>
                <View style={{
                    width: screen.widthPercentageToDP('80%'),
                    height: 40,
                }}>
                    <TextInput style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#c9c9c9'
                    }}/>
                </View>
                <View style={{
                    width: screen.widthPercentageToDP('20%'),
                    height : 40,
                    backgroundColor : '#ff0'
                }}>
                    <SearchButton/>
                </View>

            </Layout>
        );
    }
}
