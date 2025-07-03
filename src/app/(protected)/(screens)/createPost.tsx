import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, ToastAndroid, TouchableOpacity, useWindowDimensions, View } from 'react-native'

import { postStyles } from '@/src/styles/post/post'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'


import { useExpoAudioRecorder } from '@/src/components/audioRecorder'
import VideoPlayer from '@/src/components/VideoPlayer'
import { COLORS } from '@/src/constants/colors'
import { getObject } from '@/src/constants/localStorage'
import { Picker } from '@/src/constants/picker'
import { useAudioPlayer } from 'expo-audio'

const CreatePost = () => {
    const router = useRouter()

    const img1 = require('../../../assets/images/d2.jpeg')
    const dimensions = useWindowDimensions()
    const styles = postStyles(dimensions)
    const { startRecording, stopRecording, isRecording, uri } = useExpoAudioRecorder();
    const player = useAudioPlayer(uri);

    useEffect(() => {
      if (player?.play) {
        player.play();
      }
    }, [player]);



    const [Posting, setPosting] = useState<any>(false)
    const [pallet, setPallet] = useState(false)
    const [color, setColor] = useState('');
    const [img, setImg] = useState<string>()
    const [text, setText] = useState('')
    const [vid, setVid] = useState<string>()
    const [title, setTitle] = useState('');
    const [voice, setVoice] = useState<boolean>();
    const [closeAlert, setCloseAlert] = useState<boolean>(true);
    const [error, setError] = useState()
    
    const colors = [
        {id: '1', color: 'red'},{id: '2', color: 'orange'},{id: '3', color: 'blue'},
        {id: '4', color: 'cyan'},{id: '5', color: 'orangered'},{id: '6', color: 'royalblue'},
        {id: '7', color: 'green'},{id: '8', color: 'gray'},{id: '9', color: 'dimgray'},
        {id: '10', color: 'brown'},{id: '11', color: 'gold'},{id: '12', color: 'cyan'},
    ]

    const post = {
        img: img,
        bg: color,
        text: text, 
        vid: vid,
        audio: voice, 
        title: title,
        tagged: [],
        comments: [{ id: '1', user: '@josh', comment: 'Nice post', img: require('../../../assets/images/d1.jpeg')},],
        blessed: [],
        shared: []
    }


    const createPost = async() => {
        setPosting(true)
        const user = await getObject('user');

        if (!user?.user?._id) {
            console.warn('User ID not found');
            return;
          }

        if(!title && !text && !img && !vid){
            setPosting(false)
            ToastAndroid.show("Post cannot be empty!", ToastAndroid.SHORT)
            return
        }else{
            try{
                const response = await fetch(`https://churchadmin-backend-api.onrender.com/admin/posts/${user.user._id}`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(post),
                  });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Failed to create post: ${errorText}`);
                  }

                const createdPost = await response.json();

                if (createdPost){
                    ToastAndroid.show("Post successfully sent!", ToastAndroid.SHORT)
                    router.navigate('/(protected)/(tabs)')
                }
              
            }catch(err){
                alert(err)
                setPosting(false)
            }
        }
        }
    








      //function to select media file
      const pickMediaFile = async(media: any) => {
        if(media === 'image'){
            const img = await Picker('image')
            if(img){
                setImg(img)
            }
        }else if(media === 'camera'){
            const img = await Picker('camera')
            if(img){
                console.log(img)
                setImg(img)
            }
        }else if(media === 'video'){
            const vid = await Picker('video')
            if(vid){
                setVid(vid)
            }
        }
       
      }

      const toggleRecording = async () => {
        if (isRecording) {
           await stopRecording();
           console.log('Recording stopped...');
        } else {
          await startRecording();
          console.log('Recording started...');
        }
      };





      
      const [keyboardHeight, setKeyboardHeight] = useState(0);

      useEffect(() => {
          const keyboardDidShowListener = Keyboard.addListener(
              'keyboardDidShow',
              (e: any) => {
                  setKeyboardHeight(e.endCoordinates.height);
              }
          );
  
          const keyboardDidHideListener = Keyboard.addListener(
              'keyboardDidHide',
              () => {
                  setKeyboardHeight(0);
              }
          );
  
          return () => {
              keyboardDidShowListener.remove();
              keyboardDidHideListener.remove();
          };
      }, []);
  
    

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} style={[styles.container,{backgroundColor: color,}]}>
        
        <View style={{position: 'absolute', top: 0,zIndex:9, padding: 10, width: '100%',justifyContent: 'space-between',alignItems: 'center', flexDirection:'row'}}>
            <TouchableOpacity style={{width: '11.5%', backgroundColor: "rgba(0,0,0,0.5)",justifyContent:'center', alignItems:'center', height: 45 , borderRadius: 50}} onPress={() => router.back()} >
                <Ionicons name='close-sharp' color={'white'} size={28} />
            </TouchableOpacity>
            {(vid || img || voice) ?
                <TouchableOpacity onPress={() => vid && setVid('') || img && setImg('') || voice   } style={[styles.cameraView,{ width: 80}]}>
                    <Text style={{fontSize: 15, color: 'white', fontWeight: '500'}}>Undo</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=> setPallet(!pallet)} style={styles.cameraView}>
                    <Ionicons name={pallet ? 'color-palette-sharp' : 'color-palette-outline'} size={30} color={'white'} />
                </TouchableOpacity>
            }

        </View>

        <View style={[styles.mainView, { overflow: 'hidden', borderRadius:10, width: dimensions.width,}]}>
            {vid ?
                <>
                    <TextInput autoFocus={true || vid} value={title} onChangeText={(txt) => setTitle(txt)} placeholder='Title' placeholderTextColor={'white'} cursorColor={'white'} style={{position: 'absolute',zIndex:9, top: 60, borderColor:'dimgray', borderWidth: 1, height: 50,borderRadius: 10,color:'white', fontSize: 16,fontWeight:'500', padding:15, width: '100%'}} />
                    <VideoPlayer isConnect={false} contentFit={'cover'} full={false} native={false} pause={false} video={vid} />
                </>                 
                :
                <ImageBackground style={styles.mainView} resizeMode='cover'   source={{uri: img}}>
                    {voice ? 
                        <View style={styles.micView}>
                            <View style={{width: 120, height: 120, borderRadius: 60, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                                <Ionicons name='mic-sharp' size={100} color={'rgb(0, 177, 86)'} style={{alignSelf: 'center'}} />
                            </View>
                        </View>                        
                        : 
                        <TextInput autoFocus={true || img} inputMode='text'  value={img ? title : text} onChangeText={(txt) => img ? setTitle(txt) : setText(txt)}  multiline={true} maxLength={200} cursorColor={'white'} placeholder={img ? 'Add Title' : "What's on your mind?"} placeholderTextColor={'white'} style={styles.textInput} /> }
                </ImageBackground>
            }
        </View>
        
        <View style={{height: 150, width: '100%', justifyContent: 'flex-end', paddingBottom: keyboardHeight > 10 ? keyboardHeight + 10 : 15 }}>
       

                <View style={{height: 50}}>
                    {pallet && <FlatList 
                        data={colors}
                        keyExtractor={(item) => item.id}
                        style={{padding: 15, zIndex: 9}}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({item, index}) => (
                            <TouchableOpacity  onPress={() => {setColor(item.color)}} style={{ backgroundColor: item.color, height: 35, width: 35,marginRight: 10, borderRadius:50, elevation:2 , borderWidth: color === item.color ? 2 : 0, borderColor: color === item.color ? 'white' : ''}} />     
                        )}
                        />
                    }
                </View>

                <View style={{height: 80,  width: '100%', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', padding: 10,}}>
                    <View style={{width: '60%', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center',}}>
                        <TouchableOpacity onPress={() => pickMediaFile('camera')} style={styles.cameraView}>
                            <Ionicons name='camera-outline' size={28} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => pickMediaFile('image')} style={styles.cameraView}>
                            <Ionicons name='image-outline' size={28} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => pickMediaFile('video')} style={styles.cameraView}>
                            <Ionicons name='videocam-outline' size={28} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {toggleRecording(); setVoice(() => !voice) }} style={styles.cameraView}>
                            <Ionicons name={voice ? 'mic-sharp' :'mic-outline'} size={28} color={voice ? COLORS.CREATEBUTTON : 'white'} />
                        </TouchableOpacity>
                    </View>
                    {(text || img || vid || voice) &&
             
                            <TouchableOpacity onPress={createPost} style={styles.post}>
                                {Posting ? 
                                    <ActivityIndicator color={COLORS.CREATEBUTTON} size={28} />
                                    :
                                    <Ionicons name='send-sharp' size={25} color={COLORS.CREATEBUTTON}  />
                                }
                            </TouchableOpacity>
                
                    }
                </View>

        </View>
    </KeyboardAvoidingView>
  )
}

export default CreatePost