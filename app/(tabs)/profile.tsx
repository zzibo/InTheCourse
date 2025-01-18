import { View, Text } from "react-native";
import React from "react";
import ProfilePhoto from "@/components/profile/ProfilePhoto";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileDetails from "@/components/profile/ProfileDetails";
const Profile = () => {
  return (
    <View className="p-4">
      <ProfilePhoto></ProfilePhoto>
      <ProfileDetails></ProfileDetails>
    </View>
  );
};

export default Profile;
