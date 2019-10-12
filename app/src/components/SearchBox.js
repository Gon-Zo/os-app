import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Layout} from "react-native-ui-kitten";
import Icon from 'react-native-vector-icons/FontAwesome';

export const FacebookIcon = (style) => (
    <Icon name='search' {...style} />
);

export default class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    onInputValueChange = (inputValue: string) => {
        this.setState({inputValue});
    };

    render() {
        return (
            <View style={styles.wrap}>
                <Input
                    style={styles.test}
                    status='info'
                    value={this.state.inputValue}
                    onChangeText={this.onInputValueChange}
                />
                <Icon name='search' size={30} color='#f00' 
                      style={styles.btnStyle}
                      onPress={()=>{alert("test success >> value is " + this.state.inputValue)}}/>
                {/*<Button style={styles.btnStyle} icon={FacebookIcon} onPress={()=>{alert("test succ >> " + this.state.inputValue)}}></Button>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        height: 50 ,
        position: "relative",
        backgroundColor: '#0ff',
    },

    test: {
        // position: "absolute",
        // top: 0,
        // left: 0
        width: '85%',
        height: 50,
        marginLeft : 5 ,
        borderRadius: 100,
    },

    btnStyle: {
        width: 40,
        height: 40,
        backgroundColor : '#000',
        position: "absolute",
        top: 5,
        right: 5,
        borderRadius: 10,
        textAlign : 'center',
    }
});
