import React from 'react'
import {StatusBar,
    SafeAreaView,
    View,
    Button,
} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import { updateLoginData} from "../../actions/statics";
import {isFalse} from "../../public/comm";
import {IconButton , TextButton} from "../common/button";
import {GET_COLOR} from "../../public/colors";
import AsyncStorage from '@react-native-community/async-storage';

export default ({navigation}) =>{

    const initData = useSelector(state => state.Statics, [])

    const dispatch = useDispatch();

    let _onUpdate = (val) => {
        updateLoginData(dispatch, val)
    }

    return (
        <>
            <StatusBar/>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: GET_COLOR().BACKGROUND_COLOR
            }}>
                <MyInfoContent navigation={navigation} isLogin={initData.isLogin.data} onUpdate={_onUpdate}/>
            </SafeAreaView>
        </>
    )
}


function MyInfoContent(props) {

    const navigation = props.navigation

    const _onUpdate = props.onUpdate

    function LoginContent(props) {

        const isLogin = props.isLogin

        if (isFalse(isLogin)) {

            return (
                <>
                    <IconButton
                        style={{
                            margin: 10,
                        }}
                        width={200}
                        icon={'facebook-square'}
                        title={"Face Book"}
                        color={"#fff"}
                        backgroundColor={"#3b5998"}
                        onPress={() => {
                            navigation.navigate("Login")
                        }}
                    />

                    <IconButton
                        style={{
                            margin: 10,
                        }}
                        width={200}
                        icon={'comment'}
                        title={"KaKao Talk"}
                        color={"#3C1C1D"}
                        backgroundColor={"#F9E000"}
                        onPress={() => {
                            navigation.navigate("Login")
                        }}
                    />

                    <TextButton
                        style={{
                            margin: 10
                        }}
                        color={GET_COLOR().SUCCESS}
                        isBold={true}
                        title={"Login"}
                        onPress={() => navigation.navigate("Login")}
                    />


                    <TextButton
                        style={{
                            margin: 10
                        }}
                        width={200}
                        color={GET_COLOR().SECONDARY}
                        title={"Sign Up"}
                        onPress={() => {
                            navigation.navigate("SignUp")
                        }}
                    />

                </>
            )
        } else {
            return (
                <>
                    <Button title={"로그아웃"} onPress={() =>
                        AsyncStorage.removeItem("token")
                            .then(res => _onUpdate(false))
                            .catch(err => console.log(err))}/>

                    <TextButton
                        style={{
                            margin: 10
                        }}
                        width={200}
                        color={GET_COLOR().SECONDARY}
                        title={"Application Setting"}
                        onPress={() => {
                            navigation.navigate("Application")
                        }}
                    />
                </>
            )
        }

    }

    return (
        <View style={{
            justifyContent: 'center',
            flex: 1,
        }}>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <LoginContent isLogin={props.isLogin}/>
            </View>
        </View>
    )

}
