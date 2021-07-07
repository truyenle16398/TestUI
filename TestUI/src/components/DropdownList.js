import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, UIManager, LayoutAnimation } from "react-native";
import { IconDown, IconUp } from "../assets/ic_svg";
import { color } from "../utils/color";
import { moderateScale, scale, verticalScale } from "../utils/ScalingUtils";

const DropdownList = (props) => {
    const { data, refList } = props
    const [itemSelect, setItemSelect] = useState(data[0])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, [])

    const toggleVisible = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setVisible(!visible)
        refList && refList.current.scrollToEnd({ animated: true })
    }

    const onPressItem = (e) => () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setItemSelect(e)
        setVisible(false)
    }

    const renderItem = (e) => {
        return (
            <TouchableOpacity key={e} style={styles.itemSelect(e === itemSelect)} onPress={onPressItem(e)}>
                <Text style={styles.txtItem(e === itemSelect)}>{e}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.default(visible)} onPress={toggleVisible}>
                <Text style={styles.txtSelect}>{itemSelect}</Text>
                {visible ? <IconUp /> : <IconDown />}
            </TouchableOpacity>
            {visible && (
                <View style={styles.listView}>
                    {data.map(e => renderItem(e))}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: scale(16)
    },
    default: (visible) => ({
        borderWidth: 1,
        borderBottomLeftRadius: visible ? 0 : 4,
        borderBottomRightRadius: visible ? 0 : 4,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        height: verticalScale(48),
        borderColor: visible ? color.pink : color.silver,
        paddingHorizontal: scale(16),
        justifyContent: 'space-between'
    }),
    txtSelect: {
        fontWeight: 'bold',
        color: color.pink,
        fontSize: moderateScale(14)
    },
    listView: {
        borderWidth: 1,
        borderColor: color.pink,
        paddingBottom: 7,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    txtItem: (isSelect) => ({
        color: isSelect ? color.white : color.black
    }),
    itemSelect: (isSelect) => ({
        backgroundColor: isSelect ? color.pink : color.white,
        paddingVertical: 8,
        marginTop: 7,
        paddingHorizontal: scale(16)
    })
});

export default DropdownList