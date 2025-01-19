import { View, Text, ActivityIndicator, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ProfilePhoto from "@/components/profile/ProfilePhoto";
import ProfileDetails from "@/components/profile/ProfileDetails";
import { db } from "@/firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { ProfileData } from "@/components/profile/ProfileData";
import {
  AuthContext,
  AuthContextProvider,
  useAuth,
} from "@/context/authContext";
import { router } from "expo-router";
import { heightPercentageToDP } from "react-native-responsive-screen";

// Profile Component
const Profile = () => {
  const { user } = useAuth(); // Get the current user from context
  const [profile, setProfile] = useState<ProfileData | null>(null); // State to hold the profile data
  const [loading, setLoading] = useState(true); // Page's loading state

  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      console.log("User logged out successfully");
      router.replace("/(auth)");
    } catch (e) {
      console.error("Failed to log out");
    }
  };

  useEffect(() => {
    if (user) {
      const usersRef = collection(db, "users"); // Reference to 'users' collection
      const userRef = doc(usersRef, user.uid); // Reference to the specific user's document

      // Fetch the user's profile data
      const fetchProfileData = async () => {
        try { 
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfile({
              displayName: data.displayName,
              displayPicture: data.displayPicture,
              major: data.major,
              year: data.year,
              hostel: data.hostel,
              bio: data.bio,
              courses: data.courses || [], // Ensure courses is an array
            });
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        } finally {
          setLoading(false); // Stop loading when done
        }
      };

      fetchProfileData();
    }
  }, [user]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#FF7518" />
      </View>
    );
  }

  if (!profile) {
    return (
      <View className="p-4">
        <Text className="text-xl font-bold">Profile Not Found</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="flex flex-row-reverse">
        <Pressable
          onPress={handleLogout}
          className="p-2 bg-gray-400 rounded-md"
        >
          <Text>Sign out</Text>
        </Pressable>
      </View>

      <ProfilePhoto profile={profile} />
      <ProfileDetails profile={profile} />
      <View style={{ height: heightPercentageToDP(10) }}></View>
    </ScrollView>
  );
};

export default Profile;
