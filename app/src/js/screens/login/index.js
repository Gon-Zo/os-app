import React , {useState} from 'react'
import {StatusBar,
    Button,
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

import {onLogin} from "../../actions/setting";

export default ({navigation}) => {

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
                    <Button title={"Back"} onPress={() => navigation.goBack()}/>
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
