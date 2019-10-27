import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import * as screen from "../../public/styles/comm";
import SearchForm3 from "./Store/SearchForm3";

export default class Header extends Component {


    constructor(props) {
        super(props)
    }

    _renderTitle() {
        let type = this.props.type;
        switch (type) {
            case 'S':
                return '스토어';
            case 'B':
                return '장바구니';
            default :
                return '무제'
        }
    }

    _renderSearchForm() {
        if (this.props.type === 'S') {
            return (
                <SearchForm3/>
            )
        }
    }

    render() {
        return (
            <View style={{
                width: screen.widthPercentageToDP("100%"),
                height: 50,
                backgroundColor: '#fff',
                justifyContent: 'center',
            }}>

                <View style={{
                    position: "relative",
                }}>
                    <Text style={{
                        fontSize: 25,
                        marginLeft: 10,
                        fontWeight: 'bold',
                        fontFamily : 'BMHANNA'
                    }}>
                        {this._renderTitle()}
                    </Text>
                    {this._renderSearchForm()}
                </View>
                {/*    TitleBox end*/}
            </View>
            // {/*Header Comm*/}
        );
    }
}
