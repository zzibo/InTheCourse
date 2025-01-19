import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export const LikeButtons = ({ onLike, onDislike }: { onLike: () => void, onDislike: () => void }) => {
    return (
      <View className="mt-4 justify-end items-center relative">
        {/* Button Container */}
        <View className="flex-row justify-between w-3/5 items-center pb-20">
          {/* Cross Button */}
          <TouchableOpacity
            onPress={onDislike}
            className="w-20 h-20 border-2 border-red-500 rounded-full justify-center items-center"
          >
            <Text className="text-red-500 text-3xl">❌</Text>
          </TouchableOpacity>
  
          {/* Heart Button */}
          <TouchableOpacity
            onPress={onLike}
            className="w-20 h-20 border-2 border-green-400 rounded-full justify-center items-center"
          >
            <Text className="text-3xl">💚</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

export default LikeButtons