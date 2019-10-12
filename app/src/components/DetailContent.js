import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {Layout} from "react-native-ui-kitten";

export default class DetailContent extends Component {
    render() {
        return (
            <Layout style={styles.wrap}>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        height: 700,
        backgroundColor: '#f0f',
        marginTop: 10,
        marginBottom: 10
    }
});
