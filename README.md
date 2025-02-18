# In-The-Course

A React Native mobile application built with Expo for course matching and student connections at universities. Think Tinder, but for finding study buddies in your courses!

## Prerequisites

- Node.js (>= 14.0.0)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Studio (for Android development)
- Firebase account

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zzibo/In-The-Course.git
   cd In-The-Course
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase configuration:
   - Create a new project in [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication and Firestore
   - Create a file named `firebaseConfig.tsx` in the root directory with your Firebase configuration:

   ```typescript
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Run on specific platforms:
   ```bash
   # For iOS
   npm run ios

   # For Android
   npm run android

   # For web
   npm run web
   ```

## Tech Stack

- React Native
- Expo
- Firebase (Authentication & Firestore)
- TailwindCSS (via NativeWind)
- TypeScript

## Project Structure

```
In-The-Course/
├── app/                  # Main application screens
├── components/          # Reusable components
├── constants/          # App constants
├── context/           # React Context providers
├── hooks/            # Custom React hooks
└── assets/          # Images and other static assets
```

## Features

- User authentication
- Profile management
- Course matching
- Student networking
- Swipe interface for matching
- Detailed student profiles
- Major and year filtering

## Important Note

The `firebaseConfig.tsx` file is not included in the repository for security reasons. You'll need to create your own Firebase project and add the configuration as described in the installation steps.

## License

This project is licensed under the MIT License.