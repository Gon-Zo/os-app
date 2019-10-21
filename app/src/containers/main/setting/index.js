import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, StatusBar} from 'react-native';
import {Layout, Text, Button} from "react-native-ui-kitten";
import ProfileCard from "../../../components/ProfileCard";
import MenuGroup from "../../../components/MenuGroup";
import {connect} from 'react-redux'

export default class SettingScreen extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <Layout>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            backgroundColor: "#c9c9c9"
                        }}>
                        <Text>
                            Setting
                        </Text>
                    </ScrollView>
                </SafeAreaView>
            </Layout>
        );
    }
}
