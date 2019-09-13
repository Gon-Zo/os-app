import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

export default class Banner extends Component {
    render() {
        return (
            <View style={styles.wrap}></View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        width : "100%",
        height : "30%" ,
        backgroundColor: '#00f'
    }

});
