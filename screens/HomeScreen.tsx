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
  }, [selectedBuilding])

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedBuilding}
          onValueChange={(value) => setSelectedBuilding(value)}
          style={styles.picker}
        >
          <Picker.Item label="Stanley Building" value="stanley" />
          <Picker.Item label="Chancery House" value="chancery" />
        </Picker>
        <View style={styles.headerRow}>
          <Text style={styles.heading}>Hey Joe</Text>
        </View>

        <Text style={styles.sectionTitle}>Meetings</Text>

        {loading ? (
          <ActivityIndicator
            style={styles.indicator}
            size="large"
            color="black"
          />
        ) : (
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
        )}
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
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  picker: {
    width: "auto",
    height: "23%",
  },

  indicator: {
    marginTop: 160,
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
  },
})

export default HomeScreen
