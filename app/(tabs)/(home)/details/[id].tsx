import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetailsPage() {
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.containers}>
      <Text>Details {id}</Text>
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