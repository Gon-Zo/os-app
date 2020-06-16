import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {BackButton} from "../common/button";

export default ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <BackButton navigation={navigation}/>
            )
        })
    }, [navigation])

    return (
        <View>
            <Text>Modal</Text>
        </View>
    )
}

