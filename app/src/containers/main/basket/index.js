import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as screen from '../../../public/styles/comm'
import Header from "../../../components/update/Header";
import * as config from '../../../public/styles/config'
import Card from "../../../components/update/test/card";

export default class BasketScreen extends Component {
    render() {
        config.notErrorMsg;
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <Header type={'B'}/>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                    </ScrollView>

                    <Card/>



                </SafeAreaView>
            </View>
        );
    }
}
