import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { COLORS } from "../constants/colors";
import VideoPlayer from "./VideoPlayer";

export const ModalView = (props: any) => {

  const defaultImage =  require('../assets/images/d5.jpeg')
  const dimensions = useWindowDimensions()
  const styles = modalStyles(dimensions)

  const data = [
    {id: '1', img: require('../assets/images/d5.jpeg'), bg: '', text: '', title: 'Fundraising Service' },
    {id: '2', img: '', bg: 'royalblue', text: 'Hello World, sakjhdkjshdk asjdhkasjh akjshdksna dahkj fakshfkjhalkjflk', },
    {id: '3', img: '', bg: '', text: 'Church Admin', },
    {id: '4', img: '', bg: '', text: '',title: 'Hello World', vid: require('../assets/videos/vid2.mp4') },
    {id: '5', img: '', bg: '', text: '',title: 'Grace Effe', vid: require('../assets/videos/vid2.mp4') },
    {id: '6', img: require('../assets/images/d6.jpeg'), bg: '', text: '', title: 'Conference' },
    {id: '7', img: require('../assets/images/d7.jpeg'), bg: '', text: '', },
    {id: '8', img: '', bg: '', text: '', title: 'Now That We Are Married', vid: require('../assets/videos/vid.mp4') }
  ] 

  return(
  <Modal
    visible={true}
    onRequestClose={() => props.onClose(false)}
    presentationStyle="formSheet"
    animationType="slide"
    backdropColor={'transparent'}
  >

    <TouchableOpacity onPress={() => props.onClose(false)} style={{ height: dimensions.height >= 700  ? 50 : 40, }} />
    
    <View style={styles.container}>
      {/* Image with rounded top and overlay content */}
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={props.item.img ? props.item.img : defaultImage}
          style={[styles.image]}
        >

          <View style={styles.bar} />

          {/* Gradient at the bottom */}
          <LinearGradient
            colors={['transparent', '#000']}
            style={styles.gradient}
          >
            {/* Title inside gradient */}
            <View style={styles.overlayContent}>
              <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.title}>{props?.item?.title}</Text>

              <View style={styles.favView}>
                <View style={styles.blessedView}>
                  <Ionicons name="heart-sharp" size={ dimensions.height >= 700 ? 21: 18} color={COLORS.PRIMARYTEXT} />
                  <Text style={styles.blessedText}>{'2k'} {props.isConnect ? 'Followers' : 'Interested'}</Text>
                </View>
                <View style={styles.sharedView}>
                  <Ionicons name="share-social-sharp" size={dimensions.height >= 700 ? 21 : 18} color={COLORS.PRIMARYTEXT} />
                  <Text style={styles.blessedText}>{'200k'} Shared</Text>
                </View>
              </View>

            </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <TouchableOpacity style={styles.edit}>
        <Ionicons name={props?.isConnect ? 'heart-outline' : "pencil-sharp"} size={props.isConnect ? dimensions.height >= 700 ? 25 : 22 : 20} color={props.isConnect ? COLORS.SECONDARYTEXT : COLORS.CREATEBUTTON} />
      </TouchableOpacity>
      <View>

      </View>
      {props.isConnect ? 
          <View style={{height: '40%',paddingHorizontal: 15}}>
            <View style={{height: dimensions.height >= 700 ? '40%' : '20%', }}>  
              <Text style={[styles.aboutHeader,{marginTop: 0}]}>About</Text>
              <Text adjustsFontSizeToFit={true} numberOfLines={dimensions.height >= 700 ? 3 : 1} style={styles.aboutText}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
                mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              </Text>
            </View>
            <View style={{height: dimensions.height >= 700 ? '60%' : '80%',}}>  
              <Text style={[styles.aboutHeader,{marginTop: 0}]}>Posts</Text>
              <FlatList
                data={data}
                style={{height: '100%'}}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item, index}) => (
                  <>
                  {item.vid ?

                    <View style={{ width: 200, marginRight: 10 ,borderRadius: 10,height: dimensions.height >= 700 ? '100%' : '75%' , backgroundColor: 'red', overflow: 'hidden'}}>
                      <VideoPlayer contentFit={'fill'} full={true} isConnect={true} native={true} pause={true} video={item} />
                    
                      <LinearGradient
                        colors={['transparent', '#000']}
                        style={[styles.gradient, {position: item.vid && 'absolute', justifyContent: 'flex-end', bottom: 0,height: 50}]}
                      >
                        <View style={{height: 30, justifyContent: 'flex-end', marginBottom: -10}}>
                            <Text adjustsFontSizeToFit={true} numberOfLines={3} style={[styles.text, {color: COLORS.SECONDARYTEXT}]}>{item.title || item.text}</Text>
                        </View>
                      </LinearGradient>
                    
                    </View> :   
                    <View style={{height: dimensions.height >= 700 ? '100%' : '75%', width: 200,  marginRight: 10,borderRadius: 10, overflow: 'hidden'}}>
                      <ImageBackground style={[{backgroundColor: item.bg && item.bg, width: 200, justifyContent: 'flex-end', height: '100%'}]} resizeMode='cover' source={item.img && item.img}>           
                        <LinearGradient
                          colors={['transparent', '#000']}
                          style={[styles.gradient, {height: 100, padding:10, marginBottom:-5}]}
                        >
                          <View style={{height: 50, justifyContent: 'flex-end',}}>
                            <Text adjustsFontSizeToFit={true} numberOfLines={3} style={[styles.text, {color: COLORS.SECONDARYTEXT}]}>{item.title || item.text}</Text>
                          </View>
                        </LinearGradient>
                      </ImageBackground>
                    </View>
                }</>
                )} />
            </View>
          </View>

        :
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
            <View>
              <Text style={styles.dateText}>{props.item.startDate ? `${props?.item?.startDate} — ${props?.item?.endDate}` : 'Date: ' }</Text>
              <Text style={styles.subtext}>Weekends</Text>
            </View>

            <View style={styles.organizers}>
              <View style={{flexDirection: 'row', gap: 15, height: 60, width:'40%', alignItems: 'center'}}>
                <View style={{width:dimensions.height >= 700 ? 50 : 40, height:dimensions.height >= 700 ? 50 : 40, backgroundColor: 'rgb(38, 43, 42)',borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                {false ? <Image style={{width: dimensions.height >= 700 ? 50 : 40, height: dimensions.height >= 700 ? 50 : 40,borderRadius: 50,}} source={require('../assets/images/d2.jpeg')} /> : <Ionicons name="person-sharp" size={dimensions.height >= 700 ? 20 : 18} color={'lightgray'} />}
                </View>
                <View style={{width: '100%'}}>
                  <Text style={{color: 'white', fontSize: dimensions.height >= 700 ? 15 : 13, fontWeight: '500'}} adjustsFontSizeToFit={true} numberOfLines={1}>{props?.item?.speaker}</Text>
                  <Text style={{color: 'gray', fontSize: dimensions.height >= 700 ? 14 : 12, }}>Speaker</Text>
                </View>
              </View>
              
              <View style={{flexDirection: 'row', gap: 15, height: 60, width:'40%', alignItems: 'center'}}>
                <View style={{width: dimensions.height >= 700 ? 50 : 40, height: dimensions.height >= 700 ? 50 : 40, backgroundColor: 'rgb(38, 43, 42)',borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                  {true ? <Image style={{width: dimensions.height >= 700 ? 50 : 40, height: dimensions.height >= 700 ? 50 : 40,borderRadius: 50,}} source={require('../assets/images/d2.jpeg')} /> : <Ionicons name="person-sharp" size={dimensions.height >= 700 ? 20 : 18} color={'lightgray'} />}
                </View>
                <View>
                  <Text style={{color: 'white', fontSize: dimensions.height >= 700 ? 15 : 13, fontWeight: '500'}} adjustsFontSizeToFit={true} numberOfLines={1}>{props?.item?.organiser}</Text>
                  <Text style={{color: 'gray', fontSize: dimensions.height >= 700 ? 14 : 12, }}>Organiser</Text>
                </View>
              </View>
            </View>

            <View style={{height: "50%"}}>
              <Text style={styles.aboutHeader}>About</Text>
              <Text adjustsFontSizeToFit={true} numberOfLines={10} style={styles.aboutText}>
                {props?.item?.about}
              </Text>
            </View>

            <View>
              <TouchableOpacity style={styles.remove}>
                <Text style={styles.dateText}>Remove</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        }
    </View>
  </Modal>
)};


const modalStyles = (dimensions: any) => StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex: 1,
    },
    imageWrapper: {
      height: dimensions.height >= 700  ?  400 : 300,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      overflow: 'hidden',
    },
    bar: {
      width: 50,
      height: 3.5,
      backgroundColor: 'white',
      borderRadius: 50,
      alignSelf: 'center'
    },
    image: {
      height: '100%',
      justifyContent: 'space-between',
      paddingTop: 8,
    },
    gradient: {
      height: 200,
      width: '100%',
      justifyContent: 'flex-end',
      padding: 16,
    },
    overlayContent: {
      paddingBottom: 0,
    },
    title: {
      color: '#fff',
      fontSize: dimensions.height >= 700  ? 30 : 25,
      fontWeight: 'bold',
    },
    favView: {
      marginTop: 5,
      width: 300,
      flexDirection: 'row',
    },
    blessedView: {
      flexDirection: 'row',
      width: dimensions.width >= 400  ? 140 : 120,
      height: dimensions.height >= 700  ? 30 : 25,
      gap: 6,
      alignItems: 'center',
    },
    blessedText: {
      fontWeight: '500',
      fontSize: dimensions.height >= 700  ? 14 : 12,
      color: '#888888',
      lineHeight: 22,
    },
    sharedView: {
      flexDirection: 'row',
      width: dimensions.width >= 400  ? 140 : 120,
      height: dimensions.height >= 700  ? 30 : 25,
      gap: 6,
      alignItems: 'center',
    },
    sharedText: {
      fontWeight: '500',
      fontSize: dimensions.height >= 700  ? 14 : 12,
      color: '#888888',
      lineHeight: 22,
    },
    subtext: {
      color: '#aaa',
      fontSize: dimensions.height >= 700  ? 12 : 10,
      marginTop: 4,
    },
    content: {
      padding: 20,
      height: 450,
      backgroundColor: '#000',
      justifyContent: 'space-between'
    },
    dateText: {
      color: COLORS.PRIMARYTEXT,
      fontSize: dimensions.height >= 700  ? 16 : 14,
      fontWeight: '500'
    },
    organizers: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    label: {
      color: '#ddd',
      fontSize: dimensions.height >= 700 ? 14 : 12,
      marginTop: 4,
    },
    aboutHeader: {
      color: '#fff',
      fontWeight: '500',
      fontSize: dimensions.height >= 700 ? 18 : 15,
      marginTop: 20,
      marginBottom: 6,
    },
    aboutText: {
      color: '#ccc',
      fontSize: dimensions.height >= 700 ? 14 : 12,
      lineHeight: 20,
    },
    remove: {
      backgroundColor: 'orangered',
      height: dimensions.height >= 700 ? 40 : 35,
      alignSelf: 'center',
      width: dimensions.height >= 700 ?  '70%' : '65%',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
    edit: {
      position: 'absolute',
      top: dimensions.height >= 700 ? 360 : 270,
      zIndex: 9,
      right: 10,
      width: dimensions.height >= 700 ? 55 : 40,
      height: dimensions.height >= 700 ? 55 : 40,
      borderRadius: 50,
      backgroundColor:  'rgb(24, 29, 28)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: dimensions.height >= 700 ? 16 : 12,
      color: '#fff',
      fontWeight: '500'
    },
  });
  