import { View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { db } from "@/firebaseConfig";
import { collection, doc, getDoc, updateDoc, arrayUnion, getDocs, query, where } from "firebase/firestore";  // Firebase functions
import { ProfileCard} from "@/components/ProfileCard";  // Assuming you have a ProfileCard component
import { ProfileData } from "@/components/profile/ProfileData";
import LikeButtons from "@/components/LikeButtons";

export default function HomeScreen() {
  const { user } = useAuth();  // Get the current user from context
  const [stack, setStack] = useState<ProfileData[]>([]);  // Stack of users to display
  const [currentIndex, setCurrentIndex] = useState(0);  // Track current profile in stack
  const [prevIndex, setPreviousIndex] = useState(-1);
  const [likedProfiles, setLikedProfiles] = useState<string[]>([]);  // Profiles that the user has liked
  const [dislikedProfiles, setDislikedProfiles] = useState<string[]>([]);  // Profiles that the user has disliked
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Fetch users excluding the current user
    const fetchUsers = async () => {
      if (user) {
        try {
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("userId", "!=", user.uid));  // Query to exclude the current user
          const querySnapshot = await getDocs(q);

          const users: ProfileData[] = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            users.push({
              id: doc.id,
              displayName: data.displayName,
              displayPicture: data.displayPicture,
              major: data.major,
              year: data.year,
              hostel: data.hostel,
              bio: data.bio,
              courses: data.courses,
              liked: data.liked,
              disliked: data.disliked,
              matched: data.matched,
            });
          });

          setStack(users);  // Set the stack of users
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          setLoading(false);  // Stop loading
        }
      }
    };

    fetchUsers();
  }, [user]);  // Runs when the user changes

  useEffect(() => {
    if (user) {
      const userRef = doc(db, "users", user.uid);  // Get the current user's document reference
      const fetchUserPreferences = async () => {
        try {
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setLikedProfiles(data.liked || []);
            setDislikedProfiles(data.disliked || []);
          }
        } catch (error) {
          console.error("Error fetching user preferences:", error);
        }
      };

      fetchUserPreferences();
    }
  }, [user]);  // Fetch liked/disliked profiles when the user changes

  const handleLike = async () => {
    if (user && stack[currentIndex]) {
      const currentProfile = stack[currentIndex];
      // Make sure currentProfile.id is defined
      if (currentProfile.id) {
        try {
          const userRef = doc(db, "users", user.uid);  // Get the current user's document reference
          await updateDoc(userRef, {
            liked: arrayUnion(currentProfile.id),  // Add the profile's ID to the liked array
          });
  
          // Update the liked profiles state
          setLikedProfiles((prevLikedProfiles) => [...prevLikedProfiles, currentProfile.id]);
        } catch (error) {
          console.error("Error updating liked field:", error);
        }
      } else {
        console.error("Profile ID is undefined:", currentProfile);
      }
    }
    // Move to the next profile after action
    nextProfile();
  };
  
  const handleDislike = async () => {
    if (user && stack[currentIndex]) {
      const currentProfile = stack[currentIndex];
      // Make sure currentProfile.id is defined
      if (currentProfile.id) {
        try {
          const userRef = doc(db, "users", user.uid);  // Get current user's document reference
          await updateDoc(userRef, {
            disliked: arrayUnion(currentProfile.id),  // Add the profile's ID to the disliked array
          });
  
          // Update the disliked profiles state
          setDislikedProfiles((prevDislikedProfiles) => [...prevDislikedProfiles, currentProfile.id]);
        } catch (error) {
          console.error("Error updating disliked field:", error);
        }
      } else {
        console.error("Profile ID is undefined:", currentProfile);
      }
    }
    // Move to the next profile after action
    nextProfile();
  };
  
  const nextProfile = () => {
    // Increment the current index to show the next profile
    setPreviousIndex(currentIndex)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;

      // Stop if we've exhausted all profiles
      if (nextIndex >= stack.length) {
        return prevIndex;
      }

      return nextIndex;
    });
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <View className='justify-center items-center'>
      <Image 
        source={require("@/assets/images/front-logo.png")} 
        className="w-[160px] h-[64px]"
        resizeMode='contain' 
      />
    </View>
      {stack.length > 0 ? (
        stack.map((user, index) => (
          <ProfileCard
          profile={stack[0]} // Show the top profile
          onSwipeLeft={() => setStack((prev) => prev.slice(1))} // Remove on left swipe
          onSwipeRight={() => setStack((prev) => prev.slice(1))} // Remove on right swipe
        />
        ))
      ) : (
        <Text>No other users found.</Text>
      )}
  const prevProfile = stack[prevIndex]
  const currentProfile = stack[currentIndex];

  if (prevProfile === currentProfile) {
    return (
      <View className="flex-1 justify-center items-center">
        <View className="justify-center items-center">
          <Image
            source={require("@/assets/images/front-logo.png")}
            className="w-[160px] h-[64px]"
            resizeMode="contain"
          />
        </View>
        <Text className="font-bold text-2xl text-[#FF7518]">No other users found.</Text>
        <Text className="font-bold text-2xl text-[#FF7518]">Come back later!</Text>
      </View>
    )
  }

  // Skip profiles that are already liked or disliked
  if (likedProfiles.includes(currentProfile.id) || dislikedProfiles.includes(currentProfile.id)) {
    nextProfile();
  }

  return (
    <View className="flex-1">
      {/* Logo */}
      <View className="justify-center items-center">
        <Image
          source={require("@/assets/images/front-logo.png")}
          className="w-[160px] h-[64px]"
          resizeMode="contain"
        />
      </View>

      {/* Display current profile */}
      <ProfileCard profile={currentProfile} />

      {/* Like Buttons */}
      <LikeButtons onLike={handleLike} onDislike={handleDislike} />
    </View>
  );
}