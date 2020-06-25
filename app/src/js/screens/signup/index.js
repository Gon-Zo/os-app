import React, {useState} from 'react'
import {View, Button ,  SafeAreaView, ScrollView , TextInput} from 'react-native'
import {BackButton} from "../common/button";
import {Text} from "react-native-paper";
import _set from "@babel/runtime/helpers/esm/set";
import {LineAndInputText} from "../common/textInput";

export default ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <BackButton navigation={navigation}/>
            )
        })
    }, [navigation])

    return (
        <>
            <SafeAreaView>
                <ScrollView style={{}}>
                    <SignUpContent/>
                    <SsoSignUpContent/>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

function SignUpContent(props) {

    let [email ,setEmail] = useState('')

    let [password, setPassword] = useState('')

    return(
        <>
            <LineAndInputText title={'Email'}
                              item={email}
                              onItem={setEmail}
                              color={"#f00"}
                              type={"text"}/>
            <LineAndInputText title={'Password'}
                              item={password}
                              onItem={setPassword}
                              color={"#f00"}
                              type={"password"}/>
        </>
    )
}


function SsoSignUpContent(props) {
    return(
        <View>
           <Button title={"Google"}/>
           <Button title={"FaceBook"}/>
           <Button title={"Kakao"}/>
        </View>
    )
}

