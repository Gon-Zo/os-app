import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {Text, Layout, Icon, Button} from "react-native-ui-kitten";
import IconButton from "./IconButton";

const userInfo = {
    id: 'test1',
    name: 'tester1',
    phone: "zcx-xzcz-xzcx"
};


class TextCard extends Component {
    render() {
        return (
            <View style={styles.textLine}>
                <Text>{this.props.text}</Text>
            </View>
        );
    }
}

export default class ProfileCard extends Component {

    renderTextCard(text) {
        return (
            <TextCard text={text}/>
        )
    }

    test() {
        return Object.keys(userInfo)
    }


    render() {
        return (
            <Layout style={styles.wrap}>

                <View style={styles.iconWrap}>
                    <IconButton style={{
                        alignItems: 'flex-end',
                    }}/>
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
                        source={require("../common/img/default.png")}
                    />
                </View>
                {/* Image Layout end */}

                <View style={styles.infoCard}>
                    {this.renderTextCard(userInfo['id'])}
                    {this.renderTextCard(userInfo['name'])}
                    {this.renderTextCard(userInfo['phone'])}
                </View>
                {/*User Info */}
            </Layout>
        );
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
