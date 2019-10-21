import {Dimensions, PixelRatio, Platform} from 'react-native';
// PlatForm OS
export const os = Platform.OS;
// display width
export const width = Math.round(Dimensions.get('window').width);
// display height
export const height = Math.round(Dimensions.get('window').height);

export function changeDP(px) {
    // dp = px * ( 160 / dpi )
    // 4 배수씩 오른다.
    return px * (160 / width)
}


export const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

export const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

export const layout = {
    100: {width: width * 100 / 100, height: height * 100 / 100},
    90: {width: width * 90 / 100, height: height * 90 / 100},
    80: {width: width * 80 / 100, height: height * 80 / 100},
    70: {width: width * 70 / 100, height: height * 70 / 100},
    60: {width: width * 60 / 100, height: height * 60 / 100},
    50: {width: width * 50 / 100, height: height * 50 / 100},
    40: {width: width * 40 / 100, height: height * 40 / 100},
    30: {width: width * 30 / 100, height: height * 30 / 100},
    20: {width: width * 20 / 100, height: height * 20 / 100},
    10: {width: width * 10 / 100, height: height * 10 / 100},

};
