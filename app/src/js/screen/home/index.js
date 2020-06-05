import React from 'react'
import {SafeAreaView  , StatusBar  , View , Text} from 'react-native'

export default () => {

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <View>
                    <Text>
                        Home
                    </Text>
                </View>
            </SafeAreaView>
        </>
    )

}
