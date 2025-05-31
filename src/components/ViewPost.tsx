import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { FlatList, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { COLORS } from '../constants/colors'
import VideoPlayer from './VideoPlayer'

const ViewPost = ({onClose, item}: {onClose: any, item: any}) => {
  
    const dimensions = useWindowDimensions()
    const styles = modalStyles(dimensions)

    const data = [
        { id: '1', user: '@josh', comment: 'Nice post', img: require('../assets/images/d1.jpeg')},
        { id: '2', user: '@nemesis', comment: 'blessed', img: require('../assets/images/d6.jpeg')},
        { id: '3', user: '@brainiac', comment: 'this is powerful', img: require('../assets/images/d3.jpeg')},
        { id: '4', user: '@mills', comment: 'Hallelujah', img: ''},
        { id: '5', user: '@churchadmin', comment: ' Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massami. Aliquam in hendrerit urna. Pellentesque sit amet sapien Maecenas', img: ''},
        { id: '6', user: '@roselyn', comment: ' Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa', img: require('../assets/images/d8.jpeg')}
    ]


   





  return (
   <Modal presentationStyle='formSheet' visible={true} backdropColor={'transparent'} onRequestClose={() => onClose(false)} animationType='fade'>
        <Pressable  style={styles.container}>
            
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => onClose(false)} style={styles.closeView} >
                    <Ionicons name='close-sharp' size={24} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.closeView, {alignItems: 'flex-end'}]}>
                    <Text style={styles.edit}>Repost</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1,}}>
                {item.vid ?
                    <>
                        {(item.tagged && item.tagged?.length !== 0) ? 
                             item.tagged.map((item: any) => (
                                <View key={item.id} style={{flex: 1}}>
                                    
                                    <VideoPlayer contentFit={'cover'} isConnect={false} native={true}  full={false} pause={''} video={item}  />
                                    
                                    <LinearGradient
                                    colors={['transparent', '#000']}
                                    style={[styles.gradient, {position: item.vid && 'absolute', bottom: 0,}]}
                                    >
                                        {/* Title inside gradient */}
                                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.title, {bottom: 10}]}>{item.title}</Text>
                                        
                                        <View>
                                        {(item?.comments?.length !== 0) && <Text style={styles.commentText}>{'Comments: '} {item.comments?.length}</Text>}
                                        </View>
                                        
                                        <FlatList
                                        data={item?.comments}
                                        style={{flex: 1}}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({item, index}) => (
                                            <View style={styles.commentView}>
                                                <View style={{width: dimensions.height >= 700 ? 50 : 40,  height: dimensions.height >= 700 ? 50 : 40 , borderRadius: 50, justifyContent:'center', alignItems: 'center', elevation: 5, backgroundColor: 'rgba(24, 29, 28, 0.85)'}}>
                                                    {item.img ?
                                                        <Image source={item.img} style={{width: dimensions.height >= 700 ? 50 : 40, height:dimensions.height >= 700 ?  50 : 40 , borderRadius: 50}} />
                                                        :
                                                        <Ionicons name='person-sharp' size={25} color={'gray'}  />
                                                    }   
                                                </View>
                                                <View style={{width: '85%', paddingHorizontal: 5 ,justifyContent: 'space-between'}}>
                                                    <Text style={styles.user}>{item.user}</Text>
                                                    <Text adjustsFontSizeToFit={true} numberOfLines={3} style={styles.comment}>{item.comment}</Text>
                                                </View>
                                            </View>
                                        )}
                                        />
                                    </LinearGradient>
                                </View> 
                             ))
                             :
                             <View style={{flex: 1}}>
                                    
                                    <VideoPlayer contentFit={'cover'} isConnect={false} native={true}  full={false} pause={''} video={item}  />
                                    
                                    <LinearGradient
                                    colors={['transparent', '#000']}
                                    style={[styles.gradient, {position: item.vid && 'absolute', bottom: 0,}]}
                                    >
                                        {/* Title inside gradient */}
                                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.title, {bottom: 10}]}>{item.title}</Text>
                                        
                                        <View>
                                        {(item?.comments?.length !== 0) && <Text style={styles.commentText}>{'Comments: '} {item.comments?.length}</Text>}
                                        </View>
                                        
                                        <FlatList
                                        data={item?.comments}
                                        style={{flex: 1}}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({item, index}) => (
                                            <View style={styles.commentView}>
                                                <View style={{width: dimensions.height >= 700 ? 50 : 40,  height: dimensions.height >= 700 ? 50 : 40 , borderRadius: 50, justifyContent:'center', alignItems: 'center', elevation: 5, backgroundColor: 'rgba(24, 29, 28, 0.85)'}}>
                                                    {item.img ?
                                                        <Image source={item.img} style={{width: dimensions.height >= 700 ? 50 : 40, height:dimensions.height >= 700 ?  50 : 40 , borderRadius: 50}} />
                                                        :
                                                        <Ionicons name='person-sharp' size={25} color={'gray'}  />
                                                    }   
                                                </View>
                                                <View style={{width: '85%', paddingHorizontal: 5 ,justifyContent: 'space-between'}}>
                                                    <Text style={styles.user}>{item.user}</Text>
                                                    <Text adjustsFontSizeToFit={true} numberOfLines={3} style={styles.comment}>{item.comment}</Text>
                                                </View>
                                            </View>
                                        )}
                                        />
                                    </LinearGradient>
                                </View> 
                            }
                    </>
                :
                    <>
                        { (item.tagged && item.tagged?.length !== 0) ?
                             item.tagged.map((item: any) => (
                                <ImageBackground key={item.id} style={[styles.image, {backgroundColor: item.bg, height: '100%', width: '100%',}]} resizeMode='cover' source={{uri : item.img }}>
                                    <View style={{flex: 1, justifyContent: 'center',}}>
                                        <View style={{padding: 15}}>
                                        <Text style={styles.text}>{item.text}</Text>
                                        </View> 
                                    </View>

                                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.title, {marginLeft: 15}]}>{item.title}</Text>
                                    <LinearGradient
                                    colors={['transparent', '#000']}
                                    style={styles.gradient}
                                    >
                                        {/* Title inside gradient */}
                                        <View>
                                        {(item?.comments?.length !== 0) && <Text style={styles.commentText}>{'Comments: '} {item.comments?.length}</Text>}
                                        </View>

                                        <FlatList
                                        data={item?.comments}
                                        style={{flex: 1}}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({item, index}) => (
                                            <View style={styles.commentView}>
                                                <View style={{width: 50, height: 50 , borderRadius: 50, justifyContent:'center', alignItems: 'center', elevation: 5, backgroundColor: 'rgba(24, 29, 28, 0.85)'}}>
                                                    {item.img ?
                                                        <Image source={item.img} style={{width: 50, height: 50 , borderRadius: 50}} />
                                                        :
                                                        <Ionicons name='person-sharp' size={25} color={'gray'}  />
                                                    }   
                                                </View>
                                                <View style={{width: '85%', paddingHorizontal: 5 ,justifyContent: 'space-between', gap: 5}}>
                                                    <Text style={styles.user}>{item.user}</Text>
                                                    <Text adjustsFontSizeToFit={true} numberOfLines={2} style={styles.comment}>{item.comment}</Text>
                                                </View>
                                            </View>
                                        )}
                                        />
                                    </LinearGradient>
                                </ImageBackground>
                             ))
                            :
                            <ImageBackground style={[styles.image, {backgroundColor: item.bg, height: '100%', width: dimensions.width,}]}   source={{uri : item.img}}>
                                <View style={{flex: 1, justifyContent: 'center',}}>
                                    <View style={{padding: 15}}>
                                    <Text style={styles.text}>{item.text}</Text>
                                    </View> 
                                </View>

                                <Text adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.title, {marginLeft: 15}]}>{item.title}</Text>
                                <LinearGradient
                                colors={['transparent', '#000']}
                                style={styles.gradient}
                                >
                                    {/* Title inside gradient */}
                                    <View>
                                    {(item?.comments?.length !== 0) && <Text style={styles.commentText}>{'Comments: '} {item.comments?.length}</Text>}
                                    </View>

                                    <FlatList
                                    data={item?.comments}
                                    style={{flex: 1}}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({item, index}) => (
                                        <View style={styles.commentView}>
                                            <View style={{width: 50, height: 50 , borderRadius: 50, justifyContent:'center', alignItems: 'center', elevation: 5, backgroundColor: 'rgba(24, 29, 28, 0.85)'}}>
                                                {item.img ?
                                                    <Image source={item.img}  style={{width: 50, height: 50 , borderRadius: 50}} />
                                                    :
                                                    <Ionicons name='person-sharp' size={25} color={'gray'}  />
                                                }   
                                            </View>
                                            <View style={{width: '85%', paddingHorizontal: 5 ,justifyContent: 'space-between', gap: 5}}>
                                                <Text style={styles.user}>{item.user}</Text>
                                                <Text adjustsFontSizeToFit={true} numberOfLines={2} style={styles.comment}>{item.comment}</Text>
                                            </View>
                                        </View>
                                    )}
                                    />
                                </LinearGradient>
                            </ImageBackground>
                        }
                    </>
                }
            </View>

            <Pressable style={styles.bottomView}>
                <View style={{flexDirection: 'row',paddingHorizontal:20,  justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={{ width: '40%', height: 70, justifyContent:'center', }}>
                        <Ionicons name='share-social-outline' size={dimensions.height >= 700 ? 26 : 22} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '40%', height: 70 ,justifyContent:'center', alignItems: 'flex-end'}}>
                        <Ionicons name='trash-outline' size={dimensions.height >= 700 ? 26 : 22} color={'white'} />
                    </TouchableOpacity>
                </View>
            </Pressable>
        </Pressable>
   </Modal>
  )
}

const modalStyles = (dimensions: any) => StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.90)',
        width: dimensions.width,
        height: '100%', 
        justifyContent: 'space-between'
        
    },
    topView: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent:'space-between',
        position: 'absolute',
        top: 0,
        zIndex: 99

    },
    closeView: {
        width: '40%',
    },
    image: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
      title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
        width: '90%',
        alignSelf: 'flex-start',
      }, 
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '500'
    },
    bottomView: {
        height: dimensions.height >= 700 ? 60 : 50,
        width: dimensions.width,
        backgroundColor: '#000',
    },
    gradient: {
        height: dimensions.height >= 700 ? 220 : 200,
        width: dimensions.width,
        padding: 15,
      },
      commentView: {
        marginTop: 5,
        flexDirection: 'row',
        height: 65,
        alignItems: 'center',
        gap: 5,
      },
      commentText: {
        fontWeight: '400',
        fontSize: dimensions.height >= 700  ? 16 : 15,
        color: '#fff',
        lineHeight: 22,
      },
    edit: {
        color: COLORS.PRIMARYTEXT,
        fontWeight: '500',
        fontSize: dimensions.height >= 700 ? 20 : 16,
    },
    user: {
        fontSize:  dimensions.height >= 700 ? 15 : 13,
        fontWeight: '400',
        color: '#fff'
    },
    comment: {
        fontSize: dimensions.height >= 700 ?  12 : 10, 
        fontWeight: '400',
        color: 'lightgray',
        textAlign: 'justify',
    }
})

export default ViewPost