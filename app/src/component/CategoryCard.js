import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Carousel from "react-native-banner-carousel";


const images = [
    "../common/img/test2.jpg",
    "../common/img/test2.jpg",
    "../common/img/test2.jpg",
    "../common/img/test2.jpg",
    "../common/img/test2.jpg",
    "../common/img/test2.jpg",
    "../common/img/test2.jpg",
    "../common/img/test2.jpg",
];


export default class CategoryCard extends Component {

    renderCard(src, idx) {
        return (
            <View style={styles.cardBox}>
                <Image style={{width: 100, height: 100}}
                       source={require('../common/img/test2.jpg')}/>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.cardWrap}>
                {images.map((image, index) => this.renderCard(image, index))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardWrap: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor : '#f00',
        marginTop : 30,
    },
    cardBox: {
        flexDirection: 'column',
    },
})
