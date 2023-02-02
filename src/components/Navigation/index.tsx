import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Petnet from "../../screens/Petnet";
import ListPets from "../../screens/Pets";
import PetStore from "../../screens/PetStore";
import Profile from "../../screens/Profile";

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PetStore" component={PetStore} />
      <Tab.Screen name="PetNet" component={Petnet} />
      <Tab.Screen name="Meus Pets" component={ListPets} />
      <Tab.Screen name="Meus Perfil" component={Profile} />
    </Tab.Navigator>
  );
};

export default Navigation;
