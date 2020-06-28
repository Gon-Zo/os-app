import {StyleSheet, TextInput, View , TouchableOpacity} from "react-native";
import {Text} from "react-native-paper";
import React, {useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {GET_COLOR} from "../../public/colors";

function EyeIcon(props) {

    const isShow = props.isShow === "password" ? true : false

    let open = props.open

    let _setOpen = props.setOpen

    if (isShow)
        return (
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 5,
                    bottom: 0,
                    width: 30,
                    height : '100%',
                    flexDirection : 'column',
                    textAlign : 'center' ,
                    justifyContent : 'center'
                }}
                onPress={() => { let nowOpen = !open
                    _setOpen(nowOpen)
                }}>
                <Ionicons
                    name={open ? "ios-eye-off" : "ios-eye"} color={GET_COLOR().PRIMARY} size={29}
                />
            </TouchableOpacity>
        )
    else return (<></>)
}

export function LineAndInputText(props) {

    let [textStyle, setTextStyle] = useState({})

    let [borderStyle, setBorderStyle] = useState({})

    const item = props.item

    const _setItem = props.onItem

    const color = props.color

    const title = props.title

    const type = props.type

    let [flag, setFlag] = useState(type == "password" ? true : false)

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
                       secureTextEntry={flag}
                       onChangeText={text => _setItem(text)} value={item}
                       onFocus={() => settingStyle()}
                       onBlur={() => {
                           if (item == "" || typeof item == "undefined") {
                               resetStyle()
                           } else {
                               settingStyle()
                           }
                       }}/>
            <EyeIcon isShow={type} open={flag} setOpen={setFlag} />
        </View>
    )
}

export function AppTextInput(props) {

    const label = props.label

    const color = props.color

    const setItem = props.setItem

    const item = props.item

    const type = props.type

    let [flag, setFlag] = useState(type == "password" ? true : false)

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
                backgroundColor: GET_COLOR().BACKGROUND_COLOR,
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
                       secureTextEntry={flag}
                       onFocus={() => settingStyle()}
                       onBlur={() => {
                           if (item == '' || typeof item == "undefined") {
                               resetStyle()
                           } else {
                               settingStyle()
                           }
                       }}
            />
            <EyeIcon isShow={type} open={flag} setOpen={setFlag} />
        </View>
    )
}
