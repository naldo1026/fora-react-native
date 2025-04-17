// react
import React from "react"

// native
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

// icons
import { Ionicons } from "@expo/vector-icons"

type MeetingCardType = {
  title: string
  time: string
}

const MeetingCard = ({ title, time }: MeetingCardType) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons name="qr-code-outline" size={20} color={"white"} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: { color: "#545F71", fontWeight: "700", fontSize: 18 },

  time: { color: "#545F71", fontSize: 15, marginTop: 2 },

  iconWrapper: {
    backgroundColor: "#545F71",
    padding: 10,
    borderRadius: 8,
  },
})

export default MeetingCard
