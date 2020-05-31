import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default () => {
    return (
        <>
            <SafeAreaView>
                <StatusBar></StatusBar>
                <View>
                    <Text>
                        Home
                        <Icon name="glass"/>
                    </Text>
                </View>
            </SafeAreaView>
        </>
    )
}

