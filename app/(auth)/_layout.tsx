import { AuthContextProvider, useAuth } from "@/context/authContext";
import { router, Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const [isMounted, setIsMounted] = useState(false);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, [])

  useEffect(() => {
    if (!isMounted) return;

    // check if user is authenticated
    if (typeof isAuthenticated === undefined) return;
    const inApp = segments[0] == "(tabs)";
    if (isAuthenticated && !inApp) {
      router.replace("/(tabs)");
    } else if (!isAuthenticated) {
      router.replace("/(auth)");
    }
  }, [isAuthenticated]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
