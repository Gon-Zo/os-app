import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native'
import {Layout, Text, Button, Input} from 'react-native-ui-kitten'
import {createDrawerNavigator} from "react-navigation-drawer";

class UpdateScreen extends Component {

    render() {
        return (
            <Layout>
                <View style={{
                    backgroundColor: '#e5e5e5',
                    width: '100%',
                    height: '100%',
                }}>
                <Text>Update Form</Text>
                </View>
            </Layout>
        );
    }
}

const FormNav = createDrawerNavigator({
    Update: {screen: UpdateScreen},
});

export default FormNav
