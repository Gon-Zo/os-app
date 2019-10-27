import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {createDrawerNavigator} from "react-navigation-drawer";
import DetailCard from "../../../components/DetailCard";
import DetailContent from "../../../components/DetailContent";
import DetailTapScreen from "../../../components/Tap";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import * as icon from '@fortawesome/free-solid-svg-icons'
import * as app from '../../../public/styles/comm'


//          showsHorizontalScrollIndicator={false]
class DetailScreen extends Component {
    _render() {
        if (app.os === "ios") {
            return (
                <View style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: '#f00',
                    justifyContent: 'center'
                }}>
                    <FontAwesomeIcon icon={icon.faAngleLeft} size={30} color={'#00f'} onPress={() => {
                        console.log("Back value ")
                    }}/>
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{backgroundColor: '#c9c9c9'}}>
                        <DetailCard/>
                        <DetailContent/>
                        <DetailTapScreen/>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const DetailNav = createDrawerNavigator({
    Detail: DetailScreen
})

export default DetailNav
