import { COLORS } from "@/src/constants/colors";
import { StyleSheet } from "react-native";

const loginStyles = (dimensions: any) => StyleSheet.create({
    container: {
        height: dimensions.height * 0.7,
        justifyContent: 'space-between'
    },

    topView: {
        height: dimensions.height * 0.1,
        paddingVertical: 5,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomView: {
        height: dimensions.height >= 700 ? dimensions.height *  0.48 : dimensions.height * 0.5,
        justifyContent: 'space-between'
    },
    inputFieldView: {
        height: dimensions.height * 0.2,
        justifyContent: 'space-between',
    },
    mainInputView: {
        gap: 10,
    },
    continueView: {
        backgroundColor: COLORS.CREATEBUTTON,
        height: dimensions.height * 0.063,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    haveAccntView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    churchInput: {
        height: dimensions.height * 0.063,
        backgroundColor: 'rgba(30, 52, 46, 0.8)',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: '300',
        fontSize: 15,
        color: COLORS.PRIMARYTEXT
    },
    continueTxt: {
        fontSize: 16,
        fontWeight: '500'
    },
    haveAccTxt: {
        color: COLORS.SECONDARYTEXT,
        fontSize: 15,
    },
    LoginTxt: {
        color: COLORS.PRIMARYTEXT,
        fontSize: 15,
        fontWeight: '500'
    },
    appName: {
        color: COLORS.PRIMARYTEXT,
        fontWeight: '500',
        fontSize: 33,
        letterSpacing: 1,
    },
    text: {
        color: COLORS.PRIMARYTEXT,
        fontSize: 13,
        fontWeight: '400',
        width: dimensions.width * 0.7,
        textAlign: 'center'
    },
    mainAuthView: {
        alignItems: 'center',
        height: dimensions.height * 0.25,
        justifyContent: 'space-around'
    },
    authView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',

    },
    googleView: {
        height: dimensions.height * 0.063,
        backgroundColor: 'rgba(30, 52, 46, 0.8)',
        borderRadius: 50,
        width: '49%',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center'
    },
    googleText: {
        fontSize: 15,
        color: COLORS.PRIMARYTEXT,

    },
    termsView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default loginStyles;