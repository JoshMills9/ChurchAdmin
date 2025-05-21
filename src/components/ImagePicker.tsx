import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../constants/colors';
import { Picker } from '../constants/picker';

const ImagePickerComponent = ({Close, profile, isVideo,}: {Close: any, profile: any, isVideo: any}) => {

  const dimensions = useWindowDimensions();
  const styles = modalStyle(dimensions)
  const [Img, setImg] = useState<string | null>('')


  //function to select media file
  const pickMediaFile = async(media: any) => {
    if(media === 'image'){
        const img = await Picker('image')
        if(img){
          Close(false)
          handleSave(img)
        }
    }else if(media === 'camera'){
        const img = await Picker('camera')
        if(img){
          Close(false)
          handleSave(img)
        }
    }   
  }


      //saving profile pic to localstorage
    const handleSave = async (Img: any) => {
      if(profile === 'Choose photo'){
      try {
        await AsyncStorage.setItem('Photo', JSON.stringify(Img));
      } catch (e) {
        console.error('Failed to save the data to the storage', e);
      }
    }else{
      try {
        await AsyncStorage.setItem('Profile', JSON.stringify(Img));
      } catch (e) {
        console.error('Failed to save the data to the storage', e);
      }
    }
  };

  const handleRemoveProfile = async() => {
    try {
      await AsyncStorage.removeItem('Profile');
      Close(false)
    } catch (e) {
      console.error('Failed to save the data to the storage', e);
    }
  }



  return (
    <Modal backdropColor={'transparent'}  visible={true} onRequestClose={() => Close(false)}  style={styles.container} animationType='slide' presentationStyle='formSheet' >
      <TouchableOpacity onPress={() => Close(false)} style={styles.container}>
          <Pressable style={styles.main}>
            <View style={{width: 60, height:4, borderRadius: 50 ,backgroundColor: 'lightgray' , position: 'absolute', top: 8, alignSelf: 'center'}} />
            
            <View style={styles.topView}>
              <TouchableOpacity onPress={() => Close(false)}>
                <Ionicons name='close-sharp' size={24} color={COLORS.SECONDARYTEXT}  />
              </TouchableOpacity>
              <Text style={styles.text}>{profile}</Text>
              <TouchableOpacity onPress={handleRemoveProfile}>
                <Ionicons name='trash-outline' size={24} color={COLORS.SECONDARYTEXT}  />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
              <View style={styles.cameraView}>
                <TouchableOpacity onPress={() => pickMediaFile('camera')} style={styles.Icons}>
                  <Ionicons name='camera-outline' size={30} color={COLORS.CREATEBUTTON} />
                </TouchableOpacity>
                <Text style={styles.camertext}>Camera</Text>
              </View>
              <View style={styles.cameraView}>
                <TouchableOpacity onPress={() => pickMediaFile('image')}  style={styles.Icons}>
                  <Ionicons name='image-outline' size={30} color={COLORS.CREATEBUTTON} />
                </TouchableOpacity>
                <Text style={styles.camertext}>Gallery</Text>
              </View>
              {isVideo && 
                <View style={styles.cameraView}>
                  <TouchableOpacity  style={styles.Icons}>
                    <Ionicons name='videocam-outline' size={30} color={COLORS.CREATEBUTTON} />
                  </TouchableOpacity>
                  <Text style={styles.camertext}>Video</Text>
                </View>
              }
            </View>
          </Pressable>
      </TouchableOpacity>
    </Modal>
  )
}

const modalStyle = (dimensions: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  main: {
    backgroundColor: 'rgb(22, 24, 24)',
    position: 'absolute',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    bottom: 0,
    height: 250,
    width: '100%',
    padding: 15,
    gap: 10,
    zIndex: 9
  },
  topView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  bottomView: {
    flex: 3,
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500'
  },
  Icons: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: 'rgb(80, 83, 83)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camertext: {
    color: COLORS.PRIMARYTEXT,
    fontSize: 17,
    fontWeight: '400'
  },
  cameraView: {
    alignItems: 'center',
    gap: 10,
  }
})

export default ImagePickerComponent