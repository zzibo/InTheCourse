import { View, Text, Image } from "react-native";
import React from "react";

const ProfilePhoto = () => {
  return (
    <View className="items-center space-y-2">
      <Image
        source={require("@/assets/images/chillguy.jpg")}
        className={"w-56 h-56 rounded-full shadow m-4"}
      />
      <Text className="  text-xl font-semibold text-gray-900 dark:text-white">
        Chill Guy
      </Text>
    </View>
  );
};

export default ProfilePhoto;
