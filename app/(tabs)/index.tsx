import { Image, View, Text, Pressable } from 'react-native';
import { AuthContext, AuthContextProvider, useAuth } from '@/context/authContext';
import { router } from 'expo-router';
import {ProfileCard} from  '@/components/ProfileCard';
import user from "../../h&r-backend/users.json";


export default function HomeScreen() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      console.log("User logged out successfully")
      router.replace("/(auth)/logIn")
    } catch (e) {
      console.error("Failed to log out")
    }
  }

  return (
    <View className='justify-center items-center'>
      <Image 
      source={require("@/assets/images/front-logo.png")} 
      className="w-[160px] h-[64px]"
      resizeMode='contain' 
       /> 
      <ProfileCard profile={user}></ProfileCard>
    </View>
  );
}



// <Pressable onPress={handleLogout}>
// <Text>Sign out</Text>
// </Pressable>