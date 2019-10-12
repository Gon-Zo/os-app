import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Image,
    Text
} from 'react-native';
import {Layout, Button, Icon} from "react-native-ui-kitten";
import IconButton from "./IconButton";
import {ShoppingCartIcon, StarIcon} from '../public/Icon'

// StarUI
class StarIconLayout extends Component {

    render() {
        return (
            <View style={styles.starWrap}>
                <IconButton icon={StarIcon}/>
            </View>
        );
    }
}

// Image UI
class DetailImg extends Component {
    render() {
        return (
            <View style={styles.ImgWrap}>
                <Image style={{
                    width: 350,
                    height: 350,
                    resizeMode: 'stretch'
                }}
                       source={require('../public/img/test5.jpg')}
                />
            </View>
        );
    }
}

// text UI
class DetailTitle extends Component {
    render() {
        return (
            <View style={styles.textWrap}>
                <Text style={styles.textSize}>{this.props.title}</Text>
            </View>
        );
    }
}

var title = "Test-Value";

export default class DetailCard extends Component {

    // componentDidMount() {
    //     let url = `http://ec2-52-79-243-102.ap-northeast-2.compute.amazonaws.com/api/user`;
    //
    //     axios.get(url)
    //         .then((res) => {
    //             this.setState({user: res.data});
    //             alert("success")
    //         })
    //         .catch(console.log)
    // }

    render() {
        return (
            <Layout style={styles.wrap}>
                <StarIconLayout/>
                <DetailImg/>
                <DetailTitle title={title}/>
                <View style={styles.buttonGroup}>
                        <IconButton icon={ShoppingCartIcon}/>
                </View>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        height: 500,
        backgroundColor: '#f00',
        marginTop: 10
    },
    starWrap: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    ImgWrap: {
        width: '100%',
        height: 350,
        backgroundColor: '#0ff',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrap: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    textSize: {
        fontSize: 30,
        marginLeft: 10,
        fontWeight : 'bold'
    },
    buttonGroup: {
        width: '100%',
        height : 45 ,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor : '#c9c9c9'
    }
});
