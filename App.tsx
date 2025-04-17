// expo
import { StatusBar } from "expo-status-bar"

// react native
import { StyleSheet, Text, View } from "react-native"

// bottom navigation
import BottomTabs from "./navigation/BottomTabs"

export default function App() {
  return (
    <View style={styles.container}>
      <BottomTabs />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
