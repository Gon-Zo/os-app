import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

export default class ProfileScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Profile',
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
                            <Text>ProfileScreen</Text>
                            <Button title={"Go to Home"} onPress={() => this.props.navigation.navigate("Home")}/>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
