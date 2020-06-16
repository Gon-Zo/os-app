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

import {onLogin} from "../../actions/setting";
import Ionicons from "react-native-vector-icons/Ionicons";
import {APP_OS} from "../../public/comm";

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
                            onPress={() =>
                                onLogin(navigation, {email: email, password: password})}/>
                    <Button title={"Sign Up"}/>
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
