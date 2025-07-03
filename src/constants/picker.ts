import * as ImagePicker from 'expo-image-picker';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/djb8fanwt/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'my_images';  

export const Picker = async(media: any) => {
  

  const uploadImage = async(uri: any,  type: 'image' | 'video') => {
    try {
      const fileType = type === 'video' ? 'video/mp4' : 'image/jpeg';
      const formData = new FormData();

      formData.append('file', {
        uri,
        type: fileType,
        name: uri.split('/').pop(),
      } as any);

      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.secure_url) {
        console.log('Uploaded URL:', data.secure_url);
        return data.secure_url;
      } else {
        console.log('Upload failed:', data);
      }
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
    }

    }
   


     if(media === 'image'){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'livePhotos'],
            allowsEditing: true,
            legacy: true,
            aspect: [9, 9],
            quality: 1,
          });
      
          if (!result.canceled) {
            const value = await uploadImage(result.assets[0].uri, 'image');
            return value;
          }
     }else if(media === 'camera'){
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [9, 9],
            quality: 1,
          });
      
          if (!result.canceled) {
            const value = await uploadImage(result.assets[0].uri, 'image');
            return value
          }
     }else if(media === 'video'){
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['videos'],
            quality: 1,
          });
      
       
          if (!result.canceled) {
            return await uploadImage(result.assets[0].uri, 'video');
          }
     }

}