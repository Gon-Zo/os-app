import React from 'react'
import {
    StatusBar,
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {GET_COLOR} from "../../public/colors";

export default ({navigation}) => {

    return (
        <>
            <StatusBar></StatusBar>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor : GET_COLOR().BACKGROUND_COLOR
            }}>
                <ScrollView>
                    <BestCardView title={'Most Top5 Items'} navigation={navigation}/>
                    <BestCardView title={'Best Top5 Items'} navigation={navigation}/>
                    <BestCardView title={'Review Top5 Items'} navigation={navigation}/>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

function BestCardView(props) {

    const title = props.title

    const navigation = props.navigation

    return (
        <View style={{marginTop: 30}}>
            <View>
                <Text style={{
                    color: '#424242', fontSize: 20,
                    fontWeight : 'bold',
                    // fontFamily : "BMHANNA"
                }}>  {title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {
                    temp2.map((d, n) => (
                        <TouchableOpacity key={n}
                                          onPress={() => {
                                              navigation.navigate('Detail', {
                                                      itemId: n ,
                                                      otherParam: 'anything you want here',
                                                  })
                                          }}>
                            <Card>
                                <CardImage
                                    source={{uri: 'http://bit.ly/2GfzooV'}}
                                    title="Top 10 South African beaches"
                                />
                                <CardTitle
                                    subtitle="Number 6"
                                />
                                <CardContent text="Clifton, Western Cape"/>
                                <CardAction
                                    separator={true}
                                    inColumn={false}>
                                    <CardButton
                                        onPress={() => {
                                        }}
                                        title="Share"
                                        color="#FEB557"
                                    />
                                    <CardButton
                                        onPress={() => {
                                        }}
                                        title="Explore"
                                        color="#FEB557"
                                    />
                                </CardAction>
                            </Card>
                        </TouchableOpacity>
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

