import { COLORS } from "@/src/constants/colors";
import { StyleSheet } from "react-native";



export const dashboardStyles = (dimensions: any) => StyleSheet.create({
    qItemView: {
        height: 135,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quickItem: {
        backgroundColor: 'rgb(24, 29, 28)',
        width: dimensions.width >= 400 ? '48%' : '49%',
        height: dimensions.height >= 700 ? '92%' : '95%',
        borderRadius: dimensions.height >= 700 ? 20 : 15,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15 
    },
    quickIcon: {
        backgroundColor: 'rgb(38, 43, 42)',
        width: dimensions.width >= 400 ? 52 : 52,
        borderRadius: 50, 
        elevation: 3, 
        height: dimensions.height >= 700 ? 52 : 36, 
        justifyContent: 'center', 
        alignItems:'center'
    },
    quickText: {
        fontSize: dimensions.height >= 700 ? 14 : 12,
        fontWeight: '500',
        color: COLORS.PRIMARYTEXT,
    },
})