import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    ScrollView,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground,
    Picker
} from 'react-native';
import {Layout} from "react-native-ui-kitten";
import Header from "../../../components/update/Header";
import CategoryList from "../../../components/update/test/CategoryList";
import ItemList from "../../../components/update/Store/ItemList";
import SelectBox from "../../../components/update/Store/SelectBox";


export default class StoreScreen extends Component {




    render() {
        console.disableYellowBox = true;
        return (
            <Layout style={{flex: 1}}>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView style={{flex: 1}}>

                    <Header type={'S'}/>

                    <CategoryList/>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{flex: 1, flexGrow: 1 , marginTop : 5}}
                    >

                        <SelectBox/>
                        <ItemList/>

                    </ScrollView>
                </SafeAreaView>
            </Layout>
        );
    }
}
