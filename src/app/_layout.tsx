import { getObject, setObject } from "@/constants/localStorage";
import { Stack } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



export default function RootLayout() {

  const [hasSeenHomeScreen, setHasSeenHomeScreen] = useState<boolean | null>(null);

  const getUser = async(user: any) => {
    const res = await fetch(`https://churchadmin-backend-api.onrender.com/admin/users/${user?.user?.phone}`);
    const U = await res.json();

    setObject('user', { user: U , status: user?.status})
  }



  useLayoutEffect(() => {
    const user = getObject('user');
    setHasSeenHomeScreen(user?.status);

    if(user){
      getUser(user)
    }

  },[])

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
