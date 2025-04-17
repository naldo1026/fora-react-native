// react
import React from "react"

// native
import { View, Text, StyleSheet } from "react-native"

const OtherScreen = () => {
  return (
    <View>
      <Text>This is the Other Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default OtherScreen
