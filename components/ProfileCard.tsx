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
    </View>
  ); 
}
