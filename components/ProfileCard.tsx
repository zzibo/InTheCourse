import React, { useState } from "react"; 
import { Image, View, Text, TouchableOpacity } from "react-native"; 
import DetailItem from "./profile/DetaiItem";
import user from "../h&r-backend/users.json"
 
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
                <DetailItem label="🎓 Major:" value={profile.major} />
                <DetailItem label="📅 Year:" value={profile.year.toString()} />
                <DetailItem label="🏠 Hostel:" value={profile.hostel} />
            </View>
 
            {/* Additional Info (Visible When Expanded) */} 
            {expanded && ( 
              <View className="mt-2">  
                <View className="border-t border-gray-300 mt-4 pt-4"> 

                        <DetailItem label="📝 Bio:" value={profile.bio} />

                </View> 
              </View> 
            )} 
          </View> 
        </View> 
      </View> 
    </TouchableOpacity> 

    <View className="mt-2 justify-end items-center relative"> 
      {/* Button Container */} 
      <View className="flex-row justify-between w-3/5 items-center pb-20"> 
        {/* Cross Button */} 
        <TouchableOpacity 
          onPress={() => console.log("Cross Pressed")} 
          className="w-16 h-16 border-2 border-red-500 rounded-full justify-center items-center" 
        > 
          <Text className="text-red-500 text-2xl">❌</Text> 
        </TouchableOpacity> 
 
        {/* Heart Button */} 
        <TouchableOpacity 
          onPress={() => console.log("Heart Pressed")} 
          className="w-16 h-16 border-2 border-green-400 rounded-full justify-center items-center" 
        > 
          <Text className="text-#6DE585 text-2xl">💚</Text> 
        </TouchableOpacity> 
      </View>
     </View>
    </View>
    
  ); 
}

// Define TypeScript Interface
interface ProfileData {
    major: string;
    year: number;
    hostel: string;
    bio: string;
    courses: string[];
  }