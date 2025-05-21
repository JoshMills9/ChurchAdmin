import { COLORS } from "@/src/constants/colors";
import { StyleSheet } from "react-native";


const onboardingStyles= (dimensions : any) => StyleSheet.create({
    bottomView: {
        height: dimensions.height * 0.5,
        gap: 10,
        justifyContent: 'flex-end'
    },
    isAdminView: {
        height: dimensions.height * 0.14,
        backgroundColor: 'rgba(30, 52, 46, 0.8)',
        borderRadius: 35,
        alignItems: 'center',
        gap: 5,
        justifyContent: 'center'
    },
    switchView: {
        height: dimensions.height * 0.075,
        backgroundColor: 'rgba(30, 52, 46, 0.8)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5
    },
    switchArrowView: {
        backgroundColor: 'rgb(51, 69, 64)',
        width: dimensions.width >= 400 ? dimensions.width * 0.23 : dimensions.width * 0.18,
        height: '100%',
        borderRadius: 50,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    loginView : {
        height: dimensions.height * 0.23,
        backgroundColor: 'rgba(30, 52, 46, 0.8)',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: dimensions.height >= 700 ?  20 : 15,
    },
    appName: {
        color: COLORS.PRIMARYTEXT,
        fontWeight: '500',
        fontSize: 23,
    },
    text: {
        color: COLORS.PRIMARYTEXT,
        fontSize: dimensions.height >= 700 ? 15 : 13,
        fontWeight: '300'
    },
    createView: {
        backgroundColor: COLORS.CREATEBUTTON,
        height: dimensions.height * 0.063,
        borderRadius: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logInView: {
        backgroundColor: COLORS.LOGINBUTTON,
        height: dimensions.height * 0.063,
        borderRadius: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    termsView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default onboardingStyles;