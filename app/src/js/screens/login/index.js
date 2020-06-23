import React, {useState} from 'react'
import {
    StatusBar,
    Button,
    SafeAreaView,
    View,
    TextInput,
    StyleSheet,
} from 'react-native'
import {BackButton} from "../common/button";
import {onLogin} from "../../actions/statics";
import {useDispatch} from "react-redux";
import {Text} from "react-native-paper";
import {AppTextInput} from "../common/textInput";

export default ({navigation}) => {

    const dispatch = useDispatch()

    React.useLayoutEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
                <BackButton navigation={navigation}/>
            )
        })

    }, [navigation])

    let [email, setEmail] = useState()

    let [password, setPassword] = useState()

    return (
        <>
            <StatusBar></StatusBar>
            <SafeAreaView style={[{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor : '#fff'
            }]}>

                <AppTextInput
                    label={"Email"}
                    color={"#52af0a"}
                    item={email}
                    setItem={setEmail}
                    isPassword={false}
                />

                <AppTextInput
                    label={"Passowrd"}
                    color={"#52af0a"}
                    item={password}
                    setItem={setPassword}
                    isPassword={true}
                />

                <View style={[]}>
                    <Button title={"Login"}
                            onPress={() => {
                                const payload = {email: email, password: password}
                                onLogin(dispatch, navigation, payload)
                            }}></Button>

                    <Button title={"Sign Up"} onPress={() => navigation.navigate("SignUp")}/>
                </View>

            </SafeAreaView>
        </>
    )
}
