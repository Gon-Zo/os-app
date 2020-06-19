import {TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
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

