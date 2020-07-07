import React from 'react'
import {
    SafeAreaView,
    StatusBar,
    FlatList ,
    TouchableOpacity,
    Text ,
    View
} from "react-native";
import {GET_COLOR} from "../../public/colors";

export default () => {
    return (
        <>
            <StatusBar/>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: GET_COLOR().BACKGROUND_COLOR
            }}>
                <View>
                    <TouchableOpacity>
                        <Text>Application</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    )
}

