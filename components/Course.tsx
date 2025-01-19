import { View, Text } from "react-native";
import React from "react";

const Course = ({ course }: { course: string }) => {
  return (
    <View
      className=" rounded-md p-3 m-1 w-3/5"
      style={{ backgroundColor: "#FF7518" }}
    >
      <Text>{course}</Text>
    </View>
  );
};

export default Course;
