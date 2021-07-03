import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getStatusBarHeight, moderateScale, scale, verticalScale } from "../utils/ScalingUtils";
import { color } from "../utils/color";
import { IconBack } from "../assets/ic_svg";

const Header = (prop) => {
    const { title, onPress } = prop

    const goBack = () => onPress && onPress()

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnBack} onPress={goBack}>
                <IconBack />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.empty} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomColor: 'silver',
        justifyContent: 'space-between',
        paddingTop: getStatusBarHeight(true),
    },
    title: {
        color: color.black,
        fontSize: moderateScale(16),
        fontWeight: '600'
    },
    btnBack: {
        padding: scale(16)
    },
    empty: {
        width: scale(36)
    }
});

export default Header;