import React, {useEffect, useState} from 'react'
import {StatusBar, SafeAreaView, Text, View, Button, TouchableOpacity, AsyncStorage} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import { updateLoginData} from "../../actions/statics";
import {APP_OS, isFalse} from "../../public/comm";
import {IconButton} from "../common/button";

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
                <MyInfoContent navigation={navigation} isLogin={initData.isLogin.data} onUpdate={_onUpdate}/>
            </SafeAreaView>
        </>
    )
}

function MyInfoContent(props) {

    const navigation = props.navigation

    const isLogin = props.isLogin

    const _onUpdate = props.onUpdate

    if (isFalse(isLogin)) {
        return (
            <>
                    <View style={{
                        backgroundColor : '#c9c9c9',
                        // flex : 1,
                        justifyContent : 'center',
                        // textAlign : 'center',
                        flexDirection : 'column'
                    }}>
                        {/*<Button title={"Google"}/>*/}
                        {/*<Button title={"FaceBook"}/>*/}
                        {/*<Button title={"Kakao"}/>*/}
                        {/*<Button title="로그인" onPress={() => navigation.navigate("Login")}/>*/}

                        {/*<IconButton*/}
                        {/*    title={"로그인"}*/}
                        {/*    color={"#fff"}*/}
                        {/*    icon={'ios-home'}*/}
                        {/*    backgroundColor={"#f00"}*/}
                        {/*    onPress={()=>{*/}
                        {/*        navigation.navigate("Login")*/}
                        {/*    }}*/}
                        {/*/>*/}

                        <IconButton
                            width={200}
                            icon={'facebook-square'}
                            title={"Face Book"}
                            color={"#fff"}
                            backgroundColor={"#3b5998"}
                            onPress={()=>{
                                navigation.navigate("Login")
                            }}
                        />

                        <IconButton
                            width={200}
                            icon={'comment'}
                            title={"KaKao Talk"}
                            color={"#3C1C1D"}
                            backgroundColor={"#F9E000"}
                            onPress={()=>{
                                navigation.navigate("Login")
                            }}
                        />

                        {/*<IconButton*/}
                        {/*    width={200}*/}
                        {/*    icon={'comment'}*/}
                        {/*    title={"Login"}*/}
                        {/*    color={"#3C1C1D"}*/}
                        {/*    backgroundColor={"#F9E000"}*/}
                        {/*    onPress={()=>{*/}
                        {/*        navigation.navigate("Login")*/}
                        {/*    }}*/}
                        {/*/>*/}

                    </View>
                {/*<Button title="Open Modal" onPress={() => navigation.navigate('SignUp')}/>*/}
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
