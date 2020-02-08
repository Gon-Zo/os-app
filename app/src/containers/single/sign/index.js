import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
} from 'react-native';
import {Layout} from "react-native-ui-kitten";
import SignForm from "../../../components/SingForm";
import {createDrawerNavigator} from "react-navigation-drawer";
import NotoSans from "../../../components/update/custom/NotoSans";
import Button from "../../../components/update/custom/Button";
import BoxButton from "../../../components/update/custom/BoxButton";
import ProfileCard from "../../../components/ProfileCard";

class SignScreen extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <Layout>
                            <View style={{
                                alignItems: 'center',
                            }}>
                                <NotoSans
                                    type={'Bold'}
                                    style={{
                                        fontSize: 40,
                                        color: '#424242',
                                    }} text={'Sign Up'}/>

                                {/*<Text style={{*/}
                                {/*    fontSize : 30,*/}
                                {/*    fontFamily : 'NotoSansBlack'*/}
                                {/*}}>*/}
                                {/*    Sign Up*/}
                                {/*</Text>*/}
                            </View>

                            <SignForm/>

                            <View style={{
                                alignItems: 'center',
                            }}>

                                <Button
                                    opacity={1}
                                    text={'Button'} onPress={() => {
                                    alert("test success")
                                }}/>

                            </View>




                            {/*<View style={{*/}
                            {/*    backgroundColor: '#FF0',*/}
                            {/*    padding: 30,*/}
                            {/*    alignItems : 'center'*/}
                            {/*}}>*/}
                            {/*    <BoxButton/>*/}
                            {/*</View>*/}
                            {/*<View>*/}
                            {/*    <Button title={'Sign up'} onPress={() => {*/}
                            {/*        alert("sign up success")*/}
                            {/*    }}/>*/}
                            {/*</View>*/}


                        </Layout>
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
