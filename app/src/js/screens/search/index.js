import React, {useState , useEffect } from 'react'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
    StatusBar,
    SafeAreaView,
    Text, View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from "react-redux";
import {$fetchItems} from "../../actions/search";
import {STATE_TYPE} from "../../modules/enum";

export default () => {

    const dispatch = useDispatch

    const initData = useSelector(state => state.Search, [])

    // useEffect(() => {
    //     $fetchItems(dispatch , [])
    // }, []);

    return (
        <>
            <StatusBar/>
            <SafeAreaView style={styles.wrap}>
                <SearchInput dispatch={dispatch} />
                <SearchContent payload={initData.items}/>
            </SafeAreaView>
        </>
    )
}

function SearchInput(props) {

    const dispatch = props.dispatch

    const [value, setValue] = useState('')

    return (
        <View style={styles.searchWrap}>

            <TextInput style={styles.searchInput}
                       onChangeText={text => setValue(text)}
                       value={value}
            />
            <TouchableOpacity style={styles.searchBtn} onPress={() => $fetchItems(dispatch, value)}>
                <MaterialCommunityIcons name="magnify" color="#424242" size={26}/>
            </TouchableOpacity>
        </View>
    )
}

function SearchContent(props) {

    const payload = props.payload

    console.log('payload', JSON.stringify(payload))

    const ItemContent = (props) =>{

        if(payload.type === STATE_TYPE.L){
            return (<Text>Load ...</Text>)
        }else if (payload.type === STATE_TYPE.E){
           return(<Text>Error </Text>)
        }else{
            return (<Text>SUCCESS...</Text>)
        }

    }

    return (
        <View style={styles.contentWrap}>
            <ItemContent/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex : 1 ,
        backgroundColor: '#f00',
    },
    searchWrap: {
        width: wp('100%'),
        height: hp('5%'),
        backgroundColor: '#00f',
        flexDirection: 'row'
    },
    searchInput: {
        flex : 8 ,
        flexDirection: 'column',
        backgroundColor: '#c9c9c9' },
    searchBtn: {
        flex: 1,
        flexDirection: 'column' ,
        backgroundColor : '#ff0',
        alignItems : 'center' ,
        justifyContent : 'center'
    },
    contentWrap: {
        width: wp('100%'),
        height: hp('95%'),
        backgroundColor: '#0f0',
        flexDirection: 'row'
    }
})

