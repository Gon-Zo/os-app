import React from 'react'
import {View,
    Text,
    StatusBar,
    SafeAreaView,
    StyleSheet ,
    ScrollView
} from 'react-native'
import { FlatGrid  , SectionGrid } from 'react-native-super-grid';
import {RandomColor} from "../../public/colors";
import {BackButton} from "../common/button";

export default ({navigation}) => {

    React.useLayoutEffect(()=>{

        navigation.setOptions({
            headerLeft : () => (
              <BackButton  navigation={navigation}/>
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

