import React, {Component} from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Layout} from "react-native-ui-kitten";

import {Text} from 'react-native-ui-kitten'

const images = [
    {src: require("../common/img/test2.jpg"), title: "col1"},
    {src: require("../common/img/test2.jpg"), title: "col2"},
    {src: require("../common/img/test2.jpg"), title: "col3"},
    {src: require("../common/img/test2.jpg"), title: "col4"},
    {src: require("../common/img/test2.jpg"), title: "col5"},
    {src: require("../common/img/test2.jpg"), title: "col6"},
    {src: require("../common/img/test2.jpg"), title: "col7"},
    {src: require("../common/img/test2.jpg"), title: "col8"},

];

// flex: 1,
//     height: 100,
//     flexWrap: 'wrap',
//     alignItems: 'flex-start',
//     justifyContent: 'center',

class Button extends Component {
    render() {

        return (
            <TouchableOpacity activeOpacity={1} style={{
                width: 82,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
            }} onPress={() => alert("test.. ==> Success")}>
                <Image style={{width: 50, height: 50, backgroundColor: '#fff'}}
                       source={this.props.src}
                />
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

export default class CategoryGroup extends Component {

    renderCard(src, title) {
        return (
            <Button name={title} src={src}/>
        )
    }

// todo : 한번에 처리 할 것
    render() {
        return (
            <Layout style={styles.buttonGroup}>
                <View style={{
                    flex: 1, flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    paddingLeft : 5
                }}>
                    {images.map((i) => this.renderCard(i.src, i.title))}
                </View>
            </Layout>
        );
    }

}

const styles = StyleSheet.create({

//container style wrapper for scrollview
    footerWrapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    //non-container style wrapper for scrollview
    footerWrapperNC: {
        flexDirection: 'column',
    },


    buttonGroup: {
        height: 200,
        backgroundColor: '#fff',
        margin: 10,
        borderWidth: 0.5,
    },

    cardWrap: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#f00',
        marginTop: 30,
    },

    cardBox: {
        backgroundColor: '#0ff',
        flexDirection: 'column',
    },
})
