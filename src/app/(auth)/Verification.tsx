import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'

import BackgroundLayout from '@/src/components/backgroundLayout'
import { COLORS } from '@/src/constants/colors'
import verificationStyles from '@/src/styles/auth/verification'
import { router, useLocalSearchParams } from 'expo-router'


const VerificationScreen = () => {
  const {code} = useLocalSearchParams()

  const dimensions = useWindowDimensions();
  const styles = verificationStyles(dimensions);

  const [pin1, setPin1] = useState('');
  const [isFilled, setIsFilled] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');


  const handleVerification = (code: any) => {
    if(code !== pin1){
        setIsFilled('Invalid')
        setPin1('')
        return console.log('Invalid code')
    }else{
        setIsFilled('Valid')
        router.push('/(protected)/(tabs)')
    }
  }
  
  return (
    <BackgroundLayout>
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.appName}>OTP Verification</Text>
                <Text style={styles.text}>Enter the OTP sent to {'0241380745'}</Text>
            </View>

            <View style={styles.bottomView}>
                <View style={styles.pinView}>
                    <TextInput autoFocus={true} secureTextEntry={true} value={pin1} cursorColor={'white'} keyboardType='numeric' onChangeText={(txt) => setPin1(txt)} maxLength={5}  placeholder='-----' placeholderTextColor={COLORS.SECONDARYTEXT}  style={[styles.inputView, {borderColor: (isFilled === 'Valid') ? COLORS.CREATEBUTTON : 'orangered', borderWidth: isFilled ? 1 : 0}]} />
                </View>
                <View>
                   <TouchableOpacity onPress={() => handleVerification(code)} style={styles.verifyView}>
                    <Text style={styles.verifyTxt}>Verify</Text>
                   </TouchableOpacity>
                </View>
                <View style={styles.resendView}>
                    <Text style={[styles.text,{color: COLORS.SECONDARYTEXT}]}>{"Didn't receive code? "}</Text>
                    <TouchableOpacity>
                        <Text style={styles.text}>Resend code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </BackgroundLayout> 
  )
}

export default VerificationScreen