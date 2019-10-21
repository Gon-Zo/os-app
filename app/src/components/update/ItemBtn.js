import React, {Component} from 'react';
import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import * as icon from '@fortawesome/free-solid-svg-icons'

class Button extends Component {

    static defaultState = {
        onPress: null
    };

    _renderValue(name) {
        switch (name) {
            case "ShoppingChart":
                return icon.faShoppingCart;
            case "Store" :
                return icon.faStore;
            default :
                return null
        }
    }

    // Icon rendering
    _renderIcon(iconName) {
        if (this.props.icon) {
            return (<FontAwesomeIcon icon={this._renderValue(iconName)} size={20} color={'#fff'}
                                     style={{marginRight: 10}}/>)
            // return (<Icon name='shopping-cart' size={20} color='#fff' style={{marginRight: 10}}/>)
        }
    }

    render() {
        return (
            <TouchableOpacity style={style.btnSty} activeOpacity={1} onPress={this.props.onPress}>
                {this._renderIcon(this.props.iconName)}
                <Text style={style.textSty}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default class ItemBtn extends Component {
    render() {
        return (
            <View style={{
                width: '100%',
                height: 50,
                backgroundColor: 'transparent',
                position: 'absolute',
                bottom: 0,
                // alignItems : 'end'
                flexDirection: 'row',
            }}
            >
                <Button title={'장바구니'} icon={true} iconName={'ShoppingChart'} onPress={() => alert("test success")}/>
                <Button title={'바로가기'} icon={true} iconName={'Store'}
                        onPress={() => this.props.navigation.navigate('Detail')}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    btnSty: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
    textSty: {
        fontSize: 10,
        color: "#fff",
        fontWeight: 'bold'
    }
});
