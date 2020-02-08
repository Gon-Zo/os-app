import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {Button, Layout} from "react-native-ui-kitten";
import ProfileCard from "../../../components/ProfileCard";
import {connect} from 'react-redux'
import RollingTextBar from "../../../components/update/RollingTextBar";
import {WebView} from 'react-native'

class EtcScreen extends Component {

    constructor(props, context) {
        super(props, context)
    }

    _LogoutFunc(){
        alert("Logout success")
        console.log("success to logout")
    }

    _renderLogoutButton() {
        if (this.props.state) {
            return (
                <View styls={{
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <Button onPress={() => {this._LogoutFunc()}}>Logout</Button>
                </View>
            )
        }

    }


    render() {
        return (
            <Layout>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{backgroundColor: "#c9c9c9"}}>
                        <ProfileCard navigation={this.props.navigation}/>

                        <RollingTextBar/>

                        {/*<MenuGroup2/>*/}

                        {/*<MenuGroup/>*/}

                        {this._renderLogoutButton()}

                    </ScrollView>
                </SafeAreaView>
            </Layout>
        );
    }
}


function mapStateToProps(state) {
    return {
        state: state.login.loginInfo.state
    }
}

export default connect(mapStateToProps)(EtcScreen)

