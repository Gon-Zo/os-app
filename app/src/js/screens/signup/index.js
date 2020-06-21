import React from 'react'
import {View, Button ,  SafeAreaView, ScrollView , TextInput} from 'react-native'
import {BackButton} from "../common/button";

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
                <ScrollView>
                    <SignUpContent/>
                    <SsoSignUpContent/>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

function SignUpContent(props) {
    return(
        <>
            <View>
                <TextInput/>
            </View>
            <View>
                <TextInput/>
            </View>
            <View>
                <TextInput/>
            </View>
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

