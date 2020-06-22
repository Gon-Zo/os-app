import React from 'react'
import { Image , SafeAreaView, View, Text, Button, ScrollView} from 'react-native'

export default ({route , navigation}) => {

    const { itemId } = route.params;
    const { otherParam } = route.params;

    return (
        <>
            <SafeAreaView>
                <Button title={"Back"} onPress={()=>{
                    navigation.goBack()
                }} />
                <View>
                    <Text>{itemId}</Text>
                    <Text>{otherParam}</Text>
                </View>
                {/*<ScrollView>*/}
                    <View>
                        <Image source={{uri:'http://bit.ly/2GfzooV'}}/>
                    </View>
                {/*</ScrollView>*/}
            </SafeAreaView>
        </>
    )
}
