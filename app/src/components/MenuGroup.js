import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {Layout, Text} from "react-native-ui-kitten";

const MenuTemp = [
    {id: 1, title: "Menu1"},
    {id: 2, title: "Menu2"},
    {id: 3, title: "Menu3"},
    {id: 4, title: "Menu4"},
    {id: 5, title: "Menu5"},
    {id: 6, title: "Menu6"},
]

class MenuButton extends Component {
    render() {
        return (
            <TouchableOpacity
                key={this.props.data.id}
                activeOpacity={1} style={{
                width: '100%',
                height: 50,
                backgroundColor: '#f00',
                alignItems: 'center',
                justifyContent: 'center',
            }} onPress={() => {
                alert("test success >> " + this.props.data.id)
            }}>
                <Text>{this.props.data.title}</Text>
            </TouchableOpacity>
        )
    }
}


export default class MenuGroup extends Component {
    renderMenuBtn(obj) {
        return <MenuButton data={obj}/>
    }

    render() {
        return (
            <Layout style={styles.wrap}>
                {MenuTemp.map((i) => this.renderMenuBtn(i))}
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
