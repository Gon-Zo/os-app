import React from 'react'
import {
    StatusBar,
    SafeAreaView,
    Text,
    View,
    ScrollView, TouchableOpacity
} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default (navigation) => {
    return (
        <>
            <StatusBar></StatusBar>
            <SafeAreaView style={{flex: 1}}>

                <View style={{
                    backgroundColor: '#f00',
                    height: hp('5%'),
                    flexDirection : 'row'
                }}>
                    <View style={{backgroundColor : '#00f' , flex : 1}}>

                    </View>
                    <View style={{
                        backgroundColor: '#0f0',
                        flex: 1,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingRight: 10
                    }}>
                        <TouchableOpacity onPress={()=>{
                            alert("test")
                        }}>
                            <MaterialCommunityIcons name="shopping" color="#424242" size={26}/>
                        </TouchableOpacity>
                    </View>
                </View>

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
                <Text style={{color: '#424242', fontSize: 20 , fontWeight : 'bold'}}>  {title}</Text>
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

