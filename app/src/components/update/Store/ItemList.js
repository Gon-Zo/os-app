import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

var tempArray = [
    {idx: 1},
    {idx: 2},
    {idx: 3},
    {idx: 4},
    {idx: 5},
    {idx: 6},
    {idx: 7},
    {idx: 8},
    {idx: 9},
    {idx: 10},
];

class ItemCard extends Component{


    render(){
        return(
            <View style={[styles.child, {backgroundColor: 'transparent'}]} key={this.props.key}>
                <TouchableOpacity style={styles.test} onPress={() => {
                    alert("test success")
                }}>
                    <Text style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        fontSize: 20,
                        color: '#f00',
                        fontWeight: "bold"
                    }}>{this.props.idx}</Text>

                    <View style={{
                        borderRadius: 10,
                        overflow: 'hidden'
                    }}>
                        <ImageBackground
                            style={{
                                resizeMode: 'stretch',
                                width: '100%', height: '100%',
                                position: 'relative'
                            }} source={require("../../../public/img/test11.jpg")}>

                            <View style={{
                                width: '100%',
                                height: 30,
                                position: 'absolute',
                                bottom: 10
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 13,
                                    paddingLeft: 10,
                                    fontWeight : 'bold',
                                    color : '#fff'
                                }}>
                                    나이키 에어포스
                                </Text>

                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


export default class ItemList extends Component {

    _renderCardTest(text , index) {
        return (
            <ItemCard idx={text} key={index}/>
        )
    }

    render() {
        return (
            <View style={[styles.parent]}>
                {tempArray.map( (m , index) => this._renderCardTest(m.idx , index))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        // width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    child: {
        width: '48%',
        margin: '1%',
        aspectRatio: 1,
        position: 'relative'
    },
    test: {
        width: '100%',
        height: 200,
        padding: 10,
    }
})
