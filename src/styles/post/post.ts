import { StyleSheet } from "react-native";



export const postStyles = (dimensions : any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(2, 9, 8)',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    gradient: {
        height: '40%',
        width: '100%',
        justifyContent: 'flex-end',
      },

      mainView: {
        height: 500,
        width: '100%',
        alignSelf: 'center',
      },
      textInput: {
        height: '100%',
        padding: 15,
        width: '100%',
        fontSize: 35,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white'
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
      }
}) 

