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

export default class Test2Screen extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Layout>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps='true'>

                    </ScrollView>
                </SafeAreaView>
            </Layout>
        );
    }
}
