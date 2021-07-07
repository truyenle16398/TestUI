import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, scale, verticalScale } from "../utils/ScalingUtils";
import { color } from "../utils/color";

const ButtonBottom = (prop) => {
    const { title, onPress } = prop

    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={.7}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: scale(4),
        justifyContent: 'center',
        height: verticalScale(48),
        backgroundColor: color.pink,
        marginVertical: verticalScale(37)
    },
    text: {
        fontWeight: 'bold',
        color: color.white,
        fontSize: moderateScale(14)
    }
});

export default ButtonBottom;