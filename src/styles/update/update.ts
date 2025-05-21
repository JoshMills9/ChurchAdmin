import { StyleSheet } from "react-native";



export const updateStyles = (dimensions: any) => StyleSheet.create({
    container: {
        width: dimensions.width,
        height: dimensions.height,
        paddingHorizontal: 15,
    }
})