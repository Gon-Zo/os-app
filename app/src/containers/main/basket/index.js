import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ImageBackground, FlatList} from 'react-native';

import Header from "../../../components/update/Header";
import * as config from '../../../public/config'


var tempArray = [
    {idx: 1},
    {idx: 2},
    {idx: 3},
    {idx: 4},
    {idx: 5},
    {idx: 6},
    {idx: 7},
    {idx: 8},
    {idx: 9},
]

export default class BasketScreen extends Component {

    render() {
        config.notErrorMsg;
        return (

            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <Header type={'B'}/>

                    <ScrollView
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#c9c9c9'
                        }}
                        showsVerticalScrollIndicator={false}>

                        {/*<Card/>*/}
                    </ScrollView>
                </SafeAreaView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#f00'
    },
    numberStyle: {
        flex: 1
    },
    textContainerStyle: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center'
    },

});
