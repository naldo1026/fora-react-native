// react
import React from "react"

// navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"

// tab components
import HomeScreen from "../screens/HomeScreen"
import OtherScreen from "../screens/OtherScreen"

// icons
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName

            if (route.name === "Home") iconName = "home"
            else if (route.name === "Other") iconName = "person"

            return <Ionicons name={iconName as any} size={size} color={color} />
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveBackgroundColor: "gray",
          headerShown: false,
        })}
      ></Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabs
