import { StyleSheet } from "react-native";
import { color } from "../utils/color";
import { moderateScale, scale, verticalScale } from "../utils/ScalingUtils";

export const SearchScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
    content: {
        flexGrow: 1,
        margin: verticalScale(16)
    },
    txtAddress: {
        fontWeight: 'bold',
        fontSize: moderateScale(14),
        marginLeft: scale(4)
    },
    txtChange: {
        color: color.pink,
        fontSize: moderateScale(10),
        fontWeight: 'bold'
    },
    viewAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titlePink: {
        color: color.pink,
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        paddingTop: verticalScale(26)
    }
});