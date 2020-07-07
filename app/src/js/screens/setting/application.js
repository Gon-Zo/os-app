import React, {useState} from 'react'
import {
    StatusBar,
    SafeAreaView,
    Button,
    View,
    Text
} from "react-native";
import Switch from "react-native-paper/src/components/Switch";
import {onIsTheme} from "../../actions/statics";
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from "react-redux";
import {GET_COLOR, THEME} from "../../public/colors";

export default ({navigation}) => {

    const dispatch = useDispatch()

    const theme = useSelector(state => state.Statics, []).isTheme

    const color = GET_COLOR()

    return (
        <>
            <StatusBar></StatusBar>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: GET_COLOR().BACKGROUND_COLOR
            }}>
                <Button title={"Back"}
                        onPress={()=>{
                            navigation.goBack()
                        }}/>
                <Text>
                    TEST
                </Text>
                <SettingContent isTheme={theme.data}
                                dispatch={dispatch}
                                color={color}/>
            </SafeAreaView>
        </>
    )
}

function SettingContent(props) {

    const isTheme = props.isTheme

    const [isEnabled, setIsEnabled] = useState(isTheme);

    const dispatch = props.dispatch

    const color = props.color

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
        }}>

            <View style={{
                flexDirection: 'column',
                alignItems: 'stretch'
            }}>
                    <Text style={{
                        color : color.PRIMARY
                    }}>다크모드</Text>
                <Switch
                    trackColor={{false: "#767577", true: "#81b0ff"}}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(val) => {
                        setIsEnabled(val)
                        onIsTheme(dispatch, val)
                        const item = val ? THEME.D : THEME.L
                        AsyncStorage.setItem("theme", item).then(r => console.log("success"))
                    }}
                    value={isEnabled}
                />
            </View>

        </View>
    )
}

