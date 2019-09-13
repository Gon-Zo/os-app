import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

export default class AuthScreen extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView>
                        <View>
                            <Text>AuthScreen</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
