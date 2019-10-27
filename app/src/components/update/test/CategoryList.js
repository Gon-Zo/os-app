import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {Layout} from "react-native-ui-kitten";
import * as screen from "../../../public/styles/comm";


var tempArray = [
    {title: "All1"},
    {title: "All2"},
    {title: "All3"},
    {title: "All4"},
    {title: "All5"},
    {title: "All6"},
    {title: "All7"},
    {title: "All8"},
    {title: "All9"},
    {title: "All10"},
    {title: "All11"},
]

class CategoryText extends Component {
    render() {
        return (
            <View style={{
                width: 70,
                height: '100%',
                backgroundColor: "#00f",
                alignItems: 'center',
                justifyContent: 'center'
            }}
                  key={this.props.keys}>
                <TouchableOpacity onPress={() => {
                    console.log("=========[Category Value]=========");
                    console.log(tempArray[this.props.keys]);
                    console.log("==================================")
                }}>
                    <Text style={{
                        color: '#fff',
                        fontWeight: 'bold'
                    }}>
                        {this.props.category}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default class CategoryList extends Component {

    _renderCategory(text, key) {

        return (
            <CategoryText category={text} keys={key}/>
        )
    }

    render() {
        return (
            <Layout style={{
                width: screen.widthPercentageToDP("100%"),
                height: 30,
                backgroundColor: '#f00',
                marginTop: 10,
                flexDirection: 'row'
            }}>
                <ScrollView horizontal={true}>
                    {
                        tempArray.map((m, index) => this._renderCategory(m.title, index))
                    }
                </ScrollView>
            </Layout>
        );
    }
}
