import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/LoginScreen';
import PickUpSignUp from './src/screens/PickUpSignUp';
import StoreList from './src/screens/StoreList';
import PetStoreScreen from './src/screens/PetStoreScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Tab Navigator that will be displayed after the user logs in
function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="StoreList" component={StoreList} />
      <Tab.Screen name="PetStoreScreen" component={PetStoreScreen} />
    </Tab.Navigator>
  );
}

// Define the Stack Navigator for the Login and Signup screens
function AuthStack() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Signup" component={PickUpSignUp} />
    </Stack.Navigator>
  );
}

// Define the main App component that wraps the navigators
export default function NavigateTo() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
