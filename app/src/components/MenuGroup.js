import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {Layout, Text} from "react-native-ui-kitten";

const MenuTemp = [
    {title:"Menu1"},
    {title:"Menu2"},
    {title:"Menu3"},
    {title:"Menu4"},
    {title:"Menu5"},
    {title:"Menu6"},
]

class MenuButton extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={1} style={{
                width: '100%',
                height: 50,
                backgroundColor: '#f00',
                alignItems: 'center',
                justifyContent: 'center',
            }} onPress={() => {
                alert("test success")
            }}>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}


export default class MenuGroup extends Component {
    renderMenuBtn(text) {
        return <MenuButton text={text}/>
    }

    render() {
        return (
            <Layout style={styles.wrap}>
                {
                    MenuTemp.map((i) => this.renderMenuBtn(i.title))
                }
            </Layout>
        );
    }
}


const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        height: 300,
        backgroundColor: '#00f',
        marginTop: 10,
    }
})
