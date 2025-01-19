import { ProfileCard } from "@/components/ProfileCard";
import { View, Image, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View className="justify-center items-center">
      <Image
        source={require("@/assets/images/front-logo.png")}
        className="w-[160px] h-[64px]"
        resizeMode="contain"
      />
    </View>
  );
}
