import { View, Text, Image } from "react-native";
import React from "react";

const ProfilePhoto = () => {
  return (
    <View className="items-center space-y-2">
      <Image
        source={require("@/assets/images/chillguy.jpg")}
        className={"w-40 h-40 rounded-full border-2 border-gray-300"}
      />
      <Text className=" p-4 text-xl font-semibold text-gray-900 dark:text-white">
        Chill Guy
      </Text>
    </View>
  );
};

export default ProfilePhoto;
