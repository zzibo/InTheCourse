import { View, Text } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Welcome to My App
      </Text>
      <Link href="/(auth)"> Authentication</Link>
      <Link href="/(tabs)"> Home</Link>
    </View>
  );
}
