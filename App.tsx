// expo
import { StatusBar } from "expo-status-bar"

// react native
import { StyleSheet } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

// bottom navigation
import BottomTabs from "./navigation/BottomTabs"

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomTabs />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
