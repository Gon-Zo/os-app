import React from 'react'
import { FlatGrid  , SectionGrid } from 'react-native-super-grid';
import {Image,
    ScrollView,
    SafeAreaView,
    StatusBar,
    View,
    Text,
    StyleSheet,
    FlatList
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

