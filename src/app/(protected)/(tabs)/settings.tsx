import Gradientbackground from '@/src/components/Gradientbackground';
import HomeHeader from '@/src/components/homeHeader';
import ImagePickerComponent from '@/src/components/ImagePicker';
import { getObject, setObject } from '@/src/constants/localStorage';
import React, { useEffect, useState } from 'react';
import { ToastAndroid, useWindowDimensions, View } from 'react-native';

const SettingsScreen = () => {
  const dimensions = useWindowDimensions();
  const [picker, setPicker] = useState(false)
  const [Img, setImg] = useState('')

  useEffect(() => {
    const updatePhoto = async() => {
      const user = getObject('user')
  
      if(Img !== '' || null){

        user.user.img = Img;
        setObject('user', user);

        try{
            const res = await fetch(`https://churchadmin-backend-api.onrender.com/admin/users/${user?.user?.id}`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
              }
            );
            
            if(res.ok){
              ToastAndroid.show('Profile Photo updated successfully.', ToastAndroid.SHORT)
            }
          }catch(err){
            alert('Error updating photo')
          }
        
      }
    }
    
    updatePhoto()

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