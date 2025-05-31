import * as ImagePicker from 'expo-image-picker';

export const Picker = async(media: any) => {
     // No permissions request is necessary for launching the image library

     if(media === 'image'){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'livePhotos'],
            allowsEditing: true,
            legacy: true,
            aspect: [4, 4],
            quality: 1,
          });
      
          if (!result.canceled) {
            return (result.assets[0].uri);
          }
     }else if(media === 'camera'){
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          if (!result.canceled) {
            return (result.assets[0].uri);
          }
     }else if(media === 'video'){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['videos'],
            quality: 1,
          });
      
          if (!result.canceled) {
            return (result.assets[0].uri);
          }
     }
    
  
}