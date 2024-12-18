import { StyleSheet, Text, View } from "react-native";

export default function DetailsPage() {
  return (
    <View style={styles.containers}>
      <Text>Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})