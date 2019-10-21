import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput} from 'react-native';

export default class SearchForm3 extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <View style={{
                    width: '100%',
                    height: 40,
                    backgroundColor: '#f0f',
                    borderBottomWidth : 10,
                    borderBottomColor: '#ff0'
                }}>
                    <View style={{
                        width:'90%',
                        height: 40,
                        backgroundColor: '#f0f'
                    }}>
                        {/*<TextInput/>*/}
                    </View>
                    {/*input Text*/}
                    <View style={{
                        width:'10%',
                        height: 40,
                        backgroundColor: '#00f'
                    }}>

                    </View>
                    {/*Button end*/}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        width: 200,
        height: '100%',
        backgroundColor: '#f00'
    }
});
