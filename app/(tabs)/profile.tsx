import { View, Text } from "react-native";
import React from "react";
import ProfilePhoto from "@/components/profile/ProfilePhoto";
import ProfileDetails from "@/components/profile/ProfileDetails";
import user from "../../h&r-backend/users.json";
const Profile = () => {
  return (
    <View className="p-4">
      <ProfilePhoto></ProfilePhoto>
      <ProfileDetails profile={user}></ProfileDetails>
    </View>
  );
};

export default Profile;
