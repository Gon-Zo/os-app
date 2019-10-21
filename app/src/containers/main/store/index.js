import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView, View, StatusBar,} from 'react-native';
import {Layout} from "react-native-ui-kitten";
import SearchForm from "../../../components/update/SearchForm";
import * as screen from '../../../public/styles/comm'
import SearchForm2 from "../../../components/update/SearchForm2";
import Header from "../../../components/update/Header";


export default class StoreScreen extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Layout>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>

                    <Header type={'s'} />

                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View>

                            {/*<SearchForm/>*/}

                            {/*<SearchForm2/>*/}

                            {/*<Layout>*/}
                            {/*    <View>*/}
                            {/*        <View style={{*/}
                            {/*            width : */}
                            {/*        }}>*/}
                            {/*        </View>*/}
                            {/*    </View>*/}
                            {/*</Layout>*/}
                            {/* store content*/}

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Layout>
        );
    }
}
