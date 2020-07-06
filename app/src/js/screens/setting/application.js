import React from 'react'
import {StatusBar , SafeAreaView , Button} from "react-native";
import {Text} from "react-native-paper";


export default ({navigation}) => {
    return (
        <>
            <StatusBar></StatusBar>
            <SafeAreaView>
                <Button title={"Back"}
                        onPress={()=>{
                            navigation.goBack()
                        }}/>
                <Text>
                    TEST
                </Text>
            </SafeAreaView>
        </>
    )
}

// unction SettingContent(props) {
//
//     const theme = props.theme.data
//
//     const [isEnabled, setIsEnabled] = useState(theme);
//
//     const dispatch = props.dispatch
//
//
//     return (
//         <View style={{
//             flex: 1,
//             flexDirection: 'row',
//         }}>
//
//             <View style={{
//                 flexDirection: 'column',
//                 alignItems: 'stretch'
//             }}>
//                     <Text>다크모드 </Text>
//                 <Switch
//                     trackColor={{false: "#767577", true: "#81b0ff"}}
//                     thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//                     ios_backgroundColor="#3e3e3e"
//                     onValueChange={(val) => {
//                         setIsEnabled(val)
//                         onIsTheme(dispatch, val)
//                         const item = val ? THEME.D : THEME.L
//                         AsyncStorage.setItem("theme", item).then(r => console.log("success"))
//                     }}
//                     value={isEnabled}
//                 />
//             </View>
//
//         </View>
//     )
// }

