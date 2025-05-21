import { Stack } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {

  const [hasSeenHomeScreen, setHasSeenHomeScreen] = useState<boolean | null>(null);
  
  useLayoutEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('HasSeen');
        if (value === 'true') {
          setHasSeenHomeScreen(true);
        } else {
          setHasSeenHomeScreen(false);
        }
      } catch (error) {
        console.error('Error checking onboarding status', error);
        setHasSeenHomeScreen(false); // Default to showing onboarding if there's an error
      }
    };

    
    checkLoginStatus()
  }, []);

  if (hasSeenHomeScreen === null) {
    return null;
  }
    


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={"transparent"} barStyle={'light-content'}/>
        <Stack screenOptions={{headerShown: false}} initialRouteName={hasSeenHomeScreen ? "(protected)/(tabs)" : '(onboarding)/index'}>
          <Stack.Screen name="(onboarding)/index" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
