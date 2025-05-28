import React, { useState } from 'react'
import { Alert, Text, TextInput, ToastAndroid, TouchableOpacity, useWindowDimensions, View } from 'react-native'



import BackgroundLayout from '@/src/components/backgroundLayout'
import { VerificationCode } from '@/src/components/VerificationCode'
import { COLORS } from '@/src/constants/colors'
import signUpStyles from '@/src/styles/auth/signup'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as Linking from 'expo-linking'
import { Link, router } from 'expo-router'

const AdminSignupScreen = () => {

  const dimensions = useWindowDimensions();
  const styles = signUpStyles(dimensions)

  const [churchName, setChurchName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [closeAlert, setCloseAlert] = useState(false)

  const user = {
    churchName,
    phoneNumber,
  }

  const sendWhatsApp = (phoneNumber: string, message: string) => {
  const url = `whatsapp://send?phone=${phoneNumber.replace('+', '')}&text=${encodeURIComponent(message)}`;
  Linking.openURL(url).catch(() => {
    ToastAndroid.show('WhatsApp not installed', ToastAndroid.SHORT);
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  });
};

const signupWithPhoneNumber = async (value: any) => {
    if(!churchName || !phoneNumber){
      Alert.alert('Error', 'Please fill all fields');
      return
    }else{
          try {
            const {code, number} = await VerificationCode(value);

            // Send the code via WhatsApp
            sendWhatsApp(number, `Your Church Admin verification code is ${code}`);
        
            // Navigate to verification screen with the code
            router.push({
              pathname: '/(auth)/Verification',
              params: { code }, // Make sure `Verification` screen expects this param
            });
          } catch (error) {
            console.error('Error sending verification code:', error);
            Alert.alert('Error', 'Could not send verification code.');
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
                    <TouchableOpacity onPress={() => signupWithPhoneNumber(user)} style={styles.continueView}>
                       <Text style={styles.continueTxt}>Continue</Text>
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
                    <Text style={[styles.text,{fontSize: 15, width: 70, fontWeight: '300', color: 'rgb(37, 60, 54)'}]}>---------------</Text>
                    <Text style={[styles.text,{fontSize: 15, width: 40}]}>Or</Text>
                    <Text style={[styles.text,{fontSize: 15, width: 70, fontWeight: '300', color: 'rgb(37, 60, 54)'}]}>---------------</Text>
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
                        <Text style={[styles.text, {fontSize: 12, textDecorationLine: 'underline', width: 100 }]}>Terms of Service</Text>
                    </TouchableOpacity>                
                        <Text style={[styles.text, {fontSize: 12, width: 6}]}> | </Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, {fontSize: 12, textDecorationLine: 'underline', width: 80 }]}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>

            </View>

           </View>
        </View>
    </BackgroundLayout>
  )
}

export default AdminSignupScreen