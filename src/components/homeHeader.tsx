import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { COLORS } from '../constants/colors';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Badge } from "react-native-paper";
//import DateTimePicker from '@react-native-community/datetimepicker';

const HomeHeader = ({screen, isHome, isSettings, picker}: {screen: any, isHome: any, isSettings: any, picker: any,}) => {

    const dimensions = useWindowDimensions();
    const styles = headerStyles(dimensions);
    const img = require('../assets/images/d2.jpeg')
    const [isFeed, setFeed] = useState(true);
    const [isPost, setPost] = useState(false);
    const [isConnect, setConnect] = useState(false)
    const [church, setChurchName] = useState('')
    const [Img, setImg] = useState<string>('')
    const [greeting, setGreeting] = useState<any>(new Date().getHours());


    if(greeting < 12){
        setGreeting("Good morning,");
    }else if(greeting >= 12 && greeting < 17 ){
        setGreeting("Good afternoon,");
    }else if(greeting >= 17){
        setGreeting("Good evening,");
    }



        const getProfile = async () => {
            try {
                const value = await AsyncStorage.getItem('Profile');
                if (value) {
                  const p = JSON.parse(value)
                  setImg(p)
                }
              } catch (error) {
                console.error('Error checking post', error);
            }
            try{
                const user = await AsyncStorage.getItem('user');
                if(user){
                    const u = JSON.parse(user);
                    setChurchName(u.churchName)
                }
            }catch(err){
                console.error('Error checking post', err);
            }
        }
        getProfile()


    
     


  return (
    <View style={[styles.container, {height: isHome ? dimensions.height >= 700 ? dimensions.height * 0.15 : dimensions.height * 0.13  :  dimensions.height * 0.12,}]}>
        <View style={styles.mainView}>
            <View style={styles.infoView}>
                <TouchableOpacity disabled={!isSettings} onPress={() => picker(true)} style={styles.imgView}>
                    {Img ?
                        <Image source={{uri: Img}}   style={{width: dimensions.width >= 400 ? 70 : 70, height: dimensions.height >= 700 ? 70 : 70, borderRadius: 50}} />
                        :
                        <View style={{ width: dimensions.width >= 400 ? 70 : 70, height: dimensions.height >= 700 ? 70 : 70, }}>
                            <Ionicons name="person-circle-sharp" size={75}  color={COLORS.SECONDARYTEXT} />
                        </View>
                    }
                    {isSettings &&
                        <View style={{position:'absolute',elevation:5, bottom:10, right: 0,borderWidth:0.5, borderColor:"dimgray", backgroundColor:"lightgray",width:23,justifyContent:"center",alignItems:"center", height:23, borderRadius:50}}>
                          <Ionicons name="camera-outline" size={16} />
                        </View>
                    }
                </TouchableOpacity>
                <View style={styles.greetingView}>
                    <Text style={styles.text}>{greeting}</Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.churchText}>{church}</Text>
                </View>
            </View>
            <View style={styles.notificationView}>
                <Ionicons name='notifications-outline' color={"lightgray"}  size={dimensions.height >= 700 ? 24 : 18}/>
                {<Badge style={{position:"absolute",top:9,right: dimensions.height >= 700 ? 12 : 7}} size={dimensions.height >= 700 ? 8 : 5} />} 
            </View>
        </View>
        {isHome &&
            <View style={styles.bottomView}>
            <Pressable onPress={() => {setFeed(true); screen('feeds');  setPost(false); setConnect(false)}} style={styles.postView}>
                    {({pressed}) => (
                        <View style={{flexDirection: 'row', height: '100%',width:'100%', gap: 8 , borderBottomWidth: pressed || isFeed ?  1 : 0,
                            borderBottomColor:  pressed || isFeed ? COLORS.CREATEBUTTON : '', justifyContent: 'center', alignItems: 'center'}}>

                            <Ionicons name={isFeed ? 'newspaper-sharp' : 'newspaper-outline'} color={pressed || isFeed ? COLORS.CREATEBUTTON :  COLORS.SECONDARYTEXT} size={(isFeed || pressed) ? dimensions.height >= 700 ? 22 : 21 : 20} />
                            <Text style={[styles.actionText, {color: pressed || isFeed ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT, fontSize: (isFeed || pressed)  ? dimensions.height >= 700 ? 15 : 14 : 13,}]}>Feeds</Text>
                                                    
                        </View>
                        )}
                </Pressable>
                <Pressable onPress={() => {setFeed(false); setPost(true); screen('posts'); setConnect(false)}} style={styles.postView}>
                    {({pressed}) => (
                        <View style={{flexDirection: 'row', height: '100%',width:'100%', gap: 8 , borderBottomWidth: pressed || isPost ?  1 : 0,
                            borderBottomColor:  pressed || isPost ? COLORS.CREATEBUTTON : '', justifyContent: 'center', alignItems: 'center'}}>

                            <Ionicons name={isPost ? 'albums-sharp' : 'albums-outline'} color={pressed || isPost ? COLORS.CREATEBUTTON :  COLORS.SECONDARYTEXT} size={(isPost || pressed)  ? dimensions.height >= 700 ? 22 : 21 : 20} />
                            <Text style={[styles.actionText, {color: pressed || isPost ? COLORS.CREATEBUTTON :  COLORS.SECONDARYTEXT, fontSize: (isPost || pressed)  ? dimensions.height >= 700 ? 15 : 14 : 13,}]}>Posts</Text>
                                                    
                        </View>
                        )}
                </Pressable>
                <Pressable onPress={() => {setFeed(false); setPost(false); setConnect(true); screen('connect');}} style={styles.postView}>
                    {({pressed}) => (
                        <View style={{flexDirection: 'row', height: '100%',width:'100%', gap: 8 , borderBottomWidth: pressed || isConnect ?  1 : 0,
                            borderBottomColor:  pressed || isConnect ? COLORS.CREATEBUTTON : '', justifyContent: 'center', alignItems: 'center'}}>

                            <Ionicons name={isConnect ? 'people-sharp' : 'people-outline'} color={pressed || isConnect ? COLORS.CREATEBUTTON :  COLORS.SECONDARYTEXT} size={(isConnect || pressed)  ? dimensions.height >= 700 ? 22 : 21 : 20} />
                            <Text style={[styles.actionText, {color: pressed || isConnect ? COLORS.CREATEBUTTON :  COLORS.SECONDARYTEXT, fontSize: (isConnect || pressed)  ? dimensions.height >= 700 ? 15 : 14 : 13,}]}>Connect</Text>

                        </View>
                        )}
                </Pressable>
            </View>
        }
    </View>
  )
}



const headerStyles = (dimensions: any) => StyleSheet.create({
    container: {
        height: dimensions.height >= 700 ? dimensions.height * 0.19 : dimensions.height * 0.15,
        width: '100%',
    },
    mainView: {
        height: dimensions.height >= 700 ? dimensions.height * 0.075 : dimensions.height * 0.070 ,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    infoView: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    imgView: {
        height: dimensions.height >= 700 ? dimensions.height * 0.11 : dimensions.height * 0.075 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingView: {
        maxHeight: dimensions.height >= 700 ? dimensions.height * 0.11 : dimensions.height * 0.075 ,
        justifyContent: 'center',
        maxWidth: dimensions.width >= 400 ? dimensions.width * 0.55 : dimensions.width * 0.5 
    },
    notificationView: {
        height: dimensions.height >= 700 ? dimensions.height * 0.048 : dimensions.height * 0.05 ,
        justifyContent: 'center',
        backgroundColor: 'rgb(24, 29, 28)',
        width: dimensions.width >= 400 ? 42 : 40,
        alignItems: 'center',
        borderRadius: 50
    },
    bottomView: {
        height: dimensions.height >= 700 ? dimensions.height * 0.1 : dimensions.height * 0.10 ,
        width: '120%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    postView: {
        height: '55%',
        width: '33%',
        borderBottomWidth: 1.5,
        borderBottomColor: 'rgba(12, 19, 5, 0.76)',
    },
    text: {
        fontSize: dimensions.height >= 700 ? 16 : 13,
        color: COLORS.SECONDARYTEXT,
    },
    churchText: {
        fontSize: dimensions.height >= 700 ? 18 : 15,
        fontWeight: '500',
        color: COLORS.PRIMARYTEXT
    },
    actionText: {
        fontWeight: '600',
    }
})

export default HomeHeader