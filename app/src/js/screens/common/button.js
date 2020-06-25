import {Text, TouchableOpacity, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {APP_OS, isFalse} from "../../public/comm";
import React from "react";

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

    const bg = props.backgroundColor

    const color = props.color

    const title = props.title

    const _onPress = props.onPress

    const width = typeof props.width == "undefined" ? 170 : props.width

    const icon = props.icon

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{
                backgroundColor: bg,
                height: 40,
                width: width,
                borderRadius: 20,
                textAlign: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
            }}
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
                // paddingLeft: (width / 10),
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

