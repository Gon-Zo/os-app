import React  , {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {SafeAreaView  , StatusBar  , View , Text , Button } from 'react-native'
import {STATE_TYPE} from "../../modules/enum";
import {TextInput} from "react-native-paper";
import {httpCount, httpTxt} from "../../actions/test";

export default () => {

    const initData = useSelector(state=>state.Test , [])

    const dispatch = useDispatch()

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <CountView payload={initData.count} dispatch={dispatch}/>
                <InputView payload={initData.txt} dispatch={dispatch}/>
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
            <Button title="+"
                    color="#c9c9c9"
                    onPress={() => {
                        httpCount(dispatch, '+')
                    }}/>
            <Text>
                Home >> {payload.data}
            </Text>
            <Button title="-"
                    color="#c9c9c9"
                    onPress={() => {
                        httpCount(dispatch, '-')
                    }}/>
        </View>
    )
}

function InputView (props) {

    const dispatch = props.dispatch
    const payload = props.payload

    let [value, setValue] = useState('')

    return (
        <View>
            <Text>test ::r{payload.data}</Text>
            <TextInput
                onChangeText={text => setValue(text)}
                value={value}/>
            <Button title={"Button"} onPress={() => httpTxt(dispatch, value)}/>
      </View>
    );

}
