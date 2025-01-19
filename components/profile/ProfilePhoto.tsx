import { View, Text, Image } from "react-native";
import React from "react";
import { ProfileData } from "./ProfileData";

const ProfilePhoto = ({ profile }: { profile: ProfileData }) => {
  return (
    <View className="items-center space-y-2">
      <Image
        source={
          profile.displayPicture
            ? { uri: profile.displayPicture }
            : require("@/assets/images/chillguy.jpg") // Fallback local image
        }
        className="w-56 h-56 rounded-full shadow m-4"
      />

      <Text className="  text-xl font-semibold text-gray-900 dark:text-white">
        {profile.displayName}
      </Text>
    </View>
  );
};

export default ProfilePhoto;
