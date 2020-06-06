import React  from 'react'
import {useDispatch, useSelector} from "react-redux";

import {SafeAreaView  , StatusBar  , View , Text , Button } from 'react-native'
import {httpInput, httpOutput} from "../../actions/home";
import {STATE_TYPE} from "../../modules/enum";

export default () => {

    const initData = useSelector(state=>state.Home , [])

    const dispatch = useDispatch()

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <CountView payload={initData.count} dispatch={dispatch}/>
            </SafeAreaView>
        </>
    )

}

function CountView(props) {

    const payload = props.payload

    const dispatch = props.dispatch

    if (payload.type == STATE_TYPE.L) return <View><Text>Loading...</Text></View>

    if (payload.type == STATE_TYPE.E) return <View><Text>Error</Text></View>

    return (
        <View>
            <Button title="+" onPress={() => {
                httpInput(dispatch)
            }}/>
            <Text>
                Home >> {payload.data}
            </Text>
            <Button title="-" onPress={() => {
                httpOutput(dispatch)
            }}/>
        </View>
    )
}
