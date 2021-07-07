import { StyleSheet } from "react-native";
import { color } from "../utils/color";
import { moderateScale, scale, verticalScale } from "../utils/ScalingUtils";

export const ApplicationScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
    content: {
        flexGrow: 1,
        paddingHorizontal: scale(16)
    },
    titlePink: {
        color: color.black,
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        paddingTop: verticalScale(26)
    },
    txtDes: {
        marginVertical: 4,
        fontSize: moderateScale(13),
        color: '#857E7F'
    },
    box: {
        borderWidth: 1,
        borderRadius: 6,
        padding: scale(15),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(16)
    },
    titleBox: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        marginRight: scale(8)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnEdit: {
        borderWidth: 1,
        alignItems: 'center',
        borderColor: color.pink,
        justifyContent: 'center',
        width: verticalScale(32),
        height: verticalScale(32),
        borderRadius: verticalScale(16)
    },
    txtInBox: {
        marginVertical: verticalScale(4),
        color: '#857E7F',
        fontSize: moderateScale(14)
    },
    btnWeek: (isSelect) => ({
        height: verticalScale(32),
        width: verticalScale(32),
        borderRadius: verticalScale(16),
        backgroundColor: isSelect ? color.pink : color.grey,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    txtWeek: (isSelect) => ({
        fontSize: moderateScale(12),
        color: isSelect ? color.white : '#5C595A'
    }),
    txtService: (isSelect) => ({
        fontSize: moderateScale(14),
        color: isSelect ? color.white : '#5C595A'
    }),
    itemService: (isSelect) => ({
        backgroundColor: isSelect ? color.pink : color.grey,
        marginVertical: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'bet',
        paddingHorizontal: scale(12),
        borderRadius: 4,
        height: verticalScale(32),
        justifyContent: 'space-between'
    }),
    txtAdd: {
        color: color.pink
    }
});