// react
import React from "react"

// native
import { View, Text, StyleSheet, SafeAreaView } from "react-native"

// components
import MeetingCard from "../components/MeetingCard"

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.heading}>Hey Joe</Text>
        <Text style={styles.sectionTitle}>Meetings</Text>

        <MeetingCard title={"MR.0X - ACME CORP"} time={"08:30 - 10:00"} />
        <MeetingCard title={"MR.0X - ACME CORP"} time={"08:30 - 10:00"} />
        <MeetingCard title={"MR.0X - ACME CORP"} time={"08:30 - 10:00"} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    flex: 1,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 20,
  },
})

export default HomeScreen
