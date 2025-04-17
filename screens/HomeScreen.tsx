// react
import React from "react"

// native
import { View, Text, StyleSheet, SafeAreaView } from "react-native"
import { FlatList } from "react-native-gesture-handler"

// components
import MeetingCard from "../components/MeetingCard"

const mockMeetings = [
  {
    id: 1,
    meetingRoom: {
      buildingId: "stanley",
      id: "MR.0X",
      name: "MR.0X",
    },
    customers: {
      id: 1,
      companyName: "Acme Corp",
      customerName: "Jimmy",
    },
    startTime: "2025-04-17T08:30:00Z",
    endTime: "2025-04-17T10:30:00Z",
    qrCodeUrl: "https://my-app.com/availability-force/v1/meetings/1/qrcode",
    bookedAt: "2025-04-16T12:00:00Z",
  },
  {
    id: 2,
    meetingRoom: {
      buildingId: "stanley",
      id: "MR.0Y",
      name: "MR.0Y",
    },
    customers: {
      id: 2,
      companyName: "Beta Corp",
      customerName: "Lara",
    },
    startTime: "2025-04-17T11:00:00Z",
    endTime: "2025-04-17T12:30:00Z",
    qrCodeUrl: "https://my-app.com/availability-force/v1/meetings/2/qrcode",
    bookedAt: "2025-04-16T14:20:00Z",
  },
]

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.heading}>Hey Joe</Text>
        <Text style={styles.sectionTitle}>Meetings</Text>

        <FlatList
          data={mockMeetings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MeetingCard
              title={`${item.meetingRoom.id} ${item.customers.companyName}`}
              time={`08:00 - 10:30`}
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
})

export default HomeScreen
