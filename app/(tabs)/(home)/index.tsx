import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomePage() {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
        <Button title="View Details" onPress={() => router.push('/details')} />
    </View>
  );
}
