import { View, Text, Image, ActivityIndicator } from 'react-native';
import { ProfileCard } from '@/components/ProfileCard';
import { useAuth } from '@/context/authContext';
import { ProfileData } from '@/components/profile/ProfileData';
import { useEffect, useState } from 'react';
import { db } from '@/firebaseConfig';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
        
export default function HomeScreen() {
  const { user } = useAuth(); // Get the current user from context
  const [profile, setProfile] = useState<ProfileData>({
    displayName: "null",
    displayPicture: "null",
    major: "null",
    year: 0,
    hostel: "null",
    bio: "null",
    courses: [],
  });
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<ProfileData[]>([]); // Array to hold users other than the current user

  useEffect(() => {
    // Fetch the current user's profile data
    if (user) {
      const usersRef = collection(db, "users");
      const userRef = doc(usersRef, user.uid); // Reference to the specific user's document

      // Fetch the current user's data
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
              courses: data.courses,
            });
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProfileData();
    }
  }, [user]);

  useEffect(() => {
    // Fetch all users excluding the current user
    const fetchUsersExcludingCurrent = async () => {
      if (user) {
        try {
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("userId", "!=", user.uid)); // Query to exclude the current user
          const querySnapshot = await getDocs(q);

          const users: ProfileData[] = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            users.push({
              displayName: data.displayName,
              displayPicture: data.displayPicture,
              major: data.major,
              year: data.year,
              hostel: data.hostel,
              bio: data.bio,
              courses: data.courses,
            });
          });

          setStack(users); // Set the fetched users to the state
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }
    };

    fetchUsersExcludingCurrent();
  }, [user]); // This effect will run when the user changes

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
            key={index}
            profile={user}
          />
        ))
      ) : (
        <Text>No other users found.</Text>
      )}
    </View>
  );
}
