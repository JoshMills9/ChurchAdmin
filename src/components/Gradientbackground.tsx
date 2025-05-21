import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StatusBar, StyleSheet, useWindowDimensions, View } from 'react-native'

import { COLORS } from '../constants/colors'



const Gradientbackground = ({children}: any) => {

  const dimensions = useWindowDimensions();
  const styles = BackgroundStyles(dimensions)

  return (
      <LinearGradient 
        colors={[ 'rgb(2, 9, 8)', '#000000']}
        style={{flex: 1, justifyContent: 'space-between', padding: 25,}}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
          <StatusBar backgroundColor={ 'rgb(2, 9, 8)'} />
          <View style={{height: '100%'}}>
            {children}
          </View>
      </LinearGradient>
  )
}

const BackgroundStyles = (dimensions: any) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    opacity: 0.92
  },
  topView: {
      height: dimensions.height * 0.15,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  left: {
      justifyContent: 'center',
      height: 80,
      width: 100
  },
  right: {
      justifyContent: 'center',
      height: 80,
  },
  appName: {
    color: COLORS.PRIMARYTEXT,
    fontWeight: '500',
    fontSize: 23,
},
})

export default Gradientbackground;