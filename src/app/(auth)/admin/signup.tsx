import React, { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'



import BackgroundLayout from '@/src/components/backgroundLayout'
import { COLORS } from '@/src/constants/colors'
import signUpStyles from '@/src/styles/auth/signup'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link, router } from 'expo-router'

const AdminSignupScreen = () => {

  const dimensions = useWindowDimensions();
  const styles = signUpStyles(dimensions)

  const [churchName, setChurchName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isContinue, setIsContinue] = useState(false)

  const user = {
    churchName,
    phoneNumber,
    isSignup: true
  }

 

const signupWithPhoneNumber = async () => {
    setIsContinue(true)

    if(!churchName || !phoneNumber){
      Alert.alert('Signup Failed', 'Please fill all fields');
      setIsContinue(false)
      return
    }else{
          try{
            const res = await fetch('https://churchadmin-backend-api.onrender.com/admin/otp', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(user)
            })
            const data = await res.json()
            console.log(data)

            if(!res.ok){
              throw new Error(data?.message)
            }

            router.push({
                pathname: '/(auth)/Verification',
                params: data , 
              });
            
          
          } catch(error: any) {
            console.error('Error sending verification code:', error.message);
            Alert.alert('Signup Failed', error?.message.toString())
            setIsContinue(false)
          }
        }
  };
  



  return (
    <BackgroundLayout>
        <View style={styles.container}>

           <View style={styles.topView}>
            <Text style={styles.appName}>Create an Account</Text>
            <Text style={styles.text}>To create an admin account provide details and verify phone number</Text>
           </View>

           <View style={styles.bottomView}>

            <View style={styles.inputFieldView}>
                <View style={styles.mainInputView}>
                    <TextInput value={churchName} onChangeText={(txt) => setChurchName(txt)} placeholder='Church name' placeholderTextColor={COLORS.SECONDARYTEXT} style={[styles.churchInput ,{fontWeight: churchName ? '500' : '300'}]}  />
                    <TextInput value={phoneNumber} onChangeText={(txt) => setPhoneNumber(txt)} placeholder='Phone number' keyboardType='numeric' placeholderTextColor={COLORS.SECONDARYTEXT} style={[styles.churchInput ,{fontWeight: phoneNumber ? '500' : '300'}]}  />
                </View>

                <View>
                    <TouchableOpacity disabled={isContinue} onPress={signupWithPhoneNumber} style={styles.continueView}>
                       {isContinue ? 
                          <Feather name='loader' size={28} />
                       :
                          <Text style={styles.continueTxt}>Continue</Text>
                       }
                    </TouchableOpacity>
                </View>

                <View style={styles.haveAccntView}>
                    <Text style={styles.haveAccTxt}>Have an account? </Text>
                    <Link href={'/(auth)/admin/login'} asChild>
                        <TouchableOpacity><Text style={styles.LoginTxt}>Log In</Text></TouchableOpacity>
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
                        <Text style={[styles.text, {fontSize: 12, textDecorationLine: 'underline', width: '100%', }]}>Terms of Service</Text>
                    </TouchableOpacity>                
                        <Text style={[styles.text, {fontSize: 12, width: '5%', }]}> | </Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, {fontSize: 12, textDecorationLine: 'underline', width: '100%' }]}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>

            </View>

           </View>
        </View>
    </BackgroundLayout>
  )
}

export default AdminSignupScreen