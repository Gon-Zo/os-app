import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

export default class TextButton extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.wrap}
                activeOpacity={1} onPress={() => {
                alert("test success")
            }}>
                <View style={styles.box}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        height: 50,
    },
    box: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 20
    }
});
