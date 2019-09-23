import React, {Component} from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';


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

    constructor(props){
        super(props)
    }


    renderCard(src, idx) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.cardBox} onPress={() => {
                this.props.navigation.navigate("Pop")
            }}>
                <Image style={{width: 100, height: 100}}
                       source={require('../common/img/test2.jpg')}/>
            </TouchableOpacity>
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
        backgroundColor: '#f00',
        marginTop: 30,
    },
    cardBox: {
        backgroundColor: '#0ff',
        flexDirection: 'column',
    },
})
