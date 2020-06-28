import React from 'react'
import {Image,
    ScrollView,
    SafeAreaView,
    StatusBar,
} from 'react-native'
import {GET_COLOR} from "../../public/colors";

export default () => {
    return (
        <>
            <StatusBar/>
            <SafeAreaView style={{
                flex : 1 ,
                backgroundColor : GET_COLOR().BACKGROUND_COLOR
            }}>
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

