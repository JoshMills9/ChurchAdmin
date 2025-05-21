import { StyleSheet } from "react-native";


export const registerStyles = (dimensions: any) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    nameView: {
        height: 80,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 15
    },
    imgView: {
        height: dimensions.height >= 700 ? dimensions.height * 0.11 : dimensions.height * 0.075 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
})