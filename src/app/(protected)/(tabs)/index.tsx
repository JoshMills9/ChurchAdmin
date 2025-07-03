import React, { useLayoutEffect, useRef, useState } from 'react'

import Connect from '@/src/components/Connect'
import Feeds from '@/src/components/feeds'
import Gradientbackground from '@/src/components/Gradientbackground'
import HomeHeader from '@/src/components/homeHeader'
 
import Posts from '@/src/components/Posts'
import { useWindowDimensions, View } from 'react-native'

import { getObject, setObject } from '@/src/constants/localStorage'

const HomeScreen = () => {
   
    const isConnected = useRef(false)
    const [post, setPost] = useState<any>([]);
    const [event, setEvent] = useState<any>([])
    const [data, setData] = useState<any>([])

      const checkConnectedStatus = async () => {
        try {
          const value = await getObject('connected')
          if (value) {
            isConnected.current = true;
          } else {
            isConnected.current = false;
          }
        } catch (error) {
          console.error('Error checking connect status', error);
        }
       
      };

        
      const getPosts = async () => {
        const user = await getObject('user')
        setPost(user.user.posts.reverse())
      } 


      const getEvents = async() => {
         const user =  await getObject('user')
         setEvent(user.user.events.reverse()) 
      }

 

      const getChurches = async() => {
        try{
          const res = await fetch('https://churchadmin-backend-api.onrender.com/admin/users');
          const data = await res.json()
         setData(data)
        }catch(err){
          console.log(err)
        }
      }
  



      const getInfo =  async () => {
        const obj = await getObject('user')
        if(obj){
          setObject('user', {user: obj.user , status: true})
        }
      }
    



      useLayoutEffect(() => {
        checkConnectedStatus();
        getPosts();
        getEvents()
        getChurches()
        getInfo();
      }, [post, event, data])
  


  

      



  const [show, setShow] = useState('feeds')
  const dimensions = useWindowDimensions()

  return (
    <Gradientbackground>
      <View style={{height: dimensions.height >= 700 ? dimensions.height * 0.18 : dimensions.height * 0.13,}}>
        <HomeHeader picker={false} isSettings={false} isHome={true} screen={(value: any) => setShow(value)} />
      </View>
      <View style={{ height: dimensions.height >= 700 ? dimensions.height * 0.7 : dimensions.height * 0.67}}>
        { show === 'feeds' && <Feeds event={event} /> }
        { show === 'posts' && <Posts post={post} /> }
        { show === 'connect' && <Connect connected={isConnected.current} data={data}/> }
      </View>
    </Gradientbackground>
  )
}

export default HomeScreen
