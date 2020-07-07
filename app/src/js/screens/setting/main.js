import React from 'react'
import {
    SafeAreaView,
    StatusBar,
    View
} from "react-native";
import {GET_COLOR} from "../../public/colors";
import {IconAndTextButton} from "../common/button";

export default ({navigation}) => {

    const color = GET_COLOR()

    return (
        <>
            <StatusBar/>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: GET_COLOR().BACKGROUND_COLOR
            }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 30,
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: color.FG1,
                        borderRadius : 15 ,
                        borderWidth : 1 ,
                        borderColor : color.SECONDARY
                    }}>

                        <IconAndTextButton
                            onPress={() => {
                                alert("test succeee")
                            }}
                            icon={"commenting"}
                            label={"고객센터"}
                            color={color.PRIMARY}
                            size={24}
                        />

                        <IconAndTextButton
                            onPress={() => {
                                alert("test succeee")
                            }}
                            icon={"info-circle"}
                            label={"공지사항"}
                            color={color.PRIMARY}
                            size={24}
                        />

                        <IconAndTextButton
                            onPress={() => {
                                navigation.navigate("Application")
                            }}
                            icon={"cog"}
                            label={"설정"}
                            color={color.PRIMARY}
                            size={24}
                        />

                    </View>
                </View>

                <View style={{
                    flex : 6,
                    flexDirection : 'row',
                    backgroundColor : '#c9c9c9'
                }}>

                </View>


            </SafeAreaView>
        </>
    )
}

