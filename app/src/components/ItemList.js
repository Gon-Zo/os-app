import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Layout, Text} from "react-native-ui-kitten";
import {createDrawerNavigator} from "react-navigation-drawer";
import DetailNav from "../containers/single/detail";



const items = [
    {title: '물냉면', price: '100,00원'},
    {title: '비빔면', price: '100,00원'},
    {title: 'test3', price: '100,00원'},
    {title: 'test4', price: '100,00원'},
];

class ItemCard extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate('Detail');
                }}
                activeOpacity={1}
                style={{
                width: 180,
                height: 200,
                backgroundColor: '#0f0',
                borderWidth: 1,
                borderColor: '#f00',
                alignItems: 'center',
                paddingLeft: 30,
                paddingRight: 30,
                // justifyContent: 'center',
            }}>
                <Image style={{width: 180, height: 120, backgroundColor: '#fff', flexDirection: 'row'}}
                       source={require("../public/img/test3.jpg")}/>
                <Text style={{
                    flexDirection: 'row',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 5
                }}>{this.props.title}</Text>
                <Text style={{flexDirection: 'row',}}>{this.props.price}</Text>
            </TouchableOpacity>
        )
    }
}


export default class ItemList extends Component {

    renderItem(title, price) {
        return (
            <ItemCard navigation={this.props.navigation} title={title} price={price}/>
        )
    }


    render() {
        return (
            <Layout style={{
                height: 400,
                backgroundColor: '#ff0',
                marginTop: 10,
                marginBottom: 30,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
            }}>
                {items.map((i) => this.renderItem(i.title, i.price))}
            </Layout>
        );
    }
}
