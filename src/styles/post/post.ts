import { COLORS } from "@/src/constants/colors";
import { StyleSheet } from "react-native";



export const postStyles = (dimensions : any) => StyleSheet.create({
    container: {
        height: dimensions.height,
        backgroundColor: 'rgb(2, 9, 8)',
        width: dimensions.width,
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    gradient: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
      },

      mainView: {
        height: 500,
        width: dimensions.width,
        justifyContent: 'center'
      },
      textInput: {
        height: '100%',
        paddingHorizontal: 10,
        width: '100%',
        fontSize: 35,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
      },
      cameraView: {
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      post: {
        backgroundColor: 'rgba(24, 29, 28, 0.91)',
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      postText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
      },
      micView: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderStyle: 'dotted',
        borderWidth: 2,
        borderColor: COLORS.CREATEBUTTON,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
      }
}) 

