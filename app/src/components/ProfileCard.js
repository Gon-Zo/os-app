import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview'
import {Text, Layout, Button} from "react-native-ui-kitten";
import {connect} from "react-redux";
import InputText from "./update/custom/InputText";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import * as icon from '@fortawesome/free-solid-svg-icons'
import TextButton from "./update/TextButton";
import NotoSans from "./update/custom/NotoSans";
import IconButton from "./update/custom/IconButton";

// DEMO DATA
const userInfo = {
    id: 'test1',
    name: 'tester1',
    phone: "zcx-xzcz-xzcx"
};

// TextCard UI
class TextCard extends Component {
    render() {
        return (
            <View style={styles.textLine}>
                <Text>{this.props.text}</Text>
            </View>
        );
    }
}

// Profile UI
class Profile extends Component {

    renderTextCard(text) {
        return (
            <TextCard text={text}/>
        )
    }

    render() {
        return (

            <View style={styles.wrap}>
                <View style={{
                    width: "100%",
                    height: 100,
                    backgroundColor: '#000',
                    marginTop: 30,
                    flexDirection: 'row',
                    alignItems : 'center',
                    justifyContent : 'center'
                }}>

                    <View style={{
                        width: 80,
                        height: 80,
                        backgroundColor: '#00f',
                        borderRadius: 10,
                        overflow: 'hidden',
                        marginLeft : 5,
                        marginRight : 5,
                    }}>
                        <Image
                            style={{
                                width: 80,
                                height: 80,
                            }}
                            source={require("../public/img/default.png")}/>
                    </View>

                    <View style={{backgroundColor: '#f0f',
                        marginLeft : 5,
                        marginRight : 5,
                    }}>
                        <View>
                            <NotoSans
                                type={'Medium'}
                                style={{
                                    color: '#fff',
                                    fontSize: 13
                                }} text={'wh*t*1*8*9'}/>
                        </View>
                        <View>
                            <NotoSans
                                type={'Medium'}
                                style={{
                                    color: '#fff',
                                    fontSize: 16
                                }}
                                text={'Customer'}/>
                        </View>
                    </View>

                    <View style={{
                        marginLeft : 5,
                        marginRight : 5,
                    }}>
                        <Button>My Info</Button>
                        <Button>My Store Info</Button>
                    </View>
                </View>

                <View style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Button style={{
                        width: 60,
                        height: 60,
                        marginLeft: 5,
                        marginRight: 5
                    }}>
                    </Button>
                    <Button style={{
                        width: 60,
                        height: 60,
                        marginLeft: 5,
                        marginRight: 5
                    }}/>
                    <IconButton/>
                </View>

                <View style={{
                    width : '100%',
                    height : 50
                }}>
                    <Image
                    style={{
                        width:'100%',
                        height : 70,
                        backgroundColor: '#00f',
                        resizeMode: 'stretch'
                    }}
                    source={require("../public/img/wideTest.jpeg")}/>
                </View>

                {/*<View style={styles.iconWrap}>*/}
                {/*    /!*<IconButton icon={EditIcon}/>*!/*/}
                {/*    <Icon name='pencil-square-o' size={40} color='#424242' onPress={() => {*/}
                {/*        alert("start to test")*/}
                {/*    }}/>*/}
                {/*</View>*/}
                {/*<View style={styles.cardWrap}>*/}
                {/*    <Image*/}
                {/*        style={{*/}
                {/*            width: 130,*/}
                {/*            height: 130,*/}
                {/*            borderRadius: 50,*/}
                {/*            borderWidth: 1,*/}
                {/*            borderColor: '#7f7f7f'*/}
                {/*        }}*/}
                {/*        source={require("../public/img/default.png")}*/}
                {/*    />*/}
                {/*</View>*/}
                {/* Image Layout end */}
                {/*<View style={styles.infoCard}>*/}
                {/*    {this.renderTextCard(userInfo['id'])}*/}
                {/*    {this.renderTextCard(userInfo['name'])}*/}
                {/*    {this.renderTextCard(userInfo['phone'])}*/}
                {/*</View>*/}
                {/*User Info */}

            </View>
        );
    }
}

class LoginBtn extends Component {

    _RenderTest() {

        console.log("WEB VIEW UP");

        return (
            <WebView
                originWhitelist={['*']}
                source={{html: '<h1>Hello world</h1>'}}
            />
        )
    }

    render() {
        return (
            <View style={{
                width: '100%',
                height: 300,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Button
                    style={{
                        width: 200,
                        height: 50,
                        margin: 5,
                    }}
                    navigation={this.props.navigation}
                    onPress={() => this.props.navigation.navigate('Login')}> 로그인하기 </Button>

                <TextButton title={'회원 가입하기'} onPress={() => {
                    this.props.navigation.navigate('Sign')
                }}></TextButton>

                <TextButton title={'카카오 로그인'} onPress={() => {
                    alert("kakao test success!!")
                }}/>
            </View>
        );
    }
}

class ProfileCard extends Component {

    renderProfileCard() {
        return (
            <Profile/>
        )
        // return this.props.state ?
        //     <Profile/> : <LoginBtn navigation={this.props.navigation}/>
    }


    render() {
        return (
            <Layout>
                {this.renderProfileCard()}
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.login.loginInfo.state
    }
}

const styles = StyleSheet.create({

    wrap: {
        width: '100%',
        height: 300,
        backgroundColor: '#f00',
        marginTop: 10,
    },

    iconWrap: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        paddingRight: 10,
        marginTop: 10
    },
    cardWrap: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoCard: {
        width: '100%',
        height: 90,
    },

    textLine: {
        width: '100%',
        height: 30,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export default connect(mapStateToProps)(ProfileCard)
