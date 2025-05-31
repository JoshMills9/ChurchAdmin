import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'

import BackgroundLayout from '@/src/components/backgroundLayout'
import { COLORS } from '@/src/constants/colors'
import loginStyles from '@/src/styles/auth/login'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'

const AdminLoginScreen = () => {

  const dimensions = useWindowDimensions();
  const styles = loginStyles(dimensions)

  const [phoneNumber, setPhoneNumber] = useState('');

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
              <Link href={'/(auth)/Verification'} asChild>
                <TouchableOpacity style={styles.continueView}>
                      <Text style={styles.continueTxt}>Log In</Text>
                  </TouchableOpacity>
              </Link>
            </View>

            <View style={styles.haveAccntView}>
                <Text style={styles.haveAccTxt}>Create an account? </Text>
                <Link href={'/(auth)/admin/signup'} asChild>
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
      </View>
    </BackgroundLayout>
  )
}

export default AdminLoginScreen