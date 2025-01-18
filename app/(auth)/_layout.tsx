import { AuthContextProvider, useAuth } from '@/context/authContext';
import { router, Slot, useRouter, useSegments } from 'expo-router';
import React, { useEffect } from 'react';

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // check if user is authenticated
    if (typeof isAuthenticated === undefined) return;
    const inApp = segments[0] == "(tabs)";
    if (isAuthenticated && !inApp) {
      // TO DO: change to real home home
      router.replace("/(auth)/(test)");

    } else if (!isAuthenticated) {
      // TO DO: redirect to login
      router.replace("/(auth)/logIn");
    }

  }, [isAuthenticated])

  return (
    <Slot />
  )
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
