import React, { useState } from "react"; 
import { Image, View, Text, TouchableOpacity } from "react-native"; 
import DetailItem from "./profile/DetaiItem";
import { ProfileData } from "./profile/ProfileData";
 
export function ProfileCard({ profile }: { profile: ProfileData }) {
  const [expanded, setExpanded] = useState(false); 
 
  return ( 
    <View>
    <TouchableOpacity 
      onPress={() => setExpanded(!expanded)}
      className="w-screen h-[60vh] relative justify-center items-center" 
      activeOpacity={0.9} 
    > 
      {/* Image Section */} 
      <View className="w-[95%]"> 
        <Image 
          source={
            profile.displayPicture ? 
            { uri: profile.displayPicture } : 
            require("@/assets/images/chillguy.jpg")
          } 
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
              <Text className="text-white text-3xl">{profile.displayName}</Text>
            </View> 
            <View>
                <Text className="text-lg font-semibold text-white">🎓 Major: {profile.major}</Text>
                <Text className="text-lg font-semibold text-white">📅 Year: {profile.year}</Text>
                <Text className="text-lg font-semibold text-white">🏠 Hostel: {profile.hostel}</Text>
            </View>
 
            {/* Additional Info (Visible When Expanded) */} 
            {expanded && ( 
              <View className="mt-2">  
                <View className="border-t border-gray-300 mt-4 pt-4"> 
                    <Text className="text-lg font-semibold text-white">📝 Bio:</Text>
                    <Text className="text-lg text-white">{profile.bio}</Text>
                </View> 
              </View> 
            )} 
          </View> 
        </View> 
      </View> 
    </TouchableOpacity> 

    <View className="mt-4 justify-end items-center relative"> 
      {/* Button Container */} 
      <View className="flex-row justify-between w-3/5 items-center pb-20"> 
        {/* Cross Button */} 
        <TouchableOpacity 
          onPress={() => console.log("Cross Pressed")} 
          className="w-20 h-20 border-2 border-red-500 rounded-full justify-center items-center" 
        > 
          <Text className="text-red-500 text-3xl">❌</Text> 
        </TouchableOpacity> 
 
        {/* Heart Button */} 
        <TouchableOpacity 
          onPress={() => console.log("Heart Pressed")} 
          className="w-20 h-20 border-2 border-green-400 rounded-full justify-center items-center" 
        > 
          <Text className="text-3xl">💚</Text> 
        </TouchableOpacity> 
      </View>
     </View>
    </View>
  ); 
}
