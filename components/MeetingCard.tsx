// react
import React from "react"

// native
import { View, Text, StyleSheet } from "react-native"

type MeetingCardType = {
  title: string
  time: string
}

const MeetingCard = ({ title, time }: MeetingCardType) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 5,
  },

  title: { color: "#545F71", fontWeight: "700", fontSize: 18 },

  time: { color: "#545F71", fontSize: 15, marginTop: 2 },
})

export default MeetingCard
