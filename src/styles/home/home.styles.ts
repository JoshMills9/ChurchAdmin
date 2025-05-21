import { COLORS } from "@/src/constants/colors";
import { StyleSheet } from "react-native";


export const homeStyles = (dimensions: any) => StyleSheet.create({
    container: {
        height: dimensions.height >= 700 ? dimensions.height * 0.7 : dimensions.height * 0.7,
        gap: 20,
    },
    eventView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    performanceView: {
        flex: 1,
    },
    accessText: {
        fontSize: dimensions.height >= 700 ? 15 : 13,
        fontWeight: '600',
        color: COLORS.PRIMARYTEXT
    },
    quickView: {
        flex: 1.7,

    },
    qItemView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quickItem: {
        backgroundColor: 'rgb(24, 29, 28)',
        width: dimensions.width >= 400 ? '49%' : '49%',
        height: dimensions.height >= 700 ? '95%' : '97%',
        borderRadius: dimensions.height >= 700 ? 20 : 15,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    quickIcon: {
        backgroundColor: 'rgb(38, 43, 42)',
        width: dimensions.width >= 400 ? 45 : 45,
        borderRadius: 50, 
        elevation: 3, 
        height: dimensions.height >= 700 ? 45 : 32, 
        justifyContent: 'center', 
        alignItems:'center'
    },
    quickText: {
        fontSize: dimensions.height >= 700 ? 13 : 12,
        fontWeight: '500',
        color: COLORS.PRIMARYTEXT,
    },
    aiView: {
        position: 'absolute',
        backgroundColor: 'white',
        height: dimensions.height >= 700 ? 55 : 42,
        width: dimensions.width >= 400 ? 55 : 55,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        right: 0
    }
});
