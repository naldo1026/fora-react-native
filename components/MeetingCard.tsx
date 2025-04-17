// react
import React from "react"

// native
import { View, Text } from "react-native"

type MeetingCardType = {
  title: string
  time: string
}

const MeetingCard = ({ title, time }: MeetingCardType) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{time}</Text>
    </View>
  )
}

export default MeetingCard
