import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const StackLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={'rgb(2, 9, 8)'} barStyle={'light-content'}/>
        <Stack 
        screenOptions={{
          headerTitleStyle:{fontSize: 23,color: 'white',}
          ,headerTintColor: 'white', headerStyle: {backgroundColor: 'rgb(2, 9, 8)',},
          contentStyle:{backgroundColor: 'rgb(2, 9, 8)', }}}
        >
            <Stack.Screen name='createPost' options={{headerShown: false}} />
            <Stack.Screen name='attendance' options={{title: 'Attendance', headerRight: () => (<Ionicons name='book-outline' size={25} style={{ height: 50,paddingHorizontal: 5,paddingVertical: 10, width: 40}}  color={'white'}/>)}} />
            <Stack.Screen name='cell'  options={{title: 'Cell', headerRight: () => (<Ionicons name='build-outline' size={25} style={{ height: 50,paddingHorizontal: 5,paddingVertical: 10, width: 40}}  color={'white'}/>)}}/>
            <Stack.Screen name='register'  options={{title: 'Register', headerRight: () => (<Feather name='user-plus' size={25} style={{ height: 50,paddingHorizontal: 5,paddingVertical: 10, width: 40}}  color={'white'}/>)}}   />
            <Stack.Screen name='update'   options={{title: 'Update', headerRight: () => (<Ionicons name='pencil-outline' size={25} style={{ height: 50,paddingHorizontal: 5,paddingVertical: 10, width: 40}}  color={'white'}/>)}} />
            <Stack.Screen name='event'  options={{title: 'Event', headerRight: () => (<Ionicons name='calendar-number-outline' size={25} style={{ height: 50,paddingHorizontal: 5,paddingVertical: 10, width: 40}}  color={'white'}/>)}}/>
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default StackLayout