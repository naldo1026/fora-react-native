// react
import React, { useEffect, useState } from "react"

// native
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Picker } from "@react-native-picker/picker"

// components
import MeetingCard from "../components/MeetingCard"

// mocked data
import { getMeetings } from "../services/meetings"

// types
import { Meeting } from "../services/meetings"

const HomeScreen = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedBuilding, setSelectedBuilding] = useState("stanley")

  useEffect(() => {
    setLoading(true)
    getMeetings(selectedBuilding).then((data) => {
      setMeetings(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="black" />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.heading}>Hey Joe</Text>
        <Text style={styles.sectionTitle}>Meetings</Text>

        <FlatList
          data={meetings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MeetingCard
              title={`${item.meetingRoom.id} ${item.customers.companyName}`}
              time={`${item.startTime} - ${item.endTime}`}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
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

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default HomeScreen
