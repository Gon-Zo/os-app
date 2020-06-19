import React from 'react'
import {StatusBar , SafeAreaView , Text , View , Button , StyleSheet} from 'react-native'
import {isFalse, isLogin} from "../../public/comm";
import axios from "axios";
import {useSelector} from "react-redux";

export default ({navigation}) =>{

    const initData = useSelector(state=>state.Statics , [])

    return (
        <>
            <StatusBar/>
            <SafeAreaView>
                <View style={styles.test1}>
                    <Text>
                        Setting
                    </Text>
                </View>
                <LoginBtnGroup navigation={navigation} isLogin={initData.isLogin}/>
            </SafeAreaView>
        </>
    )
}

function LoginBtnGroup(props) {

    const navigation = props.navigation

    const isLogin = props.isLogin

    if (isFalse(isLogin.data)) {
        return (
            <>
                <View>
                    <Button title="Auto Login 1"/>
                    <Button title="Auto Login 2"/>
                    <Button title="Auto Login 3"/>
                    <Button title="로그인" onPress={() => navigation.navigate("Login")}/>
                </View>
                <Button title="Open Modal" onPress={() => navigation.navigate('SignUp')}/>
            </>
        )
    }

    return (
        <>
            <View>
                <Text>
                    Login User
                </Text>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    test1 : {
        backgroundColor : '#f00'
    }
})
