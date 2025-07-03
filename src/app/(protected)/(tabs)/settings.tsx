import Gradientbackground from '@/src/components/Gradientbackground';
import HomeHeader from '@/src/components/homeHeader';
import ImagePickerComponent from '@/src/components/ImagePicker';
import { getObject } from '@/src/constants/localStorage';
import React, { useEffect, useState } from 'react';
import { ToastAndroid, useWindowDimensions, View } from 'react-native';

const SettingsScreen = () => {
  const dimensions = useWindowDimensions();
  const [picker, setPicker] = useState(false)
  const [Img, setImg] = useState('')



  useEffect(() => {
    if (!Img) return;
  
    const updatePhoto = async () => {
      const user = await getObject('user');
      if (!user || !user.user?._id) return;
  
      try {
        const res = await fetch(`https://churchadmin-backend-api.onrender.com/admin/users/${user.user._id}`, {
          method: 'PATCH', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: user.user.phone,
            church: user.user.church,
            img: Img, 
          }),
        });
  
  
        if (res.ok) {
          ToastAndroid.show('Profile Photo updated successfully.', ToastAndroid.SHORT);
        } else {
          const error = await res.json();
          console.log("Update failed:", error);
          throw new Error("Failed to update photo.");
        }
      } catch (err) {
        console.error("Error updating photo:", err);
      }
    };
  
    updatePhoto();
  }, [Img]);
  
  


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