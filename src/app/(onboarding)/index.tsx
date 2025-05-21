import React, { useState } from 'react';
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import BackgroundLayout from '@/src/components/backgroundLayout';
import onboardingStyles from '@/src/styles/onboarding/onboarding';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Link } from 'expo-router';

const OnboardingScreen = () => {

  const dimensions = useWindowDimensions()
  const styles = onboardingStyles(dimensions);

  //medium 890.2857142857143 411.42857142857144
  //small 616 360
  const [switchAccount, setSwitchAcount] = useState(false);

  return (
        <BackgroundLayout>
          <View style={styles.bottomView}>
            <View style={styles.isAdminView}>
              <Text style={[styles.appName, {fontSize: dimensions.height >= 700 ? 30 : 25, fontWeight: '600'}]}>{switchAccount ? 'Member Account' : 'Admin Account'}</Text>
              <Text style={styles.text}>Fast • Secured • Efficient</Text>
            </View>

            <View style={styles.switchView}>
              <TouchableOpacity onPress={() => setSwitchAcount(!switchAccount)} style={styles.switchArrowView}>
                <EvilIcons name="chevron-right" size={27} style={{ marginRight: -19}} color="gray" />
                <EvilIcons name="chevron-right" size={29} style={{ marginRight: -19}} color="lightgray" />
                <EvilIcons name="chevron-right" size={30} style={{}} color="white" />
              </TouchableOpacity>
              <View>
                <Text style={[styles.text, {fontSize: 14}]}>{switchAccount ? 'Not a member?  Swipe' :'Not an Admin?  Swipe'}</Text>
              </View>
              <View style={[styles.switchArrowView, {elevation: 0}]}>
                <EvilIcons name="chevron-right" size={30} style={{ marginRight: -19}} color="white" />
                <EvilIcons name="chevron-right" size={30} style={{ marginRight: -19}} color="white" />
                <EvilIcons name="chevron-right" size={30} style={{}} color="white" />
              </View>
            </View>

            <View style={styles.loginView}>
              <View style={{width: '100%', gap: 10}}>
                <Link href={switchAccount ? '/(auth)/member/signup' : '/(auth)/admin/signup'} asChild >
                  <TouchableOpacity style={styles.createView}>
                    <Text style={[styles.text, {fontWeight: '500', color: '#000'}]}>Create an Account</Text>
                  </TouchableOpacity>
                </Link>
                <Link href={switchAccount ? '/(auth)/member/login' : '/(auth)/admin/login'} asChild>
                  <TouchableOpacity style={styles.logInView}>
                    <Text style={[styles.text, {fontWeight: '500'}]}>Log In</Text>
                  </TouchableOpacity>
                </Link>
              </View>

              <View style={styles.termsView}>
                <TouchableOpacity>
                  <Text style={[styles.text, {fontSize: 12, textDecorationLine: 'underline'}]}>Terms of Service</Text>
                </TouchableOpacity>                
                <Text style={[styles.text, {fontSize: 12}]}> | </Text>
                <TouchableOpacity>
                    <Text style={[styles.text, {fontSize: 12, textDecorationLine: 'underline'}]}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>

       </BackgroundLayout>
  
  )
}

export default OnboardingScreen