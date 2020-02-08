import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView, StatusBar, Image, Dimensions, TextInput,} from 'react-native';
import SelectBox from "../../../components/update/Store/SelectBox";
import VerticalItemList from "../../../components/update/Store/VerticalItemList";
import Header from "../../../components/update/Header";
import CategoryList from "../../../components/update/test/CategoryList";

export default class StoreScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={{width: '100%', height: '100%', backgroundColor: '#f00'}}>
                <StatusBar barStyle="dark-content"/>

                <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: '#f0f'}}>
                    <Header type={'S'}/>
                    <CategoryList/>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{width: '100%', height: '100%', backgroundColor: '#e5e5e5'}}>
                        <SelectBox/>
                        <VerticalItemList/>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
