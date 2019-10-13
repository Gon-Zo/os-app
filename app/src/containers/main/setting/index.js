import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, StatusBar} from 'react-native';
import {Layout, Text, Button} from "react-native-ui-kitten";
import ProfileCard from "../../../components/ProfileCard";
import MenuGroup from "../../../components/MenuGroup";
import {connect} from 'react-redux'

class SettingScreen extends Component {

    constructor(props, context) {
        super(props, context)
    }

    renderLogoutBtn() {
        if(this.props.state){
            return (
                <View styls={{
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <Button onPress={() => {
                        alert("Logout")
                    }}>Logout</Button>
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
                        style={{
                        backgroundColor: "#c9c9c9"
                    }}>
                        <ProfileCard navigation={this.props.navigation}/>
                        <MenuGroup navigation={this.props.navigation}/>

                        {this.renderLogoutBtn()}
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

export default connect(mapStateToProps)(SettingScreen)
