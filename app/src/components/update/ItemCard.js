import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, ImageBackground} from 'react-native';
import * as screen from '../../public/styles/comm'

import ItemBtn from "./ItemBtn";

var tempArray = [
    {idx: 0},
    {idx: 1},
    {idx: 2},
    {idx: 3},
    {idx: 4},
    {idx: 5},
]

export default class ItemCard extends Component {

    _renderCard(idx) {
        return (
            <View style={styles.cardBox} key={idx}>
                <ImageBackground source={require("../../public/img/test11.jpg")} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'stretch',
                    position: 'relative'
                }}>
                    <View style={{
                        width: "100%",
                        height: 50,
                        backgroundColor: 'transparent',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}>

                        <View style={{
                            width: 60,
                            height: 40,
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>New</Text>
                        </View>
                    </View>
                    {/* New Box */}

                    <View style={{
                        width: '100%',
                        height: 80,
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        bottom: 50,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginLeft: 10
                        }}>나이키 에어 포스</Text>
                    </View>
                    <ItemBtn navigation={this.props.navigation}/>
                </ImageBackground>
            </View>
        )
    }

    render() {
        return (
            <View>
                <ScrollView horizontal={true} howsVerticalScrollIndicator={false}>
                    {tempArray.map((i) => this._renderCard(i.idx))}
                </ScrollView>
            </View>
        );
    }
}
//

const styles = StyleSheet.create({
    cardBox: {
        // 250
        width: screen.changeDP(560),
        height: 300,
        backgroundColor: '#fff',
        margin: screen.changeDP(30),
        borderRadius: 10,
        overflow: 'hidden'
    },
    imgSt: {width: 180, height: 120, backgroundColor: '#fff', flexDirection: 'row'},
    btnSty: {
        width: '50%',
        height: '100%',
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    }
});
