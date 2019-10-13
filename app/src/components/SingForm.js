import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TextInput,
} from 'react-native';
import ActionCreators from "../actions";
import {connect} from 'react-redux'


class SignForm extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <View>

                <View style={styles.wrap}>
                    <TextInput
                        placeholder={'ID'}
                        style={styles.input}
                        onChangeText={(text) => {
                            this.setState({text});

                            if (text !== '') {
                                this.props.putSignId(text)
                            }

                        }}
                    />
                    <View style={styles.text}>
                        <Text>Msg</Text>
                    </View>
                </View>

                {/*<View style={styles.wrap}>*/}
                {/*    <TextInput*/}
                {/*        placeholder={'Password'}*/}
                {/*        style={styles.input}*/}
                {/*        onChangeText={(text) => {*/}
                {/*            this.setState({text});*/}
                {/*            if (text !== '') {*/}

                {/*                this.props.checkSignId(text)*/}

                {/*            }*/}
                {/*        }}*/}
                {/*    />*/}
                {/*    <View style={styles.text}>*/}
                {/*        <Text>Msg</Text>*/}
                {/*    </View>*/}
                {/*</View>*/}

            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        id: state.sign.singInfo.id,
        pwd: state.sign.singInfo.pwd,
        address: state.sign.singInfo.address,
    }
}

function mapDispatchToProps(dispatch) {
    return {

        putSignId: (text) => {
            dispatch(ActionCreators.checkSignId(text));
        },

        // putSignPwd: (text) => {
        //     dispatch(ActionCreators.checkSignPwd(text));
        // },
        //
        // putSignAddress: (text) => {
        //     dispatch(ActionCreators.checkSignAddress(text));
        // },
        //

    }
}


const styles = StyleSheet.create({

    wrap: {
        width: '100%',
        height: 80,
        borderColor: '#f00',
        borderWidth: 1
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        color: "#fff"
    },

    msg: {
        width: '100%',
        height: 30,
        backgroundColor: '#0f0'
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(SignForm)

// export default SignForm
