import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {Button, Layout} from "react-native-ui-kitten";
import ProfileCard from "../../../components/ProfileCard";
import MenuGroup from "../../../components/update/MenuGroup";
import {connect} from 'react-redux'
import CommTest from "../../../components/update/test/ComTest";


class EtcScreen extends Component {

    constructor(props, context) {
        super(props, context)
    }

    _renderLogoutButton() {
        if (this.props.state) {
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

                        <CommTest/>


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

