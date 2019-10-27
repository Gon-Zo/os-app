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
    ImageBackground
} from 'react-native';
import {Layout} from "react-native-ui-kitten";
import Header from "../../../components/update/Header";
import CategoryList from "../../../components/update/test/CategoryList";
import ItemList from "../../../components/update/Store/ItemList";



export default class StoreScreen extends Component {

    render() {
        console.disableYellowBox = true;
        return (
            <Layout>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>

                    <Header type={'S'}/>

                    <CategoryList/>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginBottom: 150,
                            flexGrow: 1
                        }}
                        removeClippedSubviews={false}
                    >

                        <View style={{
                            width : '100%' ,
                            height:  30 ,
                            backgroundColor : '#f00'
                        }}>
                        </View>



                        <ItemList/>

                    </ScrollView>
                </SafeAreaView>
            </Layout>
        );
    }
}

// const styles = StyleSheet.create({
//     parent: {
//         // width: '100%',
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//     },
//     child: {
//         width: '48%',
//         margin: '1%',
//         aspectRatio: 1,
//         position: 'relative'
//     },
//     test: {
//         width: '100%',
//         height: 200,
//         padding: 10,
//     }
// })
