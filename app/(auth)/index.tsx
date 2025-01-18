import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView} from 'react-native-safe-area-context';
import { Fontisto } from '@expo/vector-icons';




const SignIn = () => {
  return (
    <SafeAreaView className='dark'>
      <ScrollView>
        <View className="w-full justify-start items-center min-h-[85vh] px-4 my-6">
          <Image
          source={require('@/assets/images/front-logo.png')} resizeMode='contain' className="w-[300px] "></Image>
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold text-center px-6 ">Find your coursemates today!</Text>
          
             {/* Sign In Button */}
          <TouchableOpacity className="w-3/4 bg-[#FF7518] rounded-xl py-4 mt-6">
            <Text className="text-center text-black font-bold">SIGN IN</Text>
          </TouchableOpacity>

           {/* Log In Button */}
           <TouchableOpacity className="w-3/4 bg-[#FF7518] rounded-xl py-4 mt-4">
            <Text className="text-center text-black font-bold">LOG IN</Text>
          </TouchableOpacity>

        </View>

        
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default SignIn;
