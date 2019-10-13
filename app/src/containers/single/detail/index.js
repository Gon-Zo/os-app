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

//          showsHorizontalScrollIndicator={false]
class DetailScreen extends Component {
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
