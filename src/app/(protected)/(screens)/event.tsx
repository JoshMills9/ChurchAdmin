import { DatePicker } from '@/src/components/datePicker'
import ImagePickerComponent from '@/src/components/ImagePicker'
import SuccessAlert from '@/src/components/successAlert'
import VideoPlayer from '@/src/components/VideoPlayer'
import { COLORS } from '@/src/constants/colors'
import { eventStyles } from '@/src/styles/events/events'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, useWindowDimensions, View } from 'react-native'





const EventScreen = () => {

  const dimensions = useWindowDimensions()
  const styles = eventStyles(dimensions)

  const [title, setTitle] = useState<string>('')
  const [img, setImg] = useState<string>('')
  const [vid, setVideo] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [host, setHost] = useState<string>('')
  const [guest, setGuest] = useState<string>('')
  const [about, setAbout] = useState<string>('')
  const [create, setCreate] = useState<boolean>(false)
  const [showImagePicker, setShowImagePicker] = useState<boolean>(false);
  const [showDatePicker, setDatePicker] = useState<boolean>(false)

  const newEvent = {
    title,
    img,
    vid,
    startDate,
    endDate,
    host,
    guest,
    about,
  }


  const HandleSaveEvent = async() => {
      if(!title || !img){
        return ToastAndroid.show('Please provide title and image', ToastAndroid.LONG)
      }else{
        setCreate(true)
      }

      try{
        await AsyncStorage.setItem('events', JSON.stringify(newEvent))
        router.navigate('/(protected)/(tabs)')
      }catch(err){
        console.log(err)
      }
  }


  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShowImagePicker(true)} style={styles.main}>
        {!img && <View style={{width: 180, height: 50,position: 'absolute', alignSelf:'center',top: 60, justifyContent: 'center',alignItems: 'center',borderRadius: 10, backgroundColor: 'rgba(44, 44, 44, 0.5)'}}>
          <Text style={{color: 'white'}}>Uplaod image</Text>
          </View>
        }
        {vid ? 
          <VideoPlayer isConnect={false} contentFit={'cover'} full={false} native={false} pause={false} video={vid} />
          :
          <Image source={{uri: img}}  style={{width: dimensions.width, height: '100%'}} />
        }
      </Pressable>

      <ScrollView  contentContainerStyle={styles.scrollView}>
        <View style={styles.inputView}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500', }}>Title</Text>
          <TextInput placeholderTextColor={COLORS.SECONDARYTEXT} placeholder='Event title' value={title} onChangeText={(txt) => setTitle(txt)} style={styles.input} />
        </View>
        <View style={styles.inputView}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500', marginBottom: 10}}>Date</Text>
          <View style={{flex: 1,justifyContent: 'space-between', flexDirection: 'row',}}>
            <Pressable onPress={() => {setDatePicker(true); setStartDate('startDate')}} style={{flexDirection: 'row' , gap: 10, alignItems: 'center', borderWidth:1, borderColor: 'dimgray', borderStyle: 'dashed', height: 50, width: '45%', borderRadius: 10, paddingHorizontal: 15}}>
                <>
                  <Feather name='calendar' size={24} color={COLORS.SECONDARYTEXT} />
                  <Text style={styles.text} adjustsFontSizeToFit={true} numberOfLines={1}>{startDate ? startDate :  'Start date'}</Text>
                </>
            </Pressable>
            <Pressable onPress={() => {setDatePicker(true); setStartDate('endDate')}}  style={{flexDirection: 'row' , gap: 10, alignItems: 'center', borderWidth:1, borderColor: 'dimgray', borderStyle: 'dashed', height: 50, width: '45%', borderRadius: 10, paddingHorizontal: 15}}>
                <>
                  <Feather name='calendar' size={24} color={COLORS.SECONDARYTEXT} />
                  <Text style={styles.text}  adjustsFontSizeToFit={true} numberOfLines={1}>{endDate ? endDate : 'End date'}</Text>
                </>
            </Pressable>
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>Speakers</Text>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '45%',justifyContent: 'space-between'}}>
              <Ionicons name='person-circle-outline' size={30} color={COLORS.SECONDARYTEXT} />
              <TextInput placeholderTextColor={COLORS.SECONDARYTEXT} placeholder='Host' value={host} onChangeText={(txt) => setHost(txt)} style={[styles.input, {width: '85%'}]} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '45%'}}>
              <Ionicons name='person-circle-outline' size={30} color={COLORS.SECONDARYTEXT} />
              <TextInput placeholderTextColor={COLORS.SECONDARYTEXT} placeholder='Guest' value={guest} onChangeText={(txt) => setGuest(txt)} style={[styles.input, {width: '85%'}]} />
            </View>
          </View>
        </View>
        <View style={[styles.inputView, {height: 350,}]}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500', marginBottom: 15}}>About</Text>
          <TextInput placeholderTextColor={COLORS.SECONDARYTEXT} multiline={true} maxLength={400} placeholder='What are the details' value={about} onChangeText={(txt) => setAbout(txt)} style={[styles.input, {height: 350,textAlignVertical: 'top',borderRadius: 10, padding: 15, borderWidth: 1}]} />
        </View>
      </ScrollView>

        <View  style={styles.createView}>
          <TouchableOpacity onPress={HandleSaveEvent} style={styles.Create}>
            {create ? 
              <Feather name='loader' size={25} color={'#000'} />
              :
              <Text>Create event</Text>
            }
          </TouchableOpacity>
        </View>
      {create && <SuccessAlert success={true} showAlert={(value: any) => setCreate(value)} />}
      {
        showImagePicker && <ImagePickerComponent remove={(value: any) => {setImg(value); setVideo(value)}} videoOut={(value: any) => setVideo(value)} imageOut={(value: any) => setImg(value)} isVideo={true} Close={(value: any) => setShowImagePicker(value)} profile={'Upload image'} />
      }

      {showDatePicker && <DatePicker value={startDate || endDate} startDate={(value: any) => {setStartDate(value)}} endDate={(value: any) => {setEndDate(value); setDatePicker(false)}}/> }
    </View>
  )
}

export default EventScreen