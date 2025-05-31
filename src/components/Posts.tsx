import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { COLORS } from '../constants/colors';
import VideoPlayer from './VideoPlayer';
import ViewPost from './ViewPost';


const Posts = ({post}: any) => {
    //const [post, setPost] = useState();
  
  /*const data = [
    {id: '1', img: require('../assets/images/d5.jpeg'), bg: '', text: '',tagged: [], title: 'Fundraising Service' },
    {id: '2', img: '', bg: 'royalblue',tagged: [], text: 'Hello World, sakjhdkjshdk asjdhkasjh akjshdksna dahkj fakshfkjhalkjflk', },
    {id: '3', img: '', bg: '', text: 'Church Admin', },
    {id: '4', img: '', bg: '', text: '',title: 'Grace Effe',tagged: [], vid: require('../assets/videos/vid2.mp4') },
    {id: '5', img: require('../assets/images/d6.jpeg'), bg: '', text: '',tagged: [], title: 'Conference' },
    {id: '6', img: '', bg: '', text: '', vid: '', tagged: [{id: '3', bg: 'royalblue', img: '',vid: '' , text: 'Fundraising Service',title: '' ,comments: [], shared: [], blessed:[]  },]},
    {id: '7', img: '', bg: '', text: '', title: 'Now That We Are Married',tagged: [], vid: require('../assets/videos/vid.mp4'), comments: [{ id: '1', user: '@josh', comment: 'Nice post', img: require('../assets/images/d1.jpeg')},], shared: [], blessed:[] }
  ] */

  //const videoSource =
  //'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  
  const dimensions = useWindowDimensions()
  const styles = postStyles(dimensions)
  const [showPost, setShowPost] = useState(false)
  const [selected, setSelected] = useState({})

//"height": 783.2727272727273, "scale": 2.75, "width": 392.72727272727275}



  return (
    <View style={{height: dimensions.height >= 700 ? dimensions.height * 0.70 : dimensions.height * 0.69,paddingTop: showPost ? 0 : 10}}>
      {(post && post?.length !== 0) ? 
            <FlatList
            data={post?.sort((a:any, b:any) => b.id - a.id)}
            showsVerticalScrollIndicator={false}
            style={{flex: 1,}}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => {
              return(
              <Pressable onPress={() => {setShowPost(true); setSelected(item);}} style={styles.container}>
                {item.vid ?
                      <>
                      {(item.tagged && item.tagged?.length !== 0) ? 
                          item.tagged.map((item: any) => (
                            <View key={item.id} style={{ flex: 1}}>
                              <View style={{ width:70, flexDirection:'row', gap: 5,alignItems:"center",position:'absolute',top:5, right: 5, zIndex: 9,paddingHorizontal: 5, borderRadius:5, height:25, backgroundColor:'rgba(0,0,0,0.5)'}}>  
                                    <Ionicons name='ellipse-sharp' size={5} color={'red'} />
                                    <Text style={{fontSize: 12, color: 'white', fontWeight: '500'}}>Testified</Text>
                              </View>
                              <Pressable onPress={() => {setShowPost(true); setSelected(item);}} style={{height:'100%', position:'absolute',width:'100%', justifyContent:'center', alignItems: 'center', zIndex: 9,}}>
                                <Ionicons name='play-circle-sharp' size={80} color={'white'} />
                              </Pressable>  
                              <VideoPlayer isConnect={false} contentFit={'fill'} full={false} native={false} pause={showPost} video={item} />
                            
                              <LinearGradient
                                colors={['transparent', '#000']}
                                style={[styles.gradient, {position: item.vid ? 'absolute' : 'fixed', bottom: 0,}]}
                              >
                                {/* Title inside gradient */}
                                <View>
                                  <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.title}>{item.title}</Text>
                                  <View style={styles.favView}>
                                    <View style={styles.blessedView}>
                                      <Ionicons name="heart-outline" size={ dimensions.height >= 700 ? 21: 18} color={'#fff'} />
                                      <Text style={styles.blessedText}>{item?.blessed?.length} Blessed</Text>
                                    </View>
                                    <View style={styles.sharedView}>
                                      <Ionicons name="share-social-outline" size={dimensions.height >= 700 ? 21 : 18} color={'#fff'} />
                                      <Text style={styles.blessedText}>{item?.shared?.length} Shared</Text>
                                    </View>
                                  </View>

                                </View>
                              </LinearGradient>
                        
                            </View> 
                          ))
                          :
                        <View style={{ flex: 1,}}>
                          <Pressable onPress={() => {setShowPost(true); setSelected(item);}} style={{height:'100%', position:'absolute',width:'100%', justifyContent:'center', alignItems: 'center', zIndex: 9,}}>
                            <Ionicons name='play-circle-sharp' size={80} color={'white'} />
                          </Pressable>
                            <VideoPlayer isConnect={false} contentFit={'cover'} full={false} native={false} pause={!showPost} video={item} />
                        
                          <LinearGradient
                            colors={['transparent', '#000']}
                            style={[styles.gradient, {position: item.vid && 'absolute', bottom: 0,}]}
                          >
                            {/* Title inside gradient */}
                            <View>
                              <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.title}>{item.title}</Text>
                              <View style={styles.favView}>
                                <View style={styles.blessedView}>
                                  <Ionicons name="heart-outline" size={ dimensions.height >= 700 ? 21: 18} color={'#fff'} />
                                  <Text style={styles.blessedText}>{item?.blessed?.length} Blessed</Text>
                                </View>
                                <View style={styles.sharedView}>
                                  <Ionicons name="share-social-outline" size={dimensions.height >= 700 ? 21 : 18} color={'#fff'} />
                                  <Text style={styles.blessedText}>{item?.shared?.length} Shared</Text>
                                </View>
                              </View>

                            </View>
                          </LinearGradient>
                        
                        </View> 
                      }
                    </>
                    :   
                    
                    <>
                    { (item.tagged && item.tagged?.length !== 0) ?
                        
                        item.tagged.map((item: any) => (
                          <ImageBackground key={item.id} style={[styles.image, {backgroundColor: item.bg ? item.bg : ''}]} resizeMode='cover' source={{uri : item.img}}>
                            <View style={{ width:70, flexDirection:'row', gap: 5,alignItems:"center",position:'absolute',top:5, right: 5, zIndex: 9,paddingHorizontal: 5, borderRadius:5, height:25, backgroundColor:'rgba(0,0,0,0.5)'}}>  
                                    <Ionicons name='ellipse-sharp' size={5} color={'red'} />
                                    <Text style={{fontSize: 12, color: 'white', fontWeight: '500'}}>Testified</Text>
                            </View>

                            <View style={{flex: 1 ,padding: 15, justifyContent: 'center'}}>
                              <Text style={styles.text}>{item.text}</Text>
                            </View>

                            <LinearGradient
                              colors={['transparent', '#000']}
                              style={styles.gradient}
                            >
                              {/* Title inside gradient */}
                              <View>
                                <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.title}>{item.title}</Text>
                                <View style={styles.favView}>
                                  <View style={styles.blessedView}>
                                    <Ionicons name="heart-outline" size={ dimensions.height >= 700 ? 21: 18} color={'#fff'} />
                                    <Text style={styles.blessedText}>{item?.blessed?.length} Blessed</Text>
                                  </View>
                                  <View style={styles.sharedView}>
                                    <Ionicons name="share-social-outline" size={dimensions.height >= 700 ? 21 : 18} color={'#fff'} />
                                    <Text style={styles.blessedText}>{item?.shared?.length} Shared</Text>
                                  </View>
                                </View>

                              </View>
                            </LinearGradient>
                          </ImageBackground>
                        ))
                        :
                        <ImageBackground style={[styles.image, {backgroundColor: item.bg && item.bg}]} resizeMode='cover' source={{uri : item.img }}>
                            <View style={{flex: 1 ,padding: 15, justifyContent: 'center'}}>
                              <Text style={styles.text}>{item.text}</Text>
                            </View>

                          <LinearGradient
                            colors={['transparent', '#000']}
                            style={styles.gradient}
                          >
                            {/* Title inside gradient */}
                            <View>
                              <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.title}>{item.title}</Text>
                              <View style={styles.favView}>
                                <View style={styles.blessedView}>
                                  <Ionicons name="heart-outline" size={ dimensions.height >= 700 ? 21: 18} color={'#fff'} />
                                  <Text style={styles.blessedText}>{item?.blessed?.length} Blessed</Text>
                                </View>
                                <View style={styles.sharedView}>
                                  <Ionicons name="share-social-outline" size={dimensions.height >= 700 ? 21 : 18} color={'#fff'} />
                                  <Text style={styles.blessedText}>{item?.shared?.length} Shared</Text>
                                </View>
                              </View>

                            </View>
                          </LinearGradient>
                        </ImageBackground>
                    }
                    </>
                }
              </Pressable>
            )}}
            />  
        :

        <View style={{flex: 1}}>
            <Link href={'/(protected)/(screens)/createPost'} asChild push>
                <TouchableOpacity style={{justifyContent: 'center',position: 'absolute', bottom: 0, right:0,  alignItems: 'center', width: 60, height:60, borderRadius: 50, backgroundColor:  'rgb(38, 43, 42)', }}>
                <Ionicons name='create-outline' size={23} color={COLORS.CREATEBUTTON} />
              </TouchableOpacity>
            </Link>
         </View>
      }
    {showPost && <ViewPost item={selected} onClose={(value: any) => setShowPost(value)}/>}
    </View>
  )
}

const postStyles = (dimensions: any) => StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderRadius: 5,
    marginVertical: 15,
    overflow: 'hidden',
    height: dimensions.height >= 700 ? 280 : 250,
  },
  image: {
    height: dimensions.height >= 700 ? 280 : 250,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500'
  },
  gradient: {
    height: 55,
    width: '100%',
    justifyContent: 'flex-end',
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    width: '90%'
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
    fontWeight: '400',
    fontSize: dimensions.height >= 700  ? 13 : 11,
    color: '#fff',
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
    fontWeight: '400',
    fontSize: dimensions.height >= 700  ? 14 : 12,
    color: '#fff',
    lineHeight: 22,
  },
})

export default Posts