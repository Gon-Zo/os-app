import React from 'react-native'
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {Button, Layout} from "react-native-ui-kitten";

export default ()=>{
    return (
        <Layout>
            <StatusBar/>
            <SafeAreaView>
                <View>
                    <Text>
                        JSX TEST
                    </Text>
                </View>
            </SafeAreaView>
        </Layout>
    )
}

