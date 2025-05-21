import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, ImageBackground, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

import { COLORS } from '../constants/colors'



const BackgroundLayout = ({children}: any) => {

  const dimensions = useWindowDimensions();
  const styles = BackgroundStyles(dimensions)

  return (
    <ImageBackground style={{flex: 1}} resizeMode='repeat' source={require('../assets/images/img1.png')}>
      <StatusBar backgroundColor={'rgb(2, 9, 8)'} barStyle={'light-content'} />
      <LinearGradient 
        colors={['rgb(2, 9, 8)', '#000000']}
        style={{flex: 1, justifyContent: 'space-between', padding: 20, opacity: 0.94}}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
          <View style={styles.topView}>
            <View style={styles.left}><Image tintColor={"white"} source={require('../assets/images/adaptive-icon.png')} style={{width: 120, height: 120}} /></View>
            <View style={styles.right}><Text style={styles.appName}>ChurchAdmin</Text></View>
          </View>

          <View>
            {children}
          </View>
      </LinearGradient>
    </ImageBackground>
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

export default BackgroundLayout