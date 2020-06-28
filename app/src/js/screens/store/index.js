import React from 'react'
import {Image,
    ScrollView,
    SafeAreaView,
    StatusBar,
} from 'react-native'

export default () => {
    return (
        <>
            <StatusBar/>
            <SafeAreaView>
                <ScrollView>
                    <CateGroupBox/>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

function CateGroupBox() {
    return(
        <ScrollView>
        </ScrollView>
    )
}

