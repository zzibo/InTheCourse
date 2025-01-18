import { View, Text, Pressable } from 'react-native';
import { AuthContext, AuthContextProvider, useAuth } from '@/context/authContext';
import { router } from 'expo-router';

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
    <View>
      <Text className='text-3xl font-bold'>
        Home
      </Text>
      <Pressable onPress={handleLogout}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
}