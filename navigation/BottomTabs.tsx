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
          tabBarActiveTintColor: "black",
          headerShown: false,

          tabBarStyle: {
            paddingTop: 5,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 70,
            backgroundColor: "white",
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowOffset: { width: 0, height: -3 },
            shadowRadius: 10,
          },

          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 8,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Other" component={OtherScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabs
