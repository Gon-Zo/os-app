import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {Button} from 'react-native-ui-kitten'



export default class Test2Screen extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView>

                            <Button
                                onPress={() => {
                                    this.props.navigation.navigate('Login');
                                }}>
                                Login
                            </Button>


                        {/*<Count/>*/}


                        {/*<View>*/}
                        {/*    <Text>Test2</Text>*/}
                        {/*    <Button*/}
                        {/*        onPress={() => {*/}
                        {/*            this.props.navigation.navigate('Update');*/}
                        {/*        }}>*/}
                        {/*        Test*/}
                        {/*    </Button>*/}
                        {/*    <Count/>*/}
                        {/*</View>*/}


                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
