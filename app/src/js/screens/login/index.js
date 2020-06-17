import React , {useState} from 'react'
import {
    StatusBar,
    Button,
    SafeAreaView,
    View,
    TextInput,
    StyleSheet ,
} from 'react-native'

import axios from "axios";
import {BackButton} from "../common/button";

export default ({navigation}) => {

    React.useLayoutEffect(()=>{

        navigation.setOptions({
            headerLeft : () => (
                <BackButton navigation={navigation}/>
            )
        })

    },[navigation])

    let [email, setEmail] = useState()

    let [password, setPassword] = useState()

    return (
        <>
            <StatusBar></StatusBar>
            <SafeAreaView style={[styles.wrap, {}]}>
                <View style={styles.wrap}>
                    <TextInput onChangeText={text => setEmail(text)} value={email}
                               style={{backgroundColor: '#00f', height: 40}}/>
                </View> <View style={[styles.wrap, {}]}>
                    <TextInput onChangeText={text => setPassword(text)} value={password}
                               style={{backgroundColor: '#f0f', height: 40}}/>
                </View>
                <View style={[styles.wrap, {}]}>

                    <Button title={"Login"}
                            onPress={() =>{
                                const payload = {email: email, password: password}
                                axios.post(`login`, payload)
                                    .then((res) => {
                                        const token = res.data.token
                                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                                        navigation.goBack()
                                    })
                                    .catch(err =>{
                                        alert("Login Fail")
                                    })

                            }}></Button>

                    <Button title={"Sign Up"} onPress={() => navigation.navigate("SignUp")}/>

                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    box : {
        flex : 1 ,
    }
})
