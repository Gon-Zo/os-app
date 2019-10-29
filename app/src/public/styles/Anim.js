import {Animated , Easing } from "react-native";

// Fade In Animation
export const _fadeIn = (function f(moveVal){
    Animated.timing(
        moveVal , {
            toValue: 1,
            duration: 1000,
            easing : Easing.bounce,
            delay: 200
        }).start();
});

// Fade Out Animation
export const _fadeOut = (function f(moveVal) {
    Animated.timing(
        moveVal , {
            toValue: 0,
            duration: 1000,
            easing : Easing.bounce,
            delay: 200
        }).start();
});
