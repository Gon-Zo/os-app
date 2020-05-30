import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';

export default () => {
    return (
        <>
            <SafeAreaView>
                <StatusBar></StatusBar>
                <View>
                    <Text>
                        Home
                    </Text>
                </View>
            </SafeAreaView>
        </>
    )
}

