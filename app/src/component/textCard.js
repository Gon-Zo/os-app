import React, {Component} from 'react';
import {Layout, Text} from "react-native-ui-kitten";
import {StyleSheet} from 'react-native'

export default class TextCard extends Component {
    render() {
        return (
            <Layout style={styles.wrap}><Text style={styles.content}>{this.props.title}</Text></Layout>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        height: 40,
        backgroundColor: '#f00',
        marginTop: 10,
    },
    content: {
        textAlign: 'justify',
        lineHeight: 40,
        paddingLeft: 10,
        fontSize : 20
    }

})
