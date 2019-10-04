import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput
} from 'react-native';
// import extractPolyPoints from "react-native-svg/lib/typescript/lib/extract/extractPolyPoints";
import {createDrawerNavigator} from "react-navigation-drawer";

class PopScreen extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {user: []}
    // }

    // componentDidMount() {
    //     let url = `http://ec2-52-79-243-102.ap-northeast-2.compute.amazonaws.com/api/user`;
    //
    //     axios.get(url)
    //         .then((res) => {
    //             this.setState({user: res.data});
    //             alert("success")
    //         })
    //         .catch(console.log)
    // }


    render() {
        return (
            <View>
                {/*<StatusBar barStyle="dark-content"/>*/}
                {/*<SafeAreaView>*/}
                {/*    <ScrollView>*/}
                {/*        <View>*/}
                {/*            {this.state.user.map((value) =>*/}
                {/*                <Text> {value.id + ' ::' + value.name + '::' + value.birthDate} </Text>*/}
                {/*            )}*/}
                {/*        </View>*/}
                {/*    </ScrollView>*/}
                {/*</SafeAreaView>*/}
                {/*<BottomUI/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        height: 80,
        backgroundColor: '#f00'
    }
});

const TempNav = createDrawerNavigator({
    Temp: {screen: PopScreen},
});

export default TempNav
