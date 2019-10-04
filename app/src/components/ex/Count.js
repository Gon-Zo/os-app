import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    Button
} from 'react-native';
import ActionCreaters from '../../actions'
import {connect} from 'react-redux'

class Count extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <View style={{
                marginTop: 30,
                flexDirection: 'row',
                textAlign: 'center',
                width: '100%',
                height: 50,
                justifyContent: 'center',
            }}>

                <View style={styles.box}>
                    <TextInput
                        keyboardType={'number-pad'}
                        maxLength={1}
                        placeholder={'0'}
                        style={styles.input}
                        onChangeText={(text) => {
                            this.setState({text})
                            var num = 0
                            if (text != '') {
                                num = parseInt(text, 10)
                            }
                            console.log("Text Input Value 1 >> " + text)
                            this.props.updateFirst(Number(text))
                        }}
                    />
                </View>
                <View>
                    <Text>+</Text>
                </View>
                <View style={styles.box}>
                    <TextInput
                        keyboardType={'number-pad'}
                        maxLength={1}
                        placeholder={'0'}
                        style={styles.input}
                        onChangeText={(text) => {
                            this.setState({text})
                            var num = 0
                            if (text != '') {
                                num = parseInt(text, 10)
                            }
                            this.props.updateSecond(Number(text))
                        }}
                    />
                </View>

                <View>
                    <Text>=</Text>
                </View>

                <View>
                    <Text>{this.props.result}</Text>
                </View>

            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        result: state.count.result,
        first: state.count.countInfo.first,
        second: state.count.countInfo.second
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateFirst: (num) => {
            dispatch(ActionCreaters.firstNum(num));

        },
        updateSecond: (num) => {
            dispatch(ActionCreaters.secondNum(num));
        }
    };
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 30,
        height: 50,
        marginRight: 10,
        marginLeft: 10,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
