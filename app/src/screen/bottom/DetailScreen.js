import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Button,
} from 'react-native';

export default class DetailScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Detail',
        headerLeft: (
            <Button title={"left"} onPress={() => alert("test success")}/>
        ),
        headerRight: (
            <Button title={"right"} onPress={() => alert("test success")}/>
        )
    };

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView>
                        <View>
                            <Text>DetailScreen</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
