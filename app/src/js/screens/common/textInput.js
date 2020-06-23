import {StyleSheet, TextInput, View} from "react-native";
import {Text} from "react-native-paper";
import React from "react";

export function AppTextInput(props) {

    const label = props.label

    const color = props.color

    const setItem = props.setItem

    const item = props.item

    const isPassword = props.isPassword

    return (
        <View style={[styles.textBox, {borderColor: color}]}>
            <Text style={[styles.textLabel, {color: color}]}>{label}</Text>
            <TextInput style={styles.textContent} onChangeText={text => setItem(text)} value={item} secureTextEntry={isPassword}/>
        </View>
    )
}

const styles = StyleSheet.create({

    box: {
        flex: 1,
        // alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'column'
    },

    textBox: {
        // width : '100%',
        // flex : 1 ,
        height : 50 ,
        borderWidth : 2,
        borderRadius : 10 ,
        margin : 5,
        marginTop : 10 ,
        position: 'relative',
        // flexDirection:  'column',
    },

    textContent: {
        flex: 1,
        // backgroundColor: '#00f',
        marginLeft: 5 ,
        marginRight: 5,
        fontSize: 16,
    },

    textLabel: {
        position: 'absolute',
        top: -12 ,
        left: 10,
        zIndex : 1,
        fontSize : 16 ,
        fontWeight : 'bold',
        backgroundColor : '#fff' ,
    }

})

