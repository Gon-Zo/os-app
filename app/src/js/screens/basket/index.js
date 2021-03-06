import React from 'react'
import {View,
    Text,
    StatusBar,
    SafeAreaView,
    StyleSheet ,
    ScrollView
} from 'react-native'
import { FlatGrid  , SectionGrid } from 'react-native-super-grid';
import {GET_COLOR, RandomColor} from "../../public/colors";
import {useSelector} from "react-redux";
import {isFalse} from "../../public/comm";

export default ({navigation}) => {

    const isLogin = useSelector(state => state.Statics, []).isLogin.data

    let items = RandomColor

    if (isFalse(isLogin)) {
        return (
            <>
                <StatusBar/>
                <SafeAreaView style={{
                    flex: 1,
                    backgroundColor: GET_COLOR().BACKGROUND_COLOR
                }}>
                    <Text>로그인이 필요합니다</Text>
                </SafeAreaView>
            </>
        )
    }

    return (
        <>
            <StatusBar/>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor : GET_COLOR().BACKGROUND_COLOR
            }}>
                <ScrollView>
                    <ScrollView nestedScrollEnabled={true}>
                        <FlatGrid
                            itemDimension={130}
                            data={items} style={styles.gridView} // staticDimension={300}
                            // fixed
                            spacing={10}
                            renderItem={({item}) => (
                                <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemCode}>{item.code}</Text>
                                </View>
                            )}
                        />
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height : 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

