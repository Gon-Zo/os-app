import React, {useEffect, useState} from 'react'
import {StatusBar , SafeAreaView , Text , View , Button , StyleSheet , AsyncStorage} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {onTest, updateLoginData} from "../../actions/statics";
import {isFalse} from "../../public/comm";

export default ({navigation}) =>{

    const initData = useSelector(state=>state.Statics , [])

    const dispatch = useDispatch();

    let _onUpdate = (val) =>{
        updateLoginData(dispatch, val)
    }

    return (
        <>
            <StatusBar/>
            <SafeAreaView>
                <View style={styles.test1}>
                    <Text>
                        Setting
                    </Text>
                </View>
                <LoginBtnGroup navigation={navigation} isLogin={initData.isLogin.data} onUpdate={_onUpdate}/>
            </SafeAreaView>
        </>
    )
}

// function TestUpdate(props) {
//
//     let [flag, setFlag] = useState(props.flag)
//
//     useEffect(() => {
//         setFlag(props.flag)
//         console.log(">>>>>>>>>>>>>." + JSON.stringify(flag.data))
//     }, [flag])
//
//     if (flag.data){
//        return (
//            <>
//                <View>
//                    <Text>
//                        T
//                    </Text>
//                </View>
//            </>
//        )
//     }else{
//         return (
//             <>
//                 <View>
//                     <Text>
//                         F
//                     </Text>
//                 </View>
//             </>
//         )
//     }
//
// }

function LoginBtnGroup(props) {

    const navigation = props.navigation

    const isLogin = props.isLogin

    const _onUpdate = props.onUpdate

    if (isFalse(isLogin)) {
        return (
            <>
                <View>
                    <Button title="Auto Login 1"/>
                    <Button title="Auto Login 2" onPress={() => {
                        onTest()
                    }}/>
                    <Button title="로그인" onPress={() => navigation.navigate("Login")}/>
                    <Button title="Auto Login 3" onPress={() => {
                    }}/>

                </View>
                <Button title="Open Modal" onPress={() => navigation.navigate('SignUp')}/>
            </>
        )
    } else {

        return (
            <>
                <View>
                    <Text>
                        Login User
                    </Text>
                    <Button title={"로그아웃"} onPress={() => {
                        AsyncStorage.removeItem("token")
                            .then(res => _onUpdate(false))
                            .catch(err => console.log(err))
                    }}/>
                </View>
            </>
        )

    }

}

const styles = StyleSheet.create({
    test1 : {
        backgroundColor : '#f00'
    }
})
