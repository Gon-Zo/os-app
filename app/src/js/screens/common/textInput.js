import {StyleSheet, TextInput, View} from "react-native";
import {Text} from "react-native-paper";
import React, {useState} from "react";

export function LineAndInputText(props) {

    let [textStyle, setTextStyle] = useState({})

    let [borderStyle, setBorderStyle] = useState({})

    const item = props.item

    const _setItem = props.onItem

    const color = props.color

    const title = props.title

    const isPwd = props.isPassword

    const resetStyle = () =>{
        setTextStyle({})
        setBorderStyle({})
    }

    const settingStyle = () =>{
        setTextStyle({color: color, })
        setBorderStyle({borderBottomColor: color})
    }

    return (
        <View style={[{
            height: 50,
            borderBottomWidth: 1,
            borderBottomColor: '#c9c9c9',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            position: 'relative',
        }, borderStyle]}>
            <Text style={[
                {
                    position: 'absolute',
                    top: -10,
                    left: 0,
                    fontSize: 17,
                    zIndex: 1,
                    color: '#c9c9c9',
                }, textStyle
            ]}>{title}</Text>
            <TextInput style={{flex: 1, fontSize: 17, paddingLeft: 5}}
                       secureTextEntry={isPwd}
                       onChangeText={text => _setItem(text)} value={item}
                       onFocus={() => settingStyle()}
                       onBlur={() => {
                           if (item == "" || typeof item == "undefined") {
                               resetStyle()
                           } else {
                               settingStyle()
                           }
                       }}/>

        </View>
    )
}

export function AppTextInput(props) {

    const label = props.label

    const color = props.color

    const setItem = props.setItem

    const item = props.item

    const isPassword = props.isPassword

    let [textStyle, setTextStyle] = useState({})

    let [borderStyle, setBorderStyle] = useState({})

    const resetStyle = () => {
        setBorderStyle({})
        setTextStyle({})
    }

    const settingStyle = () => {
        setBorderStyle({borderColor: color})
        setTextStyle({color: color})
    }

    return (
        <View style={[{
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            margin: 5,
            marginTop: 10,
            position: 'relative',
            borderColor: '#c9c9c9'
        }, borderStyle]}>
            <Text style={[{
                position: 'absolute',
                top: -12,
                left: 10,
                zIndex: 1,
                fontSize: 16,
                fontWeight: 'bold',
                backgroundColor: '#fff',
                color: '#c9c9c9',
            }, textStyle]}>
                {label}
            </Text>
            <TextInput style={{
                flex: 1,
                marginLeft: 5,
                marginRight: 5,
                fontSize: 16,
            }} onChangeText={text => setItem(text)}
                       value={item}
                       secureTextEntry={isPassword}
                       onFocus={() => settingStyle()}
                       onBlur={() => {
                           if (item == '' || typeof item == "undefined") {
                               resetStyle()
                           } else {
                               settingStyle()
                           }
                       }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
})

