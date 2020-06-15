import React from 'react'
import {View,
    Text,
    StatusBar,
    SafeAreaView,
    Button,
    TouchableOpacity,
    StyleSheet ,
    ScrollView
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import {APP_OS} from "../../public/comm";
import { FlatGrid  , SectionGrid } from 'react-native-super-grid';
import {RandomColor} from "../../public/colors";

export default ({navigation}) => {

    React.useLayoutEffect(()=>{

        navigation.setOptions({
            headerLeft : () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{paddingLeft: 10}}>
                    <Ionicons name={`${APP_OS}-arrow-back`} color="#424242" size={20}/>
                </TouchableOpacity>
            )
        })

    },[navigation])

    let items = RandomColor

    return (
        <>
            <StatusBar/>
            <SafeAreaView>
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

