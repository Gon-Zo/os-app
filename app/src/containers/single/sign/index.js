import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button
} from 'react-native';
import SignForm from "../../../components/SingForm";
import {createDrawerNavigator} from "react-navigation-drawer";

class SignScreen extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>


                        <SignForm/>

                        {/*<View>*/}
                        {/*    <Button title={'Sign up'} onPress={()=>{*/}
                        {/*        alert("sign up success")*/}
                        {/*    }} />*/}
                        {/**/}
                        {/*</View>*/}


                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const SignNav = createDrawerNavigator({
    Sign: {screen: SignScreen}
});

export default SignNav
