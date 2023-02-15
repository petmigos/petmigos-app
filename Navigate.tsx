import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primary } from './src/styles/colors';
import { MaterialIcons } from '@expo/vector-icons'; 

import LoginScreen from './src/screens/LoginScreen';
import PickUpSignUp from './src/screens/PickUpSignUp';
import StoreList from './src/screens/StoreList';
import PetStoreScreen from './src/screens/PetStoreScreen';
import ListPets from './src/screens/Pets';
import PetDetails from './src/screens/PetDetails';
import SignUpCompany from './src/screens/SignUpCompany';
import CadastroScreen from './src/screens/CadastroScreen';
import StoreScreen from './src/screens/StoreScreen';
import {BuyItemScreen} from './src/screens/BuyItem/BuyItemScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primary,
        tabBarStyle: {position: 'absolute', height: '6%', padding: 5}}}
    >
        <Tab.Screen name="PetStoreStack" component={PetStoreStack} 
        options={{
            tabBarLabel: 'PetStore',
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="local-grocery-store" size={size} color={color} />
            )}}/>

        <Tab.Screen name="PetStack" component={PetStack} 
        options={{
            tabBarLabel: 'Meus Pets',
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" size={size} color={color} />
            )}}/>
      <Tab.Screen name="PetStore" component={PetStoreScreen} 
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="PickUpSignUp" component={PickUpSignUp} />
      <Stack.Screen name="CadastroScreen" component={CadastroScreen}/>
      <Stack.Screen name="SignUpCompany" component={SignUpCompany} />
    </Stack.Navigator>
  );
}

function PetStack(){
  return(
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Pets">
        <Stack.Screen name="Pets" component={ListPets} />
        <Stack.Screen name="PetInfo" component={PetDetails} />
      </Stack.Navigator>
  )
}

function PetStoreStack(){
  return(
    <Stack.Navigator
      screenOptions={{headerShown: false}} initialRouteName="PetStore">
        <Stack.Screen name="PetStore" component={PetStoreScreen}/>
        <Stack.Screen name="StoreList" component={StoreList}/>
        <Stack.Screen name="StoreScreen" component={StoreScreen}/>
        <Stack.Screen name="BuyItemScreen" component={BuyItemScreen}/>
    </Stack.Navigator>
  )
}

export default function NavigateTo() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="PetStack" component={PetStack} options={{ headerShown: false }} />
          <Stack.Screen name="PetStoreStack" component={PetStoreStack} options={{headerShown: false}}/>  
        </Stack.Navigator>
        </NavigationContainer>
      );
}
