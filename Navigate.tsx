import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { primary } from "./src/styles/colors";
import { MaterialIcons, Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import LoginScreen from "./src/screens/Auth/LoginScreen";
import PickUpSignUp from "./src/screens/Auth/PickUpSignUp";
import SignUpCompany from "./src/screens/Auth/SignUpCompany";
import CadastroScreen from "./src/screens/Auth/CadastroScreen";

import PetStoreScreen from "./src/screens/PetStoreScreen";
import StoreList from "./src/screens/Stores/StoreList";
import StorePage from "./src/screens/Stores/StorePage";
import PurchaseItemScreen from "./src/screens/ItemVisualization/PurchaseItemScreen";

import ListPets from "./src/screens/Pets";
import PetDetails from "./src/screens/PetDetails";
import RegisterPets from "./src/screens/PetsRegistering";

import Profile from "./src/screens/Profile/Profile";

// --- TELAS DE EMPRESA
import CompanyHomeScreen from "./src/screens/Company/CompanyHomeScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import StoreProfileScreen from "./src/screens/StoreProfileScreen";
import ItemUserScreen from "./src/screens/ItemVisualization/ItemUserScreen";
import CadastroProdutoScreen from "./src/screens/Company/CadastroProdutoScreen";
import ItemCompanyScreen from "./src/screens/ItemVisualization/ItemCompanyScreen";
import EditarProdutoScreen from "./src/screens/Company/EditarProdutoScreen";
import CategoryVisualizationScreen from "./src/screens/CategoryVisualization/CategoryVisualizationScreen";
import EditPets from "./src/screens/PetEditing";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function TabPetOwner() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primary,
        tabBarStyle: style.tab,
      }}
    >
      <Tab.Screen
        name="PetStoreStack"
        component={PetStoreStack}
        options={{
          tabBarLabel: "PetStore",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="local-grocery-store"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PetStack"
        component={PetStack}
        options={{
          tabBarLabel: "Meus Pets",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="pets" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Meu perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyStore() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CompanyHomeScreen" component={CompanyHomeScreen} />
      <Stack.Screen
        name="CadastroProdutoScreen"
        component={CadastroProdutoScreen}
      />
      <Stack.Screen
        name="EditarProdutoScreen"
        component={EditarProdutoScreen}
      />
      <Stack.Screen name="ItemCompanyScreen" component={ItemCompanyScreen} />
    </Stack.Navigator>
  );
}

function TabCompany() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primary,
        tabBarStyle: style.tab,
      }}
    >
      <Tab.Screen
        name="MyStore"
        component={MyStore}
        options={{
          tabBarLabel: "Minha Loja",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarLabel: "Pedidos",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="StoreProfileScreen"
        component={StoreProfileScreen}
        options={{
          tabBarLabel: "Meu perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="PickUpSignUp" component={PickUpSignUp} />
      <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
      <Stack.Screen name="SignUpCompany" component={SignUpCompany} />
    </Stack.Navigator>
  );
}

function PetStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Pets"
    >
      <Stack.Screen name="Pets" component={ListPets} />
      <Stack.Screen name="PetInfo" component={PetDetails} />
      <Stack.Screen name="RegisterPet" component={RegisterPets} />
      <Stack.Screen name="EditPets" component={EditPets} />
    </Stack.Navigator>
  );
}

function PetStoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="PetStore"
    >
      <Stack.Screen name="PetStore" component={PetStoreScreen} />
      <Stack.Screen name="StoreStack" component={StoreStack} />
      <Stack.Screen
        name="CategoryVisualizationScreen"
        component={CategoryVisualizationScreen}
      />
      <Stack.Screen name="ItemUserScreen" component={ItemUserScreen} />
      <Stack.Screen name="PurchaseItemScreen" component={PurchaseItemScreen}/>
    </Stack.Navigator>
  );
}

function StoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="StoreList"
    >
      <Stack.Screen name="StoreList" component={StoreList} />
      <Stack.Screen name="StorePage" component={StorePage} />
      <Stack.Screen name="ItemUserScreen" component={ItemUserScreen} />
      <Stack.Screen name="PurchaseItemScreen" component={PurchaseItemScreen}/>

    </Stack.Navigator>
  );
}

export default function NavigateTo() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabPetOwner"
          component={TabPetOwner}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabCompany"
          component={TabCompany}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyStore"
          component={MyStore}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PetStoreStack"
          component={PetStoreStack}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="StoreStack"
          component={StoreStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PetStack"
          component={PetStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  tab: {
    position: "absolute",
    height: "6%",
    paddingBottom: 5,
  },
});
