import React, { useState } from 'react'
import { ActivityIndicator, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'

import SuccessAlert from '@/components/successAlert'
import { getSuccessState } from '@/constants/getSuccessState'
import BackgroundLayout from '@/src/components/backgroundLayout'
import { COLORS } from '@/src/constants/colors'
import loginStyles from '@/src/styles/auth/login'
import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Link, router } from 'expo-router'

const AdminLoginScreen = () => {

  const dimensions = useWindowDimensions();
  const styles = loginStyles(dimensions)

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isContinue, setIsContinue] = useState(false)
  const [churchName, setChurchName] = useState('')
  const [alert, setAlert] = useState<any>()
 
  
    const getUser = async() => {
        try{
            const user = await AsyncStorage.getItem('user');
            if(user){
                const u = JSON.parse(user);
                setChurchName(u.churchName)
            }
        }catch(err){
            console.error('Error checking post', err);
        }
    }
    getUser()


  const getLoggedInState = async () => {
    try{
      const save = await AsyncStorage.setItem('login', JSON.stringify(true))
    }catch(err){
      console.log(err)
    }
  }

 

  const handleLogin = async() => {

    if(!phoneNumber){
      setAlert(getSuccessState('Please enter phone number.', false))
      setIsContinue(false)
      return
    }else{
          try{
            const res = await fetch('https://churchadmin-backend-api.onrender.com/admin/otp', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify({phoneNumber, churchName, isSignup: false})
            })
            const data = await res.json()
            const phone = data?.phone
        

            let result;
            if(data){
                const res = await fetch('https://churchadmin-backend-api.onrender.com/admin/users/login', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify({phoneNumber: phone})
                  })
                result = await res.json()
            }

            if(!res.ok || !result.phone){
              throw new Error(result.message)
            }

            if(result?.phone){
                getLoggedInState();
                router.push({
                    pathname: '/(auth)/Verification',
                    params: data , 
                  });    
            }
          
          } catch(error: any) {
            setIsContinue(false)
            setAlert(getSuccessState(error?.message.toString(), false))
          }
        }
  }






  return (
    <BackgroundLayout>
      <View style={styles.container}>
        
        <View style={styles.topView}>
          <Text style={styles.appName}>Hi There!</Text>
          <Text style={styles.text}>Please enter required details.</Text>
        </View>

        <View style={styles.bottomView}>

        <View style={styles.inputFieldView}>
            <View style={styles.mainInputView}>
                <TextInput value={phoneNumber} onChangeText={(txt) => setPhoneNumber(txt)} placeholder='Phone number' keyboardType='numeric' placeholderTextColor={COLORS.SECONDARYTEXT} style={[styles.churchInput, {fontWeight: phoneNumber ? '500' : '300'}]}  />
            </View>

            <View>
                <TouchableOpacity onPress={() => {handleLogin(); setIsContinue(true)}} style={styles.continueView}>
                      {isContinue ? 
                       <ActivityIndicator size={25} color={'black'}  />
                      :
                      <Text style={styles.continueTxt}>Log In</Text>
                      }
                  </TouchableOpacity>
            </View>

            <View style={styles.haveAccntView}>
                <Text style={styles.haveAccTxt}>Create an account? </Text>
                <Link href={'/(auth)/admin/signup'} asChild push>
                    <TouchableOpacity><Text style={styles.LoginTxt}>Sign Up</Text></TouchableOpacity>
                </Link>
            </View>
        </View>

        <View style={styles.mainAuthView}>

            <View style={{flexDirection: 'row', width: '100%',  alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.text,{fontSize: 15, width: '45%', fontWeight: '300', color: 'rgba(37, 60, 54, 0.7)'}]}>-----------</Text>
                <Text style={[styles.text,{fontSize: 15, width: '5%'}]}>Or</Text>
                <Text style={[styles.text,{fontSize: 15, width: '45%', fontWeight: '300', color: 'rgba(37, 60, 54, 0.7)'}]}>-----------</Text>
            </View>

            <View style={styles.authView}>
                <TouchableOpacity style={styles.googleView}>
                    <Ionicons name="logo-google" size={25} style={{}} color="white" />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.googleView}>
                    <Ionicons name="logo-apple" size={25} style={{}} color="white" />
                    <Text style={styles.googleText}>Apple</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.termsView}>
                <TouchableOpacity>
                    <Text style={[styles.text, {fontSize: 12, textDecorationLine: 'underline', width: '100%' }]}>Terms of Service</Text>
                </TouchableOpacity>                
                    <Text style={[styles.text, {fontSize: 12, width: '5%'}]}> | </Text>
                <TouchableOpacity>
                    <Text style={[styles.text, {fontSize: 12, textDecorationLine: 'underline', width: '100%' }]}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>

        </View>

        </View>

        {alert && <SuccessAlert message={alert?.message} success={alert.success} showAlert={(v: any) => setAlert(v) } /> }

      </View>
    </BackgroundLayout>
  )
}

export default AdminLoginScreen