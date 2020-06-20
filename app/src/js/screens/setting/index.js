import React, {useEffect, useState} from 'react'
import {StatusBar , SafeAreaView , Text , View , Button , StyleSheet , AsyncStorage} from 'react-native'
import {useSelector} from "react-redux";
import {onTest} from "../../actions/statics";
import {isFalse} from "../../public/comm";

export default ({navigation}) =>{

    const initData = useSelector(state=>state.Statics , [])

    let _onUpdate = (val) =>{
        initData.isLogin.data = val
        console.log( 'update' , initData.isLogin.data)
    }

    return (
        <>
            <StatusBar/>
            <SafeAreaView>
                <View style={styles.test1}>
                    <Text>
                        Setting
                    </Text>

                    <Button title="로그인" onPress={() => navigation.navigate("Login")}/>

                    <Button title={"로그아웃"} onPress={() => {
                        AsyncStorage.removeItem("token")
                            .then(res => _onUpdate(false))
                            .catch(err => console.log(err))
                    }}/>

                </View>
                <TestV flag={initData.isLogin}/>
                {/*<LoginBtnGroup navigation={navigation} isLogin={initData.isLogin.data} onUpdate={_onUpdate}/>*/}
            </SafeAreaView>
        </>
    )
}

function TestV(props) {

    const [user, setUser] = React.useState({...props.flag});

    React.useEffect(() => {
        setUser(props.flag);
    }, [props.flag])

    return user.data ? (
            <View>
                <Text>TEST 1 true</Text>
            </View>
        ) :
        (
            <View>
                <Text>Test 2 false</Text>
            </View>
        )

}

function LoginBtnGroup(props) {

    const navigation = props.navigation

    const isLogin = props.isLogin

    const _onUpdate = props.onUpdate

    const [flag, setFlag] = React.useState(isLogin);

    React.useEffect(() => {
        setFlag(props.isLogin.data);
    }, [props.isLogin])

    if (isFalse(flag)) {
        return (
            <>
                <View>
                    <Button title="Auto Login 1"/>
                    <Button title="Auto Login 2" onPress={()=>{
                        onTest()
                    }}/>
                    <Button title="로그인" onPress={() => navigation.navigate("Login")}/>
                    <Button title="Auto Login 3" onPress={() => {
                    }}/>

                </View>
                <Button title="Open Modal" onPress={() => navigation.navigate('SignUp')}/>
            </>
        )
    }

    return (
        <>
            <View>
                <Text>
                    Login User {JSON.stringify(isLogin.data)}
                </Text>
                <Button title={"Test"}
                        onPress={() => {
                            onTest()
                        }}/>

                <Button title={"로그아웃"} onPress={() => {
                    AsyncStorage.removeItem("token")
                        .then(res => _onUpdate(false))
                        .catch(err => console.log(err))
                }}/>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    test1 : {
        backgroundColor : '#f00'
    }
})
