import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'

class MenuButton extends Component{

    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#f0f' , alignItems : 'center' , justifyContent : 'center'}}>
                <FontAwesomeIcon icon={this.props.iconName} size={this.props.size} color={this.props.color}/>
            </View>
        )
    }
}


export default class MenuGroup extends Component {
    render() {
        return (
            <View style={{
                padding: 20 ,
                paddingLeft : 40 ,
                paddingRight : 40,
            }}>
                <View style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: '#00f',
                    flexDirection: 'row'
                }}>
                    <View style={{flex: 1, backgroundColor: '#0ff'}}><Text>1</Text></View>
                    <View style={{flex: 1, backgroundColor: '#0ff'}}><Text>2</Text></View>
                    <View style={{flex: 1, backgroundColor: '#0ff'}}><Text>3</Text></View>
                    <MenuButton iconName={icon.faCog} size={20} color={"#424242"}/>
                </View>

                <View style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: '#00f',
                    flexDirection: 'row'
                }}>
                    <View style={{flex: 1, backgroundColor: '#0ff'}}><Text>1</Text></View>
                    <View style={{flex: 1, backgroundColor: '#0ff'}}><Text>2</Text></View>
                    <View style={{flex: 1, backgroundColor: '#0ff'}}><Text>3</Text></View>
                    <View style={{flex: 1, backgroundColor: '#0ff'}}><Text>4</Text></View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        height: 100,
        backgroundColor: '#f00',
        flexDirection: 'row',
        margin: 10
    }
})
