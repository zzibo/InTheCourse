import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const AuthenticationPage = () => {
  return (
    <SafeAreaView className="dark">
      <ScrollView>
        <View className="w-full justify-start items-center min-h-[85vh] px-4 my-6">
          <Image
            source={require("@/assets/images/front-logo.png")}
            resizeMode="contain"
            className="w-[300px] "
          ></Image>
          <Text className="text-2xl text-black text-semibold mt-10 font-bold text-center px-6 ">
            Find your coursemates today!
          </Text>

          {/* Sign Up Button */}
          <TouchableOpacity
            className="w-3/4 bg-[#FF7518] rounded-xl py-4 mt-6"
            onPress={() => router.push("/signUp")}
          >
            <Text className="text-center text-black font-semibold">
              SIGN UP
            </Text>
          </TouchableOpacity>

          {/* Log In Button */}
          <TouchableOpacity
            className="w-3/4 bg-[#FF7518] rounded-xl py-4 mt-4"
            onPress={() => router.push("/logIn")}
          >
            <Text className="text-center text-black font-semibold">LOG IN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthenticationPage;
