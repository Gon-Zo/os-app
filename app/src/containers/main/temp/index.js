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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import * as icon from "@fortawesome/free-solid-svg-icons";

export default class Test2Screen extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Layout>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#c9c9c9'
                        }}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps='true'>


                    </ScrollView>
                </SafeAreaView>
            </Layout>
        );
    }
}
