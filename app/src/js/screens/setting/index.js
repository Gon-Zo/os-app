import React from 'react'
import {StatusBar , SafeAreaView , Text , View , Button , StyleSheet} from 'react-native'

export default ({navigation}) =>{
    return (
        <>
            <StatusBar/>
            <SafeAreaView>
                <View style={styles.test1}>
                    <Text>
                        Setting
                    </Text>
                </View>
                <LoginBtnGroup navigation={navigation}/>
            </SafeAreaView>
        </>
    )
}

function LoginBtnGroup(props) {

    const navigation = props.navigation

    return (
        <>
            <View>
                <Button title="Auto Login 1"/>
                <Button title="Auto Login 2"/>
                <Button  title="Auto Login 3"/>
                <Button  title="로그인" onPress={()=> navigation.navigate("Login")}/>
            </View>
            <Button title="Open Modal" onPress={() => navigation.navigate('SignUp')}/>
        </>
    )
}

const styles = StyleSheet.create({
    test1 : {
        backgroundColor : '#f00'
    }
})
