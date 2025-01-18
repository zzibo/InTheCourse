import React, { useState } from "react"; 
import { Image, View, Text, TouchableOpacity } from "react-native"; 
 
export function ProfileCard() { 
  const [expanded, setExpanded] = useState(false); 
 
  return ( 
    <View>
    <TouchableOpacity 
      onPress={() => setExpanded(!expanded)}
      className="w-screen h-[69vh] relative justify-center items-center" 
      activeOpacity={0.9} 
    > 
      {/* Image Section */} 
      <View className="w-[95%]"> 
        <Image 
          source={require("@/assets/images/human.jpeg")} 
          className="w-full h-full rounded-xl" 
        /> 
 
        {/* Gray Overlay Section */} 
        <View 
          className={`bg-black/40 absolute w-full ${ 
            expanded ? "h-[50%]" : "h-40" 
          } bottom-0 transition-all duration-300`} 
        > 
          <View className="mx-4 mt-4"> 
            {/* Name and Age */} 
            <View className="flex-row gap-4"> 
              <Text className="text-white text-3xl">Justin Chan</Text> 
              <Text className="text-white text-3xl">28</Text> 
            </View> 
            <View>
                <Text className="text-white text-lg">🎓 Major: Computer Science</Text> 
                <Text className="text-white text-lg">📍 Location: On Campus</Text> 
                <Text className="text-white text-lg">💬 MBTI: INTJ</Text> 
            </View>
 
            {/* Additional Info (Visible When Expanded) */} 
            {expanded && ( 
              <View className="mt-2">  
                <View className="border-t border-gray-300 mt-4 pt-4"> 
                  <Text className="text-white text-base"> 
                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at justo nec eros feugiat scelerisque. 
                  </Text> 
                </View> 
              </View> 
            )} 
          </View> 
        </View> 
      </View> 
    </TouchableOpacity> 
    
    </View>
    
  ); 
}