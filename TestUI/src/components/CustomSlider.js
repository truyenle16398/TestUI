import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { scale } from "../utils/ScalingUtils";
import { color } from "../utils/color";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const { width } = Dimensions.get('window')

const CustomSlider = (props) => {
    const { minValue, maxValue, unit } = props

    const [value, setValue] = useState([minValue, maxValue])

    const renderNum = (val) => {
        switch (unit) {
            case 'km': return `${val} km`
            case '$': return `$${val}`
            default: return `${val}.0`
        }
    }

    const onValuesChange = val => setValue(val)

    const customMarker = (isLeft) => () => {
        let customStyles = isLeft ? styles.marLeft : styles.marRight
        return <View style={[styles.marker, customStyles]} />
    }

    return (
        <View style={styles.container}>

            <View style={styles.unit}>
                <Text>{renderNum(value[0])}</Text>
                <Text>{renderNum(value[1])}</Text>
            </View>

            <MultiSlider
                step={1}
                values={value}
                min={minValue}
                max={maxValue}
                isMarkersSeparated={true}
                minMarkerOverlapDistance={40}
                trackStyle={styles.trackStyle}
                onValuesChange={onValuesChange}
                sliderLength={width - scale(40)}
                customMarkerRight={customMarker()}
                selectedStyle={styles.selectedStyle}
                customMarkerLeft={customMarker(true)}
                containerStyle={styles.containerStyle}
                unselectedStyle={styles.unselectedStyle}
            />

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    unit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginTop: scale(10),
        backgroundColor: color.white,
    },
    marLeft: {
        marginLeft: scale(10)
    },
    marRight: {
        marginRight: scale(10)
    },
    selectedStyle: {
        backgroundColor: color.pink
    },
    unselectedStyle: {
        backgroundColor: color.grey
    },
    trackStyle: {
        borderRadius: 5,
        height: scale(10),
        backgroundColor: color.grey
    },
    containerStyle: {
        height: scale(20),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CustomSlider;