import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import Petnet from "../../screens/Petnet";
import ListPetsNavigations from "../../screens/Pets/navigation";
import PetStore from "../../screens/PetStore";
import Profile from "../../screens/Profile";

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => {
          return <View style={{ height: 56 }} />;
        },
        tabBarActiveBackgroundColor: "#7B4D2810",
        tabBarActiveTintColor: "#7B4D28",
        tabBarInactiveTintColor: "#7B4D28",
      }}
    >
      <Tab.Screen name="PetStore" component={PetStore} />
      <Tab.Screen name="PetNet" component={Petnet} />
      <Tab.Screen name="Meus Pets" component={ListPetsNavigations} />
      <Tab.Screen name="Meus Perfil" component={Profile} />
    </Tab.Navigator>
  );
};

export default Navigation;
