import React from 'react'
import {View, Text, StatusBar, SafeAreaView, Button, TouchableOpacity} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import {APP_OS} from "../../public/comm";


export default ({navigation}) => {

    React.useLayoutEffect(()=>{

        navigation.setOptions({
            headerLeft : () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{paddingLeft: 10}}>
                    <Ionicons name={`${APP_OS}-arrow-back`} color="#424242" size={20}/>
                </TouchableOpacity>
            )
        })

    },[navigation])


    return (
        <>
            <StatusBar/>
            <SafeAreaView>
                <View>
                    <Text>Test</Text>
                </View>
            </SafeAreaView>
        </>
    )
}
