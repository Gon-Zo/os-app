import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {Button, Layout} from "react-native-ui-kitten";
import * as screen from "../../public/styles/comm";
import ItemCard from "./ItemCard";
import * as set from '../../public/styles/setting'

export default class HorizontalItemList extends Component {
    render() {
        return (
            <Layout>
                <View style={{width: screen.width, height: 60, justifyContent: 'center'}}>
                    <Text style={{fontSize: set.font.h2 , fontWeight: 'bold', marginLeft: 10}}>{this.props.title}</Text>
                </View>
                <ItemCard  navigation={this.props.navigation}/>
            </Layout>
        );
    }
}
