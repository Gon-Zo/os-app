import React from 'react'
import {StatusBar , SafeAreaView , Text , View , Button , StyleSheet , AsyncStorage} from 'react-native'
import {isFalse} from "../../public/comm";
import {useSelector} from "react-redux";
import {onTest} from "../../actions/statics";

export default ({navigation}) =>{

    const initData = useSelector(state=>state.Statics , [])

    return (
        <>
            <StatusBar/>
            <SafeAreaView>
                <View style={styles.test1}>
                    <Text>
                        Setting
                    </Text>
                </View>
                <LoginBtnGroup navigation={navigation} isLogin={initData.isLogin}/>
            </SafeAreaView>
        </>
    )
}

function LoginBtnGroup(props) {

    const navigation = props.navigation

    const isLogin = props.isLogin

    if (isFalse(isLogin.data)) {
        return (
            <>
                <View>
                    <Button title="Auto Login 1"/>
                    <Button title="Auto Login 2" onPress={()=>{
                        onTest()
                    }}/>
                    <Button title="Auto Login 3" onPress={() => {
                        // AsyncStorage.getItem("test")
                        //     .then(r => console.log('then 1111111111111', r))
                        //     .catch(err => console.log(err))
                    }}/>

                    <Button title="로그인" onPress={() => navigation.navigate("Login")}/>
                </View>
                <Button title="Open Modal" onPress={() => navigation.navigate('SignUp')}/>
            </>
        )
    }

    return (
        <>
            <View>
                <Text>
                    Login User
                </Text>
                <Button title={"Test"}
                        onPress={() => {
                            onTest()
                            // AsyncStorage.getItem("test")
                            //     .then(r => console.log('then', r))
                            //     .catch(err => console.log(err))
                        }}/>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    test1 : {
        backgroundColor : '#f00'
    }
})
