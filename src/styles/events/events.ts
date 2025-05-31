import { COLORS } from "@/src/constants/colors";
import { StyleSheet } from "react-native";


export const eventStyles = (dimensions: any) => StyleSheet.create({
    container: {
        height: '100%',
        width: dimensions.width,
        justifyContent: 'space-between',
    },
    main: {
        height: 250,
        width: dimensions.width,
        borderBottomWidth: 1,
        borderColor: 'dimgray',
        borderStyle: 'dashed'
    },
    scrollView: {
        backgroundColor: 'black',
        width: dimensions.width,
        height: 800,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    inputView: {
        height: 85,
        width: '100%',
        marginBottom: 25,
        justifyContent: 'space-between',
    },
    input: {
        color: 'white',
        fontSize: 16,
        height: 45,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'dimgray',
        fontWeight: '500'
    },
    createView: {
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Create: {
        backgroundColor: COLORS.CREATEBUTTON,
        height: 50,
        width: '80%',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 15,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.SECONDARYTEXT
    }
})