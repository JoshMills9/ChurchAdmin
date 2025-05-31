import { COLORS } from "@/src/constants/colors";
import { StyleSheet } from "react-native";

const verificationStyles = (dimensions: any) => StyleSheet.create({
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
        height: dimensions.height >= 700 ?  dimensions.height * 0.55 :  dimensions.height * 0.55,
        gap: 5,
        paddingVertical: 10,

    },
    pinView: {
        height: dimensions.height * 0.15,
        gap: 10
    },
    inputView: {
        backgroundColor: 'rgba(30, 52, 46, 0.8)',
        height: dimensions.height * 0.09,
        width: dimensions.width >= 400 ? '100%' : '100%' ,
        borderRadius: dimensions.height >= 700 ? 20 : 15,
        textAlign: 'center',
        alignItems: 'center',
        color: COLORS.PRIMARYTEXT,
        fontSize: dimensions.height >= 700 ? 28 : 23,
        fontWeight: '800',
        letterSpacing: 15,
    },
    verifyView: {
        backgroundColor: COLORS.CREATEBUTTON,
        height: dimensions.height * 0.063,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    verifyTxt: {
        fontSize: 16,
        fontWeight: '500'
    },
    resendView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    appName: {
        color: COLORS.PRIMARYTEXT,
        fontWeight: '500',
        fontSize: dimensions.height >= 700 ? 33 : 30,
        letterSpacing: 1,
    },
    text: {
        color: COLORS.PRIMARYTEXT,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center'
    },
 
});


export default verificationStyles;