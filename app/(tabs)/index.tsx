import { Image, StyleSheet, Platform, ImageBackground, Dimensions } from 'react-native';
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {ProfileCard} from '@/components/ProfileCard';
import user from "../../h&r-backend/users.json";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function HomeScreen() {
  return (
    <View className='justify-center items-center'>
      <Image
      source={require('@/assets/images/style2logo.png')}
      className='w-[160px] h-[84px] items-center justify-center'
      resizeMode='contain'
      ></Image>

      <View>
      <ProfileCard profile={user}></ProfileCard>
      </View>
    </View>


  )
}
