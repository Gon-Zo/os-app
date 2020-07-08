import React from 'react'
import {
    SafeAreaView,
    StatusBar,
    View
} from "react-native";
import {GET_COLOR} from "../../public/colors";
import {IconAndTextButton} from "../common/button";
import {Text} from "react-native-paper";

function TextItems(props) {

    const color = GET_COLOR()

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column'
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
            }}>
                <Text style={{
                    textAlign: 'justify',
                    lineHeight: 35,
                    fontSize: 17,
                    paddingLeft: 5,
                    color : color.PRIMARY
                }}>
                    [공지] 2020 . 01 . 01 업데이트
                </Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                textAlign: 'center',
                paddingLeft: 5,
            }}>
                <Text style={{
                    textAlign: 'justify',
                    lineHeight: 30,
                    color : color.PRIMARY
                }}>
                    2020.01.01
                </Text>
            </View>
        </View>
    )

}

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
                    flex: 0.7,
                }}>
                    <TextItems/>
                </View>

                <View style={{
                    flex : 6,
                    flexDirection : 'row',
                    backgroundColor : '#c9c9c9'
                }}></View>


            </SafeAreaView>
        </>
    )
}

