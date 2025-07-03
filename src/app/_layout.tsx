import { getObject, setObject } from "@/constants/localStorage";
import { Stack } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



export default function RootLayout() {

  const [hasSeenHomeScreen, setHasSeenHomeScreen] = useState<boolean | null>(null);

  const getUser = async(user: any) => {
    const phone = user?.user.phone ? user.user.phone : user.user

    if(!phone){
      return
    }

    const res = await fetch(`https://churchadmin-backend-api.onrender.com/admin/users/${phone}`);
    const U = await res.json();
    if(!res.ok){
      return
    }
    setObject('user', { user: U , status: user.status})
  }



  useLayoutEffect(() => {
        const intervalId = setInterval( async () => {
          const user = await getObject('user');
          setHasSeenHomeScreen(user?.status);

          getUser(user);
        }, 1000);
    
        // ✅ Cleanup function to clear interval
        return () => clearInterval(intervalId);

  },[hasSeenHomeScreen])

  if (hasSeenHomeScreen === null) {
    return null;
  }
    


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={"transparent"} barStyle={'light-content'}/>
        <Stack screenOptions={{headerShown: false}}   initialRouteName={hasSeenHomeScreen ? "(protected)/(tabs)" : '(onboarding)/index'}>
          <Stack.Screen  name="(onboarding)/index" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
