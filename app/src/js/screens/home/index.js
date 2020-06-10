import React from 'react'
import {
    StatusBar,
    SafeAreaView,
    Text,
    View,
    ScrollView
} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default () => {
    return (
        <>
            <StatusBar></StatusBar>
            <SafeAreaView style={{backgroundColor: '#f00', flex: 1}}>
                <ScrollView>
                    <TopItemsView/>
                </ScrollView>
            </SafeAreaView>
       </>
    )
}


function TopItemsView(props) {

    return (
        <View style={{ marginTop : 20}}>
            <View>
                <Text style={{color: '#424242', fontSize: 20 ,
                    fontFamily : 'NotoSansKR-Black'
                }}>Best Top 5 Items</Text>
            </View>
            <ScrollView  horizontal={true}>
                {
                    temp2.map((d , n ) => (
                        <Card key={n}>
                            <CardImage
                                source={{uri: 'http://bit.ly/2GfzooV'}}
                                title="Top 10 South African beaches"
                            />
                            <CardTitle
                                subtitle="Number 6"
                            />
                            <CardContent text="Clifton, Western Cape" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    onPress={() => {}}
                                    title="Share"
                                    color="#FEB557"
                                />
                                <CardButton
                                    onPress={() => {}}
                                    title="Explore"
                                    color="#FEB557"
                                />
                            </CardAction>
                        </Card>
                    ))
                }
            </ScrollView>
        </View>
    )

}


const temp2 = [
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
]

