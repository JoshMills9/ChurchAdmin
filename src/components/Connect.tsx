import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { COLORS } from '../constants/colors'
import CommunityConnect from './CommunityConnect'
import { ModalView } from './eventModal'

const Connect = ({connected} : any) => {
 
  const dimensions = useWindowDimensions()
  const styles = connectStyles(dimensions)
  const [search, setSeaarch] = useState('')
  const [connect, setConnect] = useState(false);
  const [isVisible, setIsvisble] = useState(false)
  const [isConnected, setIsConnected] = useState(false);
  const [Item, setItem] = useState({})

  const data = [
    { id: '1', user: '@josh', title: 'Gloryland AG', img: require('../assets/images/d6.jpeg')},
    { id: '2', user: '@nemesis', title: 'Perez Chapel Int',  img: require('../assets/images/d1.jpeg')},
    { id: '3', user: '@brainiac', title: 'The Mega Church'},
    { id: '4', user: '@mills', title: 'Machaceh Church'},
    { id: '5', user: '@churchadmin', title: ' Lorem ipsum dolor siMaecenas', img: require('../assets/images/d3.jpeg')},
    { id: '6', user: '@roselyn', title: 'Pentecost Church'},    
    { id: '7', user: '@mills', title: 'Machaceh Church'},
    { id: '8', user: '@churchadmin', title: ' Lorem ipsum dolor siMaecenas'},
    { id: '9', user: '@roselyn', title: 'Pentecost Church',  img: require('../assets/images/d8.jpeg')}
  
    ]

 

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        {(connect || connected) && <TextInput value={search} onChangeText={(txt) => setSeaarch(txt)} placeholderTextColor={COLORS.SECONDARYTEXT} placeholder='Search a church' style={styles.textInput} /> }
      </View>
      <View style={styles.bottomView}>
        {data && data.length !== 0 ? 
            <FlatList
              data={connect || connected ? data?.filter(church => 
                church.title && church.user && (church.title.toLowerCase().includes(search.toLowerCase()) || 
                church.user.toLowerCase().includes(search.toLowerCase()))) : []}
              style={{height:'100%',}}
              keyExtractor={(item) => item.id} 
              ListEmptyComponent={() => (
                  (connect || connected) &&  
                    <View  style={{height: 500 ,paddingTop:40, alignItems: 'center'}}>
                      <Text style={{color: COLORS.SECONDARYTEXT, fontSize: 18, fontWeight: '500', textDecorationLine: 'underline'}}>Not found</Text>
                    </View> 
                  )}
              renderItem={({item, index}) => (
                <TouchableRipple rippleColor={'rgba(24, 29, 28, 0.8)'} onPress={() => { setIsvisble(true) ; setItem(item);}} style={styles.itemView}>
                  <>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <View style={styles.imgView}>
                        {
                          item.img 
                          ? 
                          <Image source={item.img} style={{width: dimensions.height >= 700 ? 50 : 40 , height: dimensions.height >= 700 ? 50 : 40, borderRadius: 50}} /> 
                          : 
                          <Ionicons name='person-outline' size={dimensions.height >= 700 ? 24 : 20} color={COLORS.SECONDARYTEXT} />
                        }
                      </View>
                      <View style={{gap: 3, width: 190}}>
                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.user}>{item.title}</Text>
                        <Text style={styles.comment}>{item.user}</Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => setIsConnected(!isConnected)} style={[styles.connect, {backgroundColor: isConnected ? 'rgba(38, 43, 42, 0.8)' : '' }]}>
                      <Text adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.connectText, {color: isConnected ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT}]}>{isConnected ? 'Following' : 'Follow'}</Text>
                    </TouchableOpacity>
                  </>
                </TouchableRipple>
              )}
              />
              :

              <View style={{height: '100%',}}>
                  <CommunityConnect onPress={(value: any) => setConnect(value)} />
              </View>
          }
      </View>
      {
        isVisible && <ModalView item={Item} isConnect={true} onClose={(value: any) => setIsvisble(value)} />
      }
    </View>
  )
}

const connectStyles = (dimensions: any) => StyleSheet.create({
  container: {
    height: dimensions.height >= 700 ? dimensions.height * 0.70 : dimensions.height * 0.69,
    marginTop: 10
  },
  topView: {
    height: 60,
    justifyContent: 'center'
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 5,
  },
  textInput: {
    height: dimensions.height >= 700 ?  45 : 35,
    paddingVertical: dimensions.height >= 700 ? 10 : 0,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'dimgray',
    color: 'white',
    fontSize: dimensions.height >= 700 ? 16 : 13,
    fontWeight: '500'
  },
  itemView: {
    height: dimensions.height >= 700 ? 80 : 60,
    borderBottomWidth: 0.5,
    borderColor: 'dimgray',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  imgView: {
    height: dimensions.height >= 700 ? 50 : 40,
    width: dimensions.height >= 700 ?  50 : 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(38, 43, 42, 0.8)',
  },
  user: {
    fontSize:  dimensions.height >= 700 ? 16 : 12,
    fontWeight: '500',
    color: '#fff'
  },
  comment: {
    fontSize: dimensions.height >= 700 ?  14 : 10, 
    fontWeight: '400',
    color: 'lightgray',
  },
  connect: {
    width: dimensions.height >= 700 ? 80 : 60,
    height: dimensions.height >= 700 ? 35 : 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(38, 43, 42)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  connectText: {
    fontWeight: '500',
    fontSize: dimensions.height >= 700 ? 13 : 10
  }
})

export default Connect