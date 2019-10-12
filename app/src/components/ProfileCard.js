import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {Text, Layout, Button} from "react-native-ui-kitten";
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <View>
                <View style={styles.iconWrap}>
                    {/*<IconButton icon={EditIcon}/>*/}
                    <Icon name='pencil-square-o' size={40} color='#424242' onPress={()=>{alert("start to test")}}/>
                </View>

                <View style={styles.cardWrap}>
                    <Image
                        style={{
                            width: 130,
                            height: 130,
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: '#7f7f7f'
                        }}
                        source={require("../public/img/default.png")}
                    />
                </View>
                {/* Image Layout end */}

                <View style={styles.infoCard}>
                    {this.renderTextCard(userInfo['id'])}
                    {this.renderTextCard(userInfo['name'])}
                    {this.renderTextCard(userInfo['phone'])}
                </View>
                {/*User Info */}
            </View>
        );
    }
}

class LoginBtn extends Component {
    render() {
        return (
            <Button
                navigation={this.props.navigation}
                onPress={() => this.props.navigation.navigate('Login')}>Login</Button>
        );
    }
}

class ProfileCard extends Component {

    renderProfileCard() {
        return this.props.state ?
            <Profile/> :
            <LoginBtn navigation={this.props.navigation}/>
    }


    render() {
        return (
            <Layout style={styles.wrap}>
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
        backgroundColor: '#fff',
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
