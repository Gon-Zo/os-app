import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

export default class SettingScreen extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView>
                        <View>
                            <Text>SettingScreen</Text>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
