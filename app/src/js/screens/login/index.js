import React, {useState} from 'react'
import {
    StatusBar,
    Button,
    SafeAreaView,
    View,
} from 'react-native'
import {BackButton} from "../common/button";
import {onLogin} from "../../actions/statics";
import {useDispatch} from "react-redux";
import {AppTextInput} from "../common/textInput";
import {GET_COLOR} from "../../public/colors";

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
                backgroundColor : GET_COLOR().BACKGROUND_COLOR
            }]}>
                <AppTextInput
                    label={"Email"}
                    color={GET_COLOR().PRIMARY}
                    item={email}
                    setItem={setEmail}
                    type={"text"}
                />
                <AppTextInput
                    label={"Password"}
                    color={GET_COLOR().PRIMARY}
                    item={password}
                    setItem={setPassword}
                    type={"password"}
                />
                <View style={[]}>
                    <Button title={"Login"} onPress={() => {
                                const payload = {email: email, password: password}
                                onLogin(dispatch, navigation, payload)
                            }}></Button>

                    <Button title={"Sign Up"} onPress={() => navigation.navigate("SignUp")}/>
                </View>

            </SafeAreaView>
        </>
    )
}
