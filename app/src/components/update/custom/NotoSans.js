import React, {Component} from 'react';
import {Text} from 'react-native';

export default class NotoSans extends Component {

    _getFontType(){
        let temp;
        switch(this.props.type){
            case 'Black' :
                temp = font.Black;
                break;
            case 'Bold' :
                temp = font.Bold;
                break;
            case 'Light' :
                temp = font.Light;
                break;
            case 'Medium' :
                temp = font.Medium;
                break;
            case 'Regular' :
                temp = font.Regular;
                break;
            case 'Thin' :
                temp = font.Thin;
                break;
        }
        return temp
    }

    render() {
        return (
            <Text style={[this.props.style, {fontFamily: this._getFontType()}]}>
                {this.props.text}
            </Text>
        );
    }
}

let font = {
    'Black': 'NotoSansBlack',
    'Bold': 'NotoSansBold',
    'Light': 'NotoSansLight',
    'Medium': 'NotoSansMedium',
    'Regular': 'NotoSansRegular',
    'Thin': 'NotoSansThin',
};
