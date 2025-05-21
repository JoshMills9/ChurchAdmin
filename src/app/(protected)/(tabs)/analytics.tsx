import Gradientbackground from '@/src/components/Gradientbackground'
import HomeHeader from '@/src/components/homeHeader'
import React from 'react'
import { useWindowDimensions, View } from 'react-native'

const Analytics = () => {
  const dimensions = useWindowDimensions();
  return (
    <Gradientbackground>
      <View style={{height: false ? dimensions.height >= 700 ? dimensions.height * 0.19 : dimensions.height * 0.15  :  dimensions.height >= 700 ?  dimensions.height * 0.13 : dimensions.height * 0.12,}}>
        <HomeHeader picker={false} isSettings={false} isHome={false} screen={{}} />
      </View>

    </Gradientbackground>
  )
}

export default Analytics