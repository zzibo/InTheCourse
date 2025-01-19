import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import LoadingLottie from '@/components/LoadingLottie';
import { useAuth } from '@/context/authContext';

const SignUpPage = () => {
  const router = useRouter();
  const { signUp } = useAuth();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const displayNameRef = useRef("")
  const displayPictureRef = useRef("")
  const majorRef = useRef("")
  const yearRef = useRef("")
  const hostelRef = useRef("")
  const bioRef = useRef("")
  const coursesRef = useRef("")

  const handleSignUp = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Fill up all fields!")
      return;
    }

    setLoading(true)
    let response = await signUp(
      emailRef.current,
      passwordRef.current,
      displayNameRef.current,
      displayPictureRef.current,
      majorRef.current,
      yearRef.current,
      hostelRef.current,
      bioRef.current,
      coursesRef.current.split(" "),
    )
  }

  const [loading, setLoading] = useState(false);
  
  return (
    <ScrollView className="flex-1">
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(5), paddingHorizontal: wp(5) }} className="flex-1 gap-10">
        {/* Sign up image */}
        <View className='items-center'>
          <Image
            style={{ height: hp(25) }} 
            resizeMode="contain"
            source={require('@/assets/images/auth/signUpBanner.png')}
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
            <View style={{ height: hp(7) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
              <Feather name="user" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={value => displayNameRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Display Name'
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={{ height: hp(7) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
              <Entypo name="image" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={value => displayPictureRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Display Picture'
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={{ height: hp(7) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
              <Feather name="book" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={value => majorRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Major'
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={{ height: hp(7) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
              <MaterialIcons name="123" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={value => yearRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Year'
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={{ height: hp(7) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
              <FontAwesome name="home" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={value => hostelRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Hostel'
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={{ height: hp(7) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
              <FontAwesome name="quote-left" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={value => bioRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Bio'
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={{ height: hp(7) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
              <Entypo name="magnifying-glass" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={value => coursesRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Courses'
                placeholderTextColor={'grey'}
              />
            </View>

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
                  onPress={handleSignUp}
                >
                  <Text style={{ fontSize: hp(2.7) }} className='text-white font-bold tracking-wider'>
                    Sign Up
                  </Text>
                </TouchableOpacity> 
              )}
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className='flex flex-row items-center justify-center'>
          <Text style={{ fontSize: hp(1.8) }} className='font-semibold text-neutral-500'>Already have an account? </Text>
          <Pressable onPress={() => router.push("/(auth)/logIn")}>
            <Text style={{ fontSize: hp(1.8) }} className='font-bold text-[#FF7518]'>Log In</Text>
          </Pressable>
        </View>
        <View style={{ height: hp(2)}} className="h-4" />
      </View>
    </ScrollView>
  )
}

export default SignUpPage