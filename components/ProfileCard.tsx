import React, { useState, useRef } from "react"; 
import { Image, View, Text, TouchableOpacity, Animated, Dimensions } from "react-native"; 
import { ProfileData } from "./profile/ProfileData";

const { width } = Dimensions.get("window");

export function ProfileCard({ profile, onSwipeLeft, onSwipeRight }: { 
  profile: ProfileData;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;

  const handleDislike = () => {
    Animated.timing(translateX, {
      toValue: -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onSwipeLeft();
      translateX.setValue(0);
    });
  };

  const handleLike = () => {
    Animated.timing(translateX, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onSwipeRight();
      translateX.setValue(0);
    });
  };

  return (
    <View className="absolute w-full h-[75vh] flex items-center justify-center">
      <Animated.View 
        className="w-[95%] h-[80%] relative justify-center items-center" 
        style={{ transform: [{ translateX }] }}
      >
        <TouchableOpacity 
          onPress={() => setExpanded(!expanded)}
          className="w-full h-full relative justify-center items-center" 
          activeOpacity={0.9} 
        > 
          <View className="w-full h-full"> 
            <Image 
              source={profile.displayPicture ? { uri: profile.displayPicture } : require("@/assets/images/chillguy.jpg")}
              className="w-full h-full rounded-xl" 
            />

            {/* Overlay Section */}
            <View className={`bg-black/40 absolute w-full ${expanded ? "h-[50%]" : "h-40"} bottom-0 transition-all duration-300`} > 
              <View className="mx-4 mt-4"> 
                <View className="flex-row gap-4"> 
                  <Text className="text-white text-3xl">{profile.displayName}</Text>
                </View> 
                <View>
                  <Text className="text-lg font-semibold text-white">🎓 Major: {profile.major}</Text>
                  <Text className="text-lg font-semibold text-white">📅 Year: {profile.year}</Text>
                  <Text className="text-lg font-semibold text-white">🏠 Hostel: {profile.hostel}</Text>
                </View>

                {expanded && ( 
                  <View className=" border-t border-gray-300 mt-4 pt-4"> 
                    <Text className="text-lg font-semibold text-white">📝 Bio:</Text>
                    <Text className="text-lg text-white">{profile.bio}</Text>
                  </View> 
                )} 
              </View> 
            </View> 
          </View> 
        </TouchableOpacity> 
      </Animated.View>

      {/* Buttons - Positioned BELOW the card */}
      <View className="mt-4 justify-end items-center w-full"> 
        <View className="flex-row justify-between w-3/5 items-center absolute top-2"> 
          <TouchableOpacity 
            onPress={handleDislike} 
            className="w-20 h-20 border-2 border-red-500 rounded-full justify-center items-center" 
          > 
            <Text className="text-red-500 text-3xl">❌</Text> 
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleLike} 
            className="w-20 h-20 border-2 border-green-400 rounded-full justify-center items-center" 
          > 
            <Text className="text-green-400 text-3xl">💚</Text> 
          </TouchableOpacity> 
        </View>
      </View>
    </View>
  ); 
}
