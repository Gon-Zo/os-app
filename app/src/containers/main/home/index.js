import React, {Component} from 'react';
import {Layout, Text, Button} from 'react-native-ui-kitten'
import {SafeAreaView, View, StyleSheet, ScrollView, StatusBar, Image, Dimensions, TextInput,} from 'react-native';
import ImgBanner from "../../../components/ImgBanner";
import CategoryGroup from "../../../components/CategoryGroup";
import SearchBox from "../../../components/SearchBox";
import TextCard from "../../../components/textCard";
import ItemList from "../../../components/ItemList";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {nav: this.props.navigation}
    }

    static navigationOptions = {
        headerTitle: 'Home',

        headerLeft: (
            <Button onPress={() => navigation.navigate('Menu')}>Left</Button>
        ),
        headerRight: (
            <Button onPress={() => alert("test success")}>Right</Button>
        )
    };

    render() {
        return (
            <View style={{width: '100%', height: '100%', backgroundColor: '#f00'}}>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: '#f0f'}}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{backgroundColor: '#e5e5e5'}}>
                        <ImgBanner/>
                        <CategoryGroup/>
                        <SearchBox/>
                        <TextCard title={'인기 상품'} />
                        <ItemList navigation={this.props.navigation}/>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
