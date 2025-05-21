import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, ImageBackground, Pressable, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { homeStyles } from '../styles/home/home.styles';
import { ModalView } from './eventModal';

const Feeds = () => {

  const data = [
    { id: '1', speaker: 'John Doe',  organiser: 'Daniel M', startDate: '19 June, 2025', endDate: '20 June, 2025',  title: 'Gloryland AG', about: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa', img: require('../assets/images/d6.jpeg')},
    { id: '2', user: '@nemesis', title: 'Perez Chapel Int',  img: require('../assets/images/d1.jpeg')},
    { id: '3', user: '@brainiac', title: 'The Mega Church' , about: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa'},
    { id: '4', user: '@mills', title: 'Machaceh Church'},
    { id: '5', user: '@churchadmin', title: ' Lorem ipsum dolor siMaecenas', img: require('../assets/images/d3.jpeg')},
    { id: '6', user: '@roselyn', title: 'Pentecost Church'},    
    { id: '7', user: '@mills', title: 'Machaceh Church'},
    { id: '8', user: '@churchadmin', title: ' Lorem ipsum dolor siMaecenas'},
    { id: '9', user: '@roselyn', title: 'Pentecost Church',  img: require('../assets/images/d8.jpeg')}
    
    ]

  const dimensions = useWindowDimensions();
  const styles = homeStyles(dimensions)
  const [isVisible, setIsvisble] = useState(false)
  const [Item, setItem] = useState({})


 
  
  return (
    <View style={{height: dimensions.height >= 700 ? dimensions.height * 0.70 : dimensions.height * 0.69,}}>
      <View style={styles.container}>
        <View style={styles.eventView}>
          <View>
            {data.length !== 0 ? 
                  <FlatList 
                  data={data?.sort((a, b) => a.img - b.img)} 
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => item.id}
                  style={{width: dimensions.width >= 400 ? 380 : 380 }}
                  renderItem={({item, index}) => (
                    <Pressable onPress={() => {setIsvisble(!isVisible); setItem(item)}}  style={{ borderRadius: 15, opacity: isVisible ? 0.8 : 1, width: dimensions.width >= 400 ? 250 :  220, marginRight: dimensions.height >= 700 ? 10 : 5,overflow:'hidden'}}> 
                      <ImageBackground  source={item.img} style={{width: dimensions.width >= 400 ? 250 : 220, height:dimensions.height >= 700 ? 120 : 85 ,justifyContent: 'space-between', alignItems: 'flex-end',padding: 5, borderRadius: 15, }} width={250} height={120}>
                        <View style={{ width: dimensions.height >= 700 ? 25 : 20,justifyContent:"center",alignItems:"center", borderRadius:12.5, height: dimensions.height >= 700 ? 25 : 20,paddingHorizontal:5, backgroundColor:"rgba(0,0,0,0.5)"}}>  
                          <Ionicons name='ellipsis-horizontal-sharp' color={'white'} size={dimensions.height >= 700 ? 15 : 12}/>
                        </View>
                        <View style={{width: dimensions.width >= 400 ? 150 : 100 , justifyContent:"center",alignItems:"center",borderRadius:10, height: dimensions.height >= 700 ? 33 : 25,paddingHorizontal:5, backgroundColor:"rgba(0,0,0,0.5)"}}>
                          <Text style={{fontSize: dimensions.height >= 700 ? 16 : 13,fontWeight:"600",color:"white"}} adjustsFontSizeToFit={true} numberOfLines={1}>{"No upcoming event"}</Text>
                        </View>
                      </ImageBackground>
                    </Pressable>
                  )}
                  />
              :
                  <Link href={'/(protected)/(screens)/event'} asChild push>
                    <TouchableOpacity onPress={() => console.log("pressed")} style={{borderColor: 'rgb(24, 29, 28)',borderWidth: 1, height:dimensions.height >= 700 ? 120 : 85, width: dimensions.width >= 400 ? 360 : 340, borderRadius: 15 , justifyContent: 'center', alignItems: 'center', padding: 5, marginTop:  dimensions.height >= 700 ? 0 : 10}}>
                        <View>
                          <Text style={{fontSize: dimensions.height >= 700 ? 16 : 14, fontWeight:"600",color:COLORS.SECONDARYTEXT}} adjustsFontSizeToFit={true} numberOfLines={1}>{"Post event"}</Text>
                        </View>
                    </TouchableOpacity>
                  </Link>
            }
          </View>
        </View>
        <View style={styles.performanceView}>
          <View style={{height: dimensions.height >= 700 ? 30 : 20, justifyContent: 'flex-end',}}>
            <Text style={styles.accessText}>General</Text>
          </View>
        </View>
        <View style={styles.quickView}>
          <View style={{height: dimensions.height >= 700 ? 30 : 20, justifyContent: 'center',}}>
            <Text style={styles.accessText}>Quick access</Text>
          </View>
          <View style={styles.qItemView}>
            <Link href={'/(protected)/(screens)/register'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Ionicons name='person-add-outline' size={dimensions.height >= 700 ? 20 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>Register Member</Text>
             </TouchableOpacity>
            </Link>
            <Link href={'/(protected)/(screens)/event'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Ionicons name='calendar-number-outline' size={dimensions.height >= 700 ? 20 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>Create Event</Text>
             </TouchableOpacity>
            </Link>
          </View>
          <View style={styles.qItemView}>
            <Link href={'/(protected)/(screens)/createPost'} asChild push>
              <TouchableOpacity style={styles.quickItem}>
                  <View style={styles.quickIcon}>
                    <Ionicons name='create-outline' size={dimensions.height >= 700 ? 20 : 14} color={'white'} />
                  </View>
                <Text style={styles.quickText}>Create Post</Text>
              </TouchableOpacity>
            </Link>
            <Link href={'/(protected)/(screens)/cell'} asChild push>
              <TouchableOpacity style={styles.quickItem}>
                  <View style={styles.quickIcon}>
                    <Ionicons name='build-outline' size={dimensions.height >= 700 ? 20 : 14} color={'white'} />
                  </View>
                <Text style={styles.quickText}>Cell</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>

      <View style={styles.aiView}>
        <Ionicons name='sparkles-sharp' color={'rgb(0, 177, 86)'}  size={dimensions.height >= 700 ? 24 : 18}/>
      </View>

      {
        isVisible && <ModalView item={Item} onClose={(value: any) => setIsvisble(value)} />
      }
    </View>
  )
}

export default Feeds