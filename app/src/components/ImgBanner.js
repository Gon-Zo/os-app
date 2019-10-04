import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native'
import Carousel from "react-native-banner-carousel";

// <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;

const images = [
    "../common/img/test1.jpg",
    "../common/img/test1.jpg",
    "../common/img/test1.jpg"
];

export default class ImgBanner extends Component {

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{width: BannerWidth, height: BannerHeight}}
                       source={require('../public/img/test1.jpg')}
                />
            </View>
        );
    }


    render() {
        return (
            <Carousel
                autoplay
                autoplayTimeout={5000}
                loop
                index={0}
                pageSize={BannerWidth}>
                {images.map((image, index) => this.renderPage(image, index))}
            </Carousel>
        );
    }
}
