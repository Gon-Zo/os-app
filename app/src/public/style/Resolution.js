import {Dimensions , PixelRatio } from "react-native";

// screen value
let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

const Resolution   = {
    full: {
        width: PixelRatio.getPixelSizeForLayoutSize(screenWidth) ,
        height: PixelRatio.getPixelSizeForLayoutSize(screenHeight)
    } ,

};
export default Resolution
