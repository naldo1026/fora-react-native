// react
import React from "react"

// native
import { View, Text, StyleSheet, SafeAreaView } from "react-native"

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Hey Joe</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
})

export default HomeScreen
