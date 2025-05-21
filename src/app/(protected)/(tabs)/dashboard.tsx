import Gradientbackground from '@/src/components/Gradientbackground'
import HomeHeader from '@/src/components/homeHeader'
import { dashboardStyles } from '@/src/styles/dashboard/dashboard'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'

const DashboardScreen = () => {

  const dimensions = useWindowDimensions();
  const styles = dashboardStyles(dimensions);


  return (
    <Gradientbackground>
      <View style={{height: false ? dimensions.height >= 700 ? dimensions.height * 0.19 : dimensions.height * 0.15  :  dimensions.height >= 700 ?  dimensions.height * 0.10 : dimensions.height * 0.10,}}>
        <HomeHeader picker={false} isSettings={false} isHome={false} screen={{}} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%',marginBottom: 40,}}>

          <View style={styles.qItemView}>
            <Link href={'/(protected)/(screens)/register'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Feather name='user-plus' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>Register Member</Text>
             </TouchableOpacity>
            </Link>
            <Link href={'/(protected)/(screens)/update'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Ionicons name='pencil-outline' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>Update Member</Text>
             </TouchableOpacity>
            </Link>
          </View>
          
          <View style={styles.qItemView}>
            <Link href={'/(protected)/(screens)/membersList'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Feather name='users' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>Members List</Text>
             </TouchableOpacity>
            </Link>
            <Link href={'/(protected)/(screens)/attendance'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Ionicons name='book-outline' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>Attendance</Text>
             </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.qItemView}>
            <Link href={'/(protected)/(screens)/event'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Ionicons name='calendar-number-outline' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>Create Event</Text>
             </TouchableOpacity>
            </Link>
            <Link href={'/(protected)/(screens)/prepareSMS'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Ionicons name='chatbox-ellipses-outline' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>Prepare SMS</Text>
             </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.qItemView}>
            <Link href={'/(protected)/(screens)/smsReceipt'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Ionicons name='receipt-outline' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>SMS Receipt</Text>
             </TouchableOpacity>
            </Link>
            <Link href={'/(protected)/(screens)/makePledge'} asChild push>
             <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Ionicons name='cash-outline' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                </View>
                <Text style={styles.quickText}>Make Pledge</Text>
             </TouchableOpacity>
             </Link>
          </View>

          <View style={styles.qItemView}>
            <Link href={'/(protected)/(screens)/statistics'} asChild push>
              <TouchableOpacity style={styles.quickItem}>
                  <View style={styles.quickIcon}>
                    <Ionicons name='calculator-outline' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                  </View>
                <Text style={styles.quickText}>Statistics</Text>
              </TouchableOpacity>
            </Link>
            <Link href={'/(protected)/(screens)/cell'} asChild push>
            <TouchableOpacity style={styles.quickItem}>
                <View style={styles.quickIcon}>
                  <Ionicons name='build-outline' size={dimensions.height >= 700 ? 22 : 14} color={'white'} />
                </View>
              <Text style={styles.quickText}>Create Cell</Text>
            </TouchableOpacity>
            </Link>
          </View>

      </ScrollView>
    </Gradientbackground>
  )
}

export default DashboardScreen