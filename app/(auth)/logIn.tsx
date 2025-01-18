import Fontisto from '@expo/vector-icons/Fontisto';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Image, Text, TextInput, TouchableOpacity, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useRef, useState } from 'react'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import LoadingLottie from '@/components/LoadingLottie';

const LogInPage = () => {
  const router = useRouter();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Fill up all fields!")
      return;
    }
  }

  const [loading, setLoading] = useState(false);
  
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(5), paddingHorizontal: wp(5) }} className="flex-1 gap-10">
        {/* Log in image */}
        <View className='items-center'>
          <Image
            style={{ height: hp(25) }} 
            resizeMode="contain"
            source={require('@/assets/images/auth/banner.png')}
          />
        </View>

        {/* Form */}
        <View className="gap-8">
          <View className='gap-4'>
            <View style={{ height: hp(7) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
              <Fontisto name="email" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={value => emailRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Email'
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={{ height: hp(7) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
              <Ionicons name="key" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={value => passwordRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Password'
                secureTextEntry
                placeholderTextColor={'grey'}
              />
            </View>
            <Text style={{ fontSize: hp(1.8) }} className='font-semibold text-right text-neutral-500'>Forgot Password?</Text>

            {/* Submit button (if not pressed) */}
            <View>
              {loading ? (
                <View className='flex-row justify-center'>
                  <LoadingLottie size={hp(12)} /> 
                </View>
              ) : (
                <TouchableOpacity 
                  style={{ height: hp(6.5) }} 
                  className='bg-[#FF7518] rounded-xl items-center justify-center'
                  onPress={handleLogin}
                >
                  <Text style={{ fontSize: hp(2.7) }} className='text-white font-bold tracking-wider'>
                    Log in
                  </Text>
                </TouchableOpacity> 
              )}
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className='flex flex-row items-center justify-center'>
          <Text style={{ fontSize: hp(1.8) }} className='font-semibold text-neutral-500'>Don't have an account? </Text>
          <Pressable onPress={() => router.push("/(auth)/signUp")}>
            <Text style={{ fontSize: hp(1.8) }} className='font-bold text-[#FF7518]'>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default LogInPage