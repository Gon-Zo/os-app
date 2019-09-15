import React, {Component} from 'react';
import {Layout, Button, Text} from 'react-native-ui-kitten'

export default class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Home',
        headerLeft: (
            <Button onPress={() => alert("test success")}>Left</Button>
        ),
        headerRight: (
            <Button onPress={() => alert("test success")}>Right</Button>
        )
    };

    render() {
        return (
            <Layout>
                <Text>HomScreen</Text>
                <Button onPress={() => this.props.navigation.navigate('Pop')}>Button 1</Button>
            </Layout>
        );
    }
}
