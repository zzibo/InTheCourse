import { View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

interface LoadingLottieProps {
  size: number; // Specify size as a prop
}

export function LoadingLottie(props: LoadingLottieProps) {
  return (
    <View style={{ height: props.size, aspectRatio: 1}}>
      <LottieView
          source={require("@/assets/images/auth/lottie.json")}
          style={{ flex: 1 }}
          autoPlay
          loop
      />
    </View>
  )
}

export default LoadingLottie