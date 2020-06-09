import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
    StatusBar,
    SafeAreaView,
    Text, View,
    TextInput,
    StyleSheet ,
    TouchableOpacity
} from 'react-native'


export default () => {
    return (
        <>
            <StatusBar/>
            <SafeAreaView style={styles.wrap}>
                <SearchInput/>
                <View style={styles.contentWrap}>
                    <Text>Searching Item</Text>
                </View>
            </SafeAreaView>
        </>
    )
}


function SearchInput(props) {
    return (
        <View style={styles.searchWrap}>
            <TextInput style={styles.searchInput}/>
            <TouchableOpacity style={styles.searchBtn}>
                <MaterialCommunityIcons name="magnify" color="#424242" size={26}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#f00',
    },
    searchWrap: {
        flex: 1,
        backgroundColor: '#00f',
        flexDirection: 'row'
    },
    searchInput: {
        flex: 7,
        flexDirection: 'column',
        backgroundColor: '#c9c9c9'
    },
    searchBtn: {
        flex: 1,
        flexDirection: 'column'
    },
    contentWrap: {
        flex: 9,
        backgroundColor: '#0f0',
        flexDirection: 'row'
    }
})

