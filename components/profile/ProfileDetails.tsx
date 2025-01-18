import { View, Text } from "react-native";
import React from "react";
import DetailItem from "./DetaiItem";

const ProfileDetails = () => {
  return (
    <View className="p-4">
      <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Profile Details
      </Text>

      <DetailItem label="🎓 Major:" value="CS" />
      <DetailItem label="📅 Year:" value="3" />
      <DetailItem label="🏠 Hostel:" value="CAPT" />
      <DetailItem
        label="📝 Bio:"
        value="Hi, I'm an aspiring software engineer. HMU if you want to do SWE mods together!"
      />

      {/* Courses Section */}
      <Text className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4">
        📚 Courses Taken:
      </Text>
      {["React Native", "Data Structures", "AI"].map((course, index) => (
        <Text key={index} className="text-gray-600 dark:text-gray-400">
          • {course}
        </Text>
      ))}
    </View>
  );
};

export default ProfileDetails;
