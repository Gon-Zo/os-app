import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TextInput,
} from 'react-native';
import InputText from "./update/custom/InputText";
import {TEXT_INPUT} from "../public/types/State";

export default class SignForm extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <View>

                <InputText width={'100%'}
                           placeholder={'ID'}
                           keyType={TEXT_INPUT.DEFAULT}/>

                <View style={{
                    flexDirection : 'row'
                }}>
                    <InputText
                        width={'50%'}
                        placeholder={'Number'}
                        keyType={TEXT_INPUT.NUMERIC}
                    />
                    <InputText
                        width={'50%'}
                        placeholder={'Text'}
                        keyType={TEXT_INPUT.DEFAULT}
                    />
                </View>

            </View>
        );
    }
}
