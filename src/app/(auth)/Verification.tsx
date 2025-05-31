import React, { useEffect, useState } from 'react'
import { Alert, Linking, Text, TextInput, ToastAndroid, TouchableOpacity, useWindowDimensions, View } from 'react-native'

import BackgroundLayout from '@/src/components/backgroundLayout'
import { COLORS } from '@/src/constants/colors'
import verificationStyles from '@/src/styles/auth/verification'
import Feather from '@expo/vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router, useLocalSearchParams } from 'expo-router'


const VerificationScreen = () => {
  const {code, phone, churchName} = useLocalSearchParams()

  const dimensions = useWindowDimensions();
  const styles = verificationStyles(dimensions);
 
  const [pin1, setPin1] = useState('');
  const [isFilled, setIsFilled] = useState('');
  const [isVerify, setIsVerify] = useState(false);
  const [count, setCount] = useState<number>(300);


  const sendWhatsApp = (phoneNumber: string, message: string) => {
    const url = `whatsapp://send?phone=${phoneNumber.replace('+', '')}&text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() => {
      ToastAndroid.show('WhatsApp not installed', ToastAndroid.SHORT);
      const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
      Linking.openURL(url);
    });
  };

  useEffect(() => {
    Alert.alert("OTP sent", "An OTP has been sent to your phone number")
    // Send the code via WhatsApp
    sendWhatsApp(phone, `Your Church Admin verification code is ${code}`);
  }, [phone, code])


  useEffect(() => {
    if (count <= 0) return;

    const timer = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

   // Format seconds into MM:SS
   const minutes = Math.floor(count / 60);
   const seconds = count % 60;
   const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
     .toString()
     .padStart(2, "0")}`;
 



  const registerUser = async() => {
    try {
        const response = await fetch('https://churchadmin-backend-api.onrender.com/admin/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({phone, churchName}),
        });
    
        const data = await response.json();

        if (!data) {
            console.error('Server error:', data);
            return null;
          }else{
            router.navigate('/(protected)/(tabs)');
            setIsVerify(false)
          }
    }catch(err){
        console.log(err)
        setIsVerify(false)
    }

  }
 
const saveUserDetails = async() => {
    try{
        const user = await AsyncStorage.setItem('user', JSON.stringify({churchName}))
    }catch(err){
        console.log(err)
    }
}


  const handleVerification = (code: any) => {
    setIsVerify(true)
    if(code !== pin1){
        setIsFilled('Invalid')
        setPin1('')
        setIsVerify(false)
        return console.log('Invalid code')
    }else{
        setIsFilled('Valid');
        saveUserDetails()
        registerUser()
    }
  }






  
  return (
    <BackgroundLayout>
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.appName}>OTP Verification</Text>
                <Text style={styles.text}>Enter the OTP sent to {phone}</Text>
            </View>

            <View style={styles.bottomView}>
                <View style={styles.pinView}>
                    <TextInput autoFocus={true} caretHidden={true} secureTextEntry={true} value={pin1}  keyboardType='numeric' onChangeText={(txt) => setPin1(txt)} maxLength={5}  placeholder='-----' placeholderTextColor={COLORS.SECONDARYTEXT}  style={[styles.inputView, {borderColor: (isFilled === 'Valid') ? COLORS.CREATEBUTTON : 'orangered', borderWidth: isFilled ? 1 : 0}]} />
                    <View style={styles.resendView}>
                        <Text style={[styles.text,{color: COLORS.SECONDARYTEXT, marginRight: 5}]}>Resend code in </Text>
                        <Text style={styles.text}>{formattedTime}</Text>
                    </View>
                </View>
                <View>
                   <TouchableOpacity onPress={() => handleVerification(code)} style={styles.verifyView}>
                    {isVerify ? 
                        <Feather name='loader' size={28} />
                    : 
                        <Text style={styles.verifyTxt}>Verify</Text>
                    }
                   </TouchableOpacity>
                </View>
                <View style={styles.resendView}>
                    <Text style={[styles.text,{color: COLORS.SECONDARYTEXT}]}>{"Didn't receive code? "}</Text>
                    <TouchableOpacity disabled={count === 0 ? false : true}>
                        <Text style={styles.text}>Resend code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </BackgroundLayout> 
  )
}

export default VerificationScreen