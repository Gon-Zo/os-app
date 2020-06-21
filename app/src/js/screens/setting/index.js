import React, {useEffect, useState} from 'react'
import {StatusBar , SafeAreaView , Text , View , Button , StyleSheet , AsyncStorage} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import { updateLoginData} from "../../actions/statics";
import {isFalse} from "../../public/comm";

export default ({navigation}) =>{

    const initData = useSelector(state=>state.Statics , [])

    const dispatch = useDispatch();

    let _onUpdate = (val) =>{
        updateLoginData(dispatch, val)
    }

    return (
        <>
            <StatusBar/>
            <SafeAreaView>
                <LoginBtnGroup navigation={navigation} isLogin={initData.isLogin.data} onUpdate={_onUpdate}/>
            </SafeAreaView>
        </>
    )
}

function LoginBtnGroup(props) {

    const navigation = props.navigation

    const isLogin = props.isLogin

    const _onUpdate = props.onUpdate

    if (isFalse(isLogin)) {
        return (
            <>
                <View>
                    <View>
                        <Button title={"Google"}/>
                        <Button title={"FaceBook"}/>
                        <Button title={"Kakao"}/>
                    </View>
                    <Button title="로그인" onPress={() => navigation.navigate("Login")}/>
                </View>
                <Button title="Open Modal" onPress={() => navigation.navigate('SignUp')}/>
            </>
        )
    } else {

        return (
            <>
                <View>



                    <Button title={"로그아웃"} onPress={() =>
                        AsyncStorage.removeItem("token")
                            .then(res => _onUpdate(false))
                            .catch(err => console.log(err))}/>
                </View>
            </>
        )

    }

}
