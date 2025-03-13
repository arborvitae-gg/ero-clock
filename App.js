// Initial Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Navigation Bar
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// '/screens' Folder
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

// Read 'ReadMe.md'
// in Terminal: npx expo start 
// needs node_modules to be installed (not included in Github repository)
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
