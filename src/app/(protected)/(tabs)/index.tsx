import React, { useEffect, useRef, useState } from 'react'

import Connect from '@/src/components/Connect'
import Feeds from '@/src/components/feeds'
import Gradientbackground from '@/src/components/Gradientbackground'
import HomeHeader from '@/src/components/homeHeader'
 
import Posts from '@/src/components/Posts'
import { useWindowDimensions, View } from 'react-native'

import { getObject, setObject } from '@/src/constants/localStorage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {
   
    const isConnected = useRef(false)
    const [post, setPost] = useState();

    useEffect(() => {
      const obj = getObject('user')
      setObject('user', {user: obj.user , status: true})
    }, [])

  

      const checkConnectedStatus = async () => {
        try {
          const value = await AsyncStorage.getItem('connected');
          if (value === 'connect') {
            isConnected.current = true;
          } else {
            isConnected.current = false;
          }
        } catch (error) {
          console.error('Error checking connect status', error);
        }

        try {
          const value = await AsyncStorage.getItem('Posts');
          if (value) {
            const p = JSON.parse(value)
            setPost(p)
          }
        } catch (error) {
          console.error('Error checking post', error);
        }
      };
   
      checkConnectedStatus()

  const [show, setShow] = useState('feeds')
  const dimensions = useWindowDimensions()

  return (
    <Gradientbackground>
      <View style={{height: dimensions.height >= 700 ? dimensions.height * 0.18 : dimensions.height * 0.13,}}>
        <HomeHeader picker={false} isSettings={false} isHome={true} screen={(value: any) => setShow(value)} />
      </View>
      <View style={{ height: dimensions.height >= 700 ? dimensions.height * 0.7 : dimensions.height * 0.67}}>
        { show === 'feeds' && <Feeds /> }
        { show === 'posts' && <Posts post={post} /> }
        { show === 'connect' && <Connect connected={isConnected.current}/> }
      </View>
    </Gradientbackground>
  )
}

export default HomeScreen
