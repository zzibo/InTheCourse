import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const MatchCard = (
  { match }: 
  { match: { 
    id: string;
    displayName: string;
    displayPicture: string;
    year: number;
    major: string;
  } }) => 
    {
  return (
    <View className="flex-row items-center mb-4 p-4 border rounded-lg shadow-lg">
      <Image
        source={{ uri: match.displayPicture }}
        className="w-16 h-16 rounded-full mr-4"
        resizeMode="cover"
      />
      <View>
        <Text className="text-xl font-bold">{match.displayName}</Text>
        <TouchableOpacity onPress={() => console.log(`Chat with ${match.displayName}`)}>
          <Text className="text-[#FF7518] mt-2">Year {match.year}</Text>
          <Text className="text-[#FF7518] mt-2">{match.major}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MatchCard;
