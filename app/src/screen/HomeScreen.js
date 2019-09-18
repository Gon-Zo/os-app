import React, {Component} from 'react';
import {Layout, Text, Button} from 'react-native-ui-kitten'
import {SafeAreaView, View, StyleSheet, ScrollView, StatusBar, Image, Dimensions,} from 'react-native';
import Carousel from "react-native-banner-carousel";
import ImgBanner from "../component/ImgBanner";


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "../common/img/test1.jpg",
    "../common/img/test1.jpg",
    "../common/img/test1.jpg"
];


export default class HomeScreen extends Component {

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
                    <ScrollView style={{backgroundColor: '#fff'}}>
                        <View>
                            <ImgBanner/>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}


