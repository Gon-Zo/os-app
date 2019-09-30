import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, StatusBar,} from 'react-native';
import {Layout, Text} from "react-native-ui-kitten";
import {Image} from "react-native-svg";
import ProfileCard from "../component/ProfileCard";
import MenuGroup from "../component/MenuGroup";

export default class SettingScreen extends Component {
    render() {
        return (
            <Layout>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView style={{
                        backgroundColor : "#f0f"
                    }}>
                        <ProfileCard/>
                        <MenuGroup/>
                    </ScrollView>
                </SafeAreaView>
            </Layout>
        );
    }
}
