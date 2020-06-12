import React , {useState} from 'react'
import {StatusBar,
    Button,
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

export default () => {

    let [id, setId] = useState()

    let [password, setPassword] = useState()

    return (
        <>
            <StatusBar></StatusBar>
            <SafeAreaView style={[styles.wrap , {}]}>
                <View style={styles.wrap}>
                    <TextInput onChangeText={text => setId(text)} value={id} style={{backgroundColor: '#00f' , height : 40}}/>
                </View>
                <View style={[styles.wrap , {} ]}>
                    <TextInput onChangeText={text => setPassword(text)} value={password} style={{backgroundColor: '#f0f' , height : 40}} />
                </View>
                <View style={[styles.wrap, {}]}>
                    <Button title={"Login"} onPress={()=>{
                        alert(`id >> ${id} password ${password}`)
                    }}/>
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
