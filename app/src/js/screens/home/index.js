import React  from 'react'
import {useDispatch, useSelector} from "react-redux";

import {SafeAreaView  , StatusBar  , View , Text , Button } from 'react-native'
import {httpInput, httpOutput} from "../../actions/home";

export default () => {

    const initData = useSelector(state=>state.Home , [])

    const dispatch = useDispatch()

    console.log(JSON.stringify(initData))

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <View>
                    <Button title="+" onPress={()=>{
                        console.log("test succss")
                        httpInput(dispatch)
                    }} />
                    <Text>
                        Home >> {initData.count}
                    </Text>
                    <Button title="-" onPress={()=>{
                       httpOutput(dispatch)
                    }}/>
                </View>
            </SafeAreaView>
        </>
    )

}
