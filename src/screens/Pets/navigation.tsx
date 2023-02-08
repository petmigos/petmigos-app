import type { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListPets from ".";
import PetDetails from "../PetDetails";

export type Params = {
  Pets: undefined;
  PetInfo: {
    petId: string;
  };
};

export type PetDetailNavigationProp = StackNavigationProp<Params, "PetInfo">;

const Stack = createStackNavigator<Params>();

const ListPetsNavigations: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {
          return <></>;
        },
      }}
    >
      <Stack.Screen name="Pets" component={ListPets} />
      <Stack.Screen name="PetInfo" component={PetDetails} />
    </Stack.Navigator>
  );
};

export default ListPetsNavigations;
