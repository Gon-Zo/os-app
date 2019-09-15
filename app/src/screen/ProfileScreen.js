import React, {Component} from 'react';
import {Layout, Text, Button} from 'react-native-ui-kitten'

export default class ProfileScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Profile',
    };

    render() {
        return (
            <Layout>
                <Text>ProfileScreen</Text>
                <Button onPress={() => this.props.navigation.navigate("Load")}>Button click</Button>
            </Layout>
        );
    }
}
