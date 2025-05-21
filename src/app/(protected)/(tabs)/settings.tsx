import Gradientbackground from '@/src/components/Gradientbackground';
import HomeHeader from '@/src/components/homeHeader';
import ImagePickerComponent from '@/src/components/ImagePicker';
import React, { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';

const SettingsScreen = () => {


  
  const dimensions = useWindowDimensions();
  const [picker, setPicker] = useState(false)
  const [Img, setImg] = useState('')


  return (
    <Gradientbackground>
      <View style={{height: false ? dimensions.height >= 700 ? dimensions.height * 0.19 : dimensions.height * 0.15  :  dimensions.height >= 700 ?  dimensions.height * 0.13 : dimensions.height * 0.12,}}>
        <HomeHeader isSettings={true} isHome={false} screen={{}} picker={(value: any) => setPicker(value)} />
      </View>






      {
        picker && <ImagePickerComponent profile={'Profile photo'} isVideo={false} Close={(value: any) => setPicker(value)}  />
      }
    </Gradientbackground>
  )
}

export default SettingsScreen