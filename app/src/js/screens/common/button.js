import {Text, TouchableOpacity, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {APP_OS, isFalse} from "../../public/comm";
import React from "react";
import {GET_COLOR} from "../../public/colors";

export function TextButton(props) {

    const title = props.title

    const style = props.style

    const color = typeof props.color == "undefined" ? GET_COLOR().PRIMARY : props.color

    const _onPress = props.onPress

    const width = typeof  props.width  === "undefined" ? 200 : props.width

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[{
                width: width,
                height: 40,
            }, style]}
            onPress={_onPress}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    // fontWeight: "bold",
                    fontSize: width / 10 ,
                    color: color
                }}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

export function LineButton(props) {

    const title = props.title

    const _onPress = props.onPress

    const color = props.color

    const style = props.style

    const width = typeof props.width == "undefined" ? 170 : props.width

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[{
                width: width,
                height: 40,
                borderWidth: 1,
                borderColor: color,
                borderRadius: 10,
                // textAlign: 'center',
                // justifyContent: 'center',
                // flexDirection: 'row',
            }, style]}
            onPress={_onPress}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize:  width / 10 ,
                    color: color
                }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function BackButton(props) {
    const navigation = props.navigation
    return(
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{paddingLeft: 10}}>
            <Ionicons name={`${APP_OS}-arrow-back`} color="#424242" size={20}/>
        </TouchableOpacity>
    )
}

export function BasketButton(props) {

    const navigation = props.navigation

    const isLogin = props.isLogin

    if (isFalse(isLogin.data)) {
        return (
            <>
            </>
        )
    }

    return(
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Basket')
            }}
            style={{paddingRight: 10}}>
            <Ionicons name="ios-basket" color="#424242" size={20}/>
        </TouchableOpacity>
    )

}

export function IconButton(props) {

    const style = props.style

    const bg = props.backgroundColor

    const color = props.color

    const title = props.title

    const _onPress = props.onPress

    const width = typeof props.width == "undefined" ? 170 : props.width

    const icon = props.icon

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[{
                backgroundColor: bg,
                height: 40,
                width: width,
                borderRadius: 20,
                textAlign: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
            }, style]}
            onPress={_onPress}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <FontAwesome style={{
                    textAlign: 'center'
                }} name={icon} color={color} size={24}/>
            </View>
            <View style={{
                flex: 2,
                textAlign: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <Text style={{
                    color: color,
                    fontSize: width / 10,
                    fontWeight: 'bold'
                }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

