import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";  // Firestore functions
import MatchCard from "@/components/MatchCard";
import { ProfileData } from "@/components/profile/ProfileData";

const Matched = () => {
  const { user } = useAuth();  // Get the current user from context
  const [matches, setMatches] = useState<ProfileData[]>([]);  // State to hold match details
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Fetch the list of matches for the current user
    const fetchMatches = async () => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);  // Reference to the user's document
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            const matchedUserIds = data.matches || [];  // Get matched user IDs

            // Fetch the user details for each matched user
            const matchedUsers = [];
            for (const userId of matchedUserIds) {
              const matchedUserRef = doc(db, "users", userId);
              const matchedUserSnap = await getDoc(matchedUserRef);

              if (matchedUserSnap.exists()) {
                const matchedUserData = matchedUserSnap.data();
                matchedUsers.push({
                  id: userId,
                  displayName: matchedUserData.displayName,
                  displayPicture: matchedUserData.displayPicture,
                  major: matchedUserData.major,
                  year: matchedUserData.year,
                  hostel: matchedUserData.hostel,
                  bio: matchedUserData.bio,
                  courses: matchedUserData.courses,
                  liked: matchedUserData.liked,
                  disliked: matchedUserData.disliked,
                  matched: matchedUserData.matches,
                });
              }
            }

            setMatches(matchedUsers);  // Set the matched users in state
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching matches:", error);
        } finally {
          setLoading(false);  // Stop loading
        }
      }
    };

    fetchMatches();
  }, [user]);  // Fetch matches when the user is available

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (matches.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>No matches found.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Your Matches</Text>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MatchCard match={item} />
        )}
      />
    </View>
  );
};

export default Matched;
