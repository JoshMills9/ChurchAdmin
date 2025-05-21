import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { COLORS } from '../constants/colors'

const SuccessAlert = ({showAlert, success} : {showAlert: any, success: any}) => {

    const dimensions = useWindowDimensions()
    const styles = alertStyles(dimensions)


  return (
    <View style={styles.container}>
        <View style={styles.main}>
            {success ?
                <>
                    <View style={{width: 100, height: 100, borderRadius:50 , borderStyle:"dotted" ,borderWidth: 2, borderColor: COLORS.CREATEBUTTON, alignItems: 'center' , justifyContent: 'center', marginTop: 20}}>
                        <Ionicons name='checkmark-circle-sharp' size={90}  color={COLORS.CREATEBUTTON}/>
                    </View>
                    <Text style={styles.text}>Success</Text>
                </>
                :
                <>
                    <View style={{width: 100, height: 100, borderRadius:50 , borderStyle:"dotted" ,borderWidth: 2, borderColor: 'red', alignItems: 'center' , justifyContent: 'center', marginTop: 20}}>
                        <Ionicons name='close-circle-sharp' size={90}  color={'red'}/>
                    </View>
                    <Text style={styles.text}>Error</Text>
                </>
            }
            <View style={styles.closeView}>
                <TouchableOpacity onPress={() => showAlert(false)}>
                    <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const alertStyles = (dimensions: any) => StyleSheet.create({
    container: {
        height: dimensions.height,
        width: dimensions.width,
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor:  'rgba(0, 0, 0, 0.8)',
        zIndex: 9
    },
    main: {
        backgroundColor: 'rgb(22, 24, 24)',
        height: '30%',
        width: '90%',
        top: 150,
        alignSelf: 'center',
        position: 'absolute',
        borderRadius: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.PRIMARYTEXT
    },
    closeView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    closeText: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.SECONDARYTEXT,
    }
})

export default SuccessAlert