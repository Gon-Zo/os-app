import React from 'react'
import {
    StatusBar,
    SafeAreaView,
    Text,
    View,
    ScrollView,
    AsyncStorage
} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default () => {

    const test = AsyncStorage.getItem("token")
    console.log('test...', test)

    return (
        <>
            <StatusBar></StatusBar>
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>
                    <BestCardView title={'Most Top5 Items'}/>
                    <BestCardView title={'Best Top5 Items'}/>
                    <BestCardView title={'Review Top5 Items'}/>
                </ScrollView>
            </SafeAreaView>
       </>
    )
}


function BestCardView(props) {

    const title  = props.title

    return (
        <View style={{ marginTop : 30}}>
            <View>
                <Text style={{color: '#424242', fontSize: 20 ,
                    // fontWeight : 'bold',
                    // fontFamily : "BMHANNA"
                }}>  {title}</Text>
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
]

