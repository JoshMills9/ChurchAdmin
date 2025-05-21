import Feather from '@expo/vector-icons/Feather'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { COLORS } from '../constants/colors'

const ListComponent = ({connected} : any) => {
 
  const dimensions = useWindowDimensions()
  const styles = connectStyles(dimensions)
  const [search, setSeaarch] = useState('')
  const [connect, setConnect] = useState(false);
  const [isVisible, setIsvisble] = useState(false)
  const [isConnected, setIsConnected] = useState(false);
  const [Item, setItem] = useState({})

  const data = [
    { id: '1',  FirstName: 'Joshua', Email: 'joshuamills105@gmail.com',    LastName: 'Mills', img: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540joshmills%252FChurchAdmin/ImagePicker/c89f8857-3049-4f50-8876-045ed15fbb26.jpeg'},
    { id: '2',  FirstName: '@nemesis', lastName:'Perez Chapel Int',  img: require('../assets/images/d1.jpeg')},
    { id: '3',  firstName: '@brainiac', lastName: 'The '},
    { id: '4',  firstName: '@mills',    lastName: 'Machaceh Church', },
    { id: '5',  firstName: '@churchadmin', lastName: ' Lorem', img: require('../assets/images/d3.jpeg')},
    { id: '6',  firstName: '@roselyn', lastName: 'Pentecost Church'},    
    { id: '7',  firstName: '@mills', lastName: 'Machaceh Church'},
    { id: '8',  firstName: '@churchadmin',lastName: ' Lorem '},
    { id: '9',  firstName: '@roselyn',lastName: 'Pentecost Church',  img: require('../assets/images/d8.jpeg')},
    { id: '10', firstName: '@churchadmin',lastName: ' Lorem '},
    { id: '11', firstName: '@roselyn',lastName: 'Pentecost Church',  img: require('../assets/images/d8.jpeg')}
    ]

 

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        {<TextInput value={search} onChangeText={(txt) => setSeaarch(txt)} placeholderTextColor={COLORS.SECONDARYTEXT} placeholder='Search a member' style={styles.textInput} /> }
      </View>
      <View style={styles.bottomView}>
        {data && data.length !== 0 ? 
            <FlatList
              data={data?.filter(church => 
                church.FirstName && church.LastName && (church.FirstName.toLowerCase().includes(search.toLowerCase()) || 
                church.LastName.toLowerCase().includes(search.toLowerCase())))}
              style={{height:'100%',}}
              keyExtractor={(item) => item.id} 
              ListEmptyComponent={() => (
                    <View  style={{height: 500 ,paddingTop:40, alignItems: 'center'}}>
                      <Text style={{color: COLORS.SECONDARYTEXT, fontSize: 18, fontWeight: '500', textDecorationLine: 'underline'}}>Not found</Text>
                    </View> 
                  )}
              renderItem={({item, index}) => (
                <TouchableRipple rippleColor={'rgba(24, 29, 28, 0.8)'} onPress={() => {router.push({pathname: '/(protected)/(screens)/register', params: item})}} style={styles.itemView}>
                  <>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <View style={styles.imgView}>
                        {
                          item.img 
                          ? 
                          <Image source={item.img} style={{width: dimensions.height >= 700 ? 50 : 40 , height: dimensions.height >= 700 ? 50 : 40, borderRadius: 50}} /> 
                          : 
                          <Feather name='user' size={dimensions.height >= 700 ? 24 : 20} color={COLORS.SECONDARYTEXT} />
                        }
                      </View>
                      <View style={{width: 250, justifyContent: 'center', }}>
                        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.user}>{item.FirstName} {item.LastName}</Text>
                      </View>
                    </View>
                    <View style={{width: 50, alignItems: 'flex-end'}}>
                        <Feather name='chevron-right' size={24}  color={'dimgray'} />
                    </View>
                  </>
                </TouchableRipple>
              )}
              />
              :

              <View style={{height: '100%',}}>
                <Feather name='loader' size={80} color={COLORS.SECONDARYTEXT} />
              </View>
          }
      </View>
    </View>
  )
}

const connectStyles = (dimensions: any) => StyleSheet.create({
  container: {
    height: dimensions.height,
    paddingBottom: 15,
    width: '100%'
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
    height: dimensions.height >= 700 ? 70 : 60,
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
    fontSize:  dimensions.height >= 700 ? 18 : 12,
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

export default ListComponent