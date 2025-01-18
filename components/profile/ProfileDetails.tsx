import { View, Text } from "react-native";
import React from "react";
import DetailItem from "./DetaiItem";
import Course from "../Course";

const ProfileDetails = ({ profile }: { profile: ProfileData }) => {
  return (
    <View className="p-4 rounded-lg h-full">
      <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Profile Details
      </Text>

      <DetailItem label="🎓 Major:" value={profile.major} />
      <DetailItem label="📅 Year:" value={profile.year.toString()} />
      <DetailItem label="🏠 Hostel:" value={profile.hostel} />
      <DetailItem label="📝 Bio:" value={profile.bio} />

      {/* Courses Section */}
      <Text className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        📚 Courses Taken:
      </Text>
      {profile.courses.map((course, index) => (
        <Course course={course} key={index}></Course>
      ))}
    </View>
  );
};

// Define TypeScript Interface
interface ProfileData {
  major: string;
  year: number;
  hostel: string;
  bio: string;
  courses: string[];
}

export default ProfileDetails;
