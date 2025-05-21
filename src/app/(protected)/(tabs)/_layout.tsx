import { COLORS } from "@/src/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { useWindowDimensions } from "react-native";

const TabsLayout = () => {

  const dimensions = useWindowDimensions();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          height: dimensions.height >= 700 ?  60 : 55,
          borderTopWidth: 0,
          position: "absolute",
        },
        tabBarActiveTintColor: COLORS.CREATEBUTTON,
        tabBarInactiveTintColor: COLORS.SECONDARYTEXT,
        tabBarLabelStyle: { fontSize: dimensions.height >= 700 ? 11: 10 },
        tabBarHideOnKeyboard: true
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} size={focused ? dimensions.height >= 700 ? size : 19 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name={focused ? "grid-sharp" : "grid-outline"} size={focused ? dimensions.height >= 700 ? size : 19 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarLabel: "Analytics",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name={focused ? 'analytics-sharp' : "analytics-outline"} size={focused ? dimensions.height >= 700 ? size : 19 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name={focused ? "settings-sharp" : "settings-outline"} size={focused ? dimensions.height >= 700 ? size : 19 : 20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
