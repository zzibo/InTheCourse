import { auth, db } from "@/firebaseConfig";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Define the AuthContext value type
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (
    email: string,
    password: string,
    displayName: string,
    displayPicture: string,
    major: string,
    year: string,
    hostel: string,
    bio: string,
    courses: string,
  ) => Promise<Object>;
}

// Create AuthContext with a default value of null
export const AuthContext = createContext<AuthContextType | null>(null);

// Define props for the AuthContextProvider
interface AuthContextProviderProps {
  children: ReactNode; // Accepts React components as children
}

// Implement the AuthContextProvider
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Handle authentication state changes
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    })
    return unsub
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      // Implement login logic
    } catch (e) {
      console.error("Login error:", e);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      // Implement logout logic
    } catch (e) {
      console.error("Logout error:", e);
    }
  };

  const signUp = async (
    email: string,
    password: string,
    displayName: string,
    displayPicture: string,
    major: string,
    year: string,
    hostel: string,
    bio: string,
    courses: string,
  ) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Log in response: " + response?.user);
  
      await setDoc(doc(db, "users", response.user.uid), {
        email,
        password,
        displayName,
        displayPicture,
        major,
        year,
        hostel,
        bio,
        courses,
        userId: response.user.uid,
      });
  
      console.log("User document created successfully.");
      return {
        success: true,
        userId: response?.user?.uid
      }

    } catch (error) {
      console.error("Error signing up:", error);
      let msg = (error as Error).message;
      if (msg.includes("invalid-email")) {
        msg = "Invalid email"
      }

      return {
        success: false,
        msg
      }
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signUp, logout }}>
      { children }
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const value = useContext(AuthContext)

    if (!value) {
        throw new Error("useAuth must be wrapped inside AuthContextProvider")
    }
    
    return value;
}