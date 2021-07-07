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
    },
    txtServiceItem: (isSelect) => ({
        textAlign: 'center',
        marginTop: verticalScale(11),
        color: isSelect ? color.pink : color.silver
    }),
    serviceItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconService: (isSelect) => ({
        width: verticalScale(52),
        height: verticalScale(52),
        borderRadius: verticalScale(26),
        borderColor: isSelect ? color.pink : color.silver,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    serviceView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: verticalScale(25)
    },
    txtSection: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        marginLeft: scale(6)
    },
    titleSection: {
        marginTop: verticalScale(28),
        marginBottom: verticalScale(13),
        flexDirection: 'row',
        alignItems: 'center'
    },
    voteView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    voteItem: (isSelect) => ({
        borderRadius: 4,
        height: verticalScale(34),
        width: scale(91),
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color.pink,
        backgroundColor: isSelect ? color.pink : color.white
    })
});