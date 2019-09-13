import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';
import Banner from "../component/Banner";
import color from "../public/style/Color";
import Resolution from "../public/style/Resolution";

export default class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Home',
        headerLeft: (
            <Button title={"left"} onPress={() => alert("test success")}/>
        ),
        headerRight: (
            <Button title={"right"} onPress={() => alert("test success")}/>
        )
    };

    render() {
        return (
            <View style={styles.wrap}>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.contentWrap}>

                            <Banner/>

                            {/*<Text>HomeScreen</Text>*/}
                            {/*<Button*/}
                            {/*    title="Go to Profile"*/}
                            {/*    onPress={() => this.props.navigation.navigate('Detail')}*/}
                            {/*/>*/}

                        </View>
                    </ScrollView>
                </SafeAreaView>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    wrap: {
        backgroundColor: color.test,
        width: Resolution.full.width,
        height: Resolution.full.height
    },

    contentWrap: {
        flex :1 ,
        backgroundColor: color.pop
    }

});
