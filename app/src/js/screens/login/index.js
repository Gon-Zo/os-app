import React , {useState} from 'react'
import {
    StatusBar,
    Button,
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet, TouchableOpacity
} from 'react-native'

import Ionicons from "react-native-vector-icons/Ionicons";
import {APP_OS} from "../../public/comm";
import axios from "axios";

export default ({navigation}) => {


    React.useLayoutEffect(()=>{

        navigation.setOptions({
            headerLeft : () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{paddingLeft: 10}}>
                    <Ionicons name={`${APP_OS}-arrow-back`} color="#424242" size={20}/>
                </TouchableOpacity>
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
                </View>
                <View style={[styles.wrap, {}]}>
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
                                    .catch(err => console.log(err))
                            }}/>

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
