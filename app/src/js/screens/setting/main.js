import React, {useEffect, useState} from 'react'
import {StatusBar,
    SafeAreaView,
    Text,
    View,
    Button,
    AsyncStorage,
    Switch
} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import { updateLoginData} from "../../actions/statics";
import {isFalse} from "../../public/comm";
import {IconButton, LineButton} from "../common/button";
import {GET_COLOR, THEME} from "../../public/colors";

export default ({navigation}) =>{

    const initData = useSelector(state => state.Statics, [])

    const dispatch = useDispatch();

    // let [theme, setTheme] = useState(false)

    let _onUpdate = (val) => {
        updateLoginData(dispatch, val)
    }

    // useEffect(() => {
    //
    //     AsyncStorage.getItem("theme" )
    //         .then(res => setTheme(res == THEME.D))
    //         .catch(err=>console.log(err))
    //
    // }, [])

    return (
        <>
            <StatusBar/>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: GET_COLOR().BACKGROUND_COLOR
            }}>
                <MyInfoContent navigation={navigation} isLogin={initData.isLogin.data} onUpdate={_onUpdate}/>
                <SettingContent/>
            </SafeAreaView>
        </>
    )
}

function SettingContent() {

    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={{
            flex : 1
        }}>
            <Text>Setting Content</Text>

            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(val) => {
                    setIsEnabled(val)
                    let item = val ? THEME.D : THEME.L
                    console.log(item)
                    AsyncStorage.setItem("theme", item).then(r => console.log("success"))
                }}
                value={isEnabled}
            />

        </View>
    )
}

function MyInfoContent(props) {

    const navigation = props.navigation

    const isLogin = props.isLogin

    const _onUpdate = props.onUpdate

    if (isFalse(isLogin)) {
        return (
            <View style={{
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'row',
                flex : 1,
            }}>
                <View style={{
                    flexDirection: 'column'
                }}>
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
                    <LineButton/>
                </View>
            </View>
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
