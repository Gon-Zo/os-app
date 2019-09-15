import React, {Component} from 'react';
import {Layout, Text} from 'react-native-ui-kitten'

export default class LoadScreen extends Component {
    render() {
        return (
            <Layout style={{
                flex: 1,
                backgroundColor: '#f00'
            }}>
                <Text
                    appearance='alternative'
                    category='H1'
                    status='info'>
                    Loading ..
                </Text>
            </Layout>
        );
    }
}
