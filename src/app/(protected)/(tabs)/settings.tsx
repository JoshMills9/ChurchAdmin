import Gradientbackground from '@/src/components/Gradientbackground';
import HomeHeader from '@/src/components/homeHeader';
import ImagePickerComponent from '@/src/components/ImagePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';

const SettingsScreen = () => {


  
  const dimensions = useWindowDimensions();
  const [picker, setPicker] = useState(false)
  const [Img, setImg] = useState('')

  useEffect(() => {
    const savePhoto = async () => {
      await AsyncStorage.setItem('Profile', JSON.stringify(Img))
    }
    savePhoto()
  },[Img])


  return (
    <Gradientbackground>
      <View style={{height: false ? dimensions.height >= 700 ? dimensions.height * 0.19 : dimensions.height * 0.15  :  dimensions.height >= 700 ?  dimensions.height * 0.13 : dimensions.height * 0.12,}}>
        <HomeHeader isSettings={true} isHome={false} screen={{}} picker={(value: any) => setPicker(value)} />
      </View>






      {
        picker && <ImagePickerComponent videoOut={{}} remove={() => setImg('')} imageOut={(value: any) => setImg(value)} profile={'Profile photo'} isVideo={false} Close={(value: any) => setPicker(value)}  />
      }
    </Gradientbackground>
  )
}

export default SettingsScreen