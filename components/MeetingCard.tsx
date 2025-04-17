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
  card: {},

  title: {},

  time: {},
})

export default MeetingCard
