import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';
import {Layout, Button} from "react-native-ui-kitten";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import * as icon from "@fortawesome/free-solid-svg-icons";
import ImagePicker from 'react-native-image-picker';
import {BASE_URL} from "../../../public/config";

const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class Test2Screen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            avatarSource: null
        }
    }

    _getImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};
                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    render() {
        return (
            <View>
                <Text>갤러리</Text>
                <Button onPress={() => this._getImage()}>Open</Button>
                <View>
                    <Image source={this.state.avatarSource} style={{width: 200, height: 200}}/>
                </View>
            </View>
        )
    }
}
