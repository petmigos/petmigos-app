import { createStackNavigator } from "@react-navigation/stack";
import CadastroScreen from "./src/screens/CadastroScreen";
import LoginScreen from "./src/screens/LoginScreen";
import PickUpSignUp from "./src/screens/PickUpSignUp";
import SignUpCompany from "./src/screens/SignUpCompany";

const Stack = createStackNavigator();

const InitialNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} key="Login" />
      <Stack.Screen
        name="PickUpSignUp"
        component={PickUpSignUp}
        key="PickUpSignUp"
      />
      <Stack.Screen
        name="CadastroScreen"
        component={CadastroScreen}
        key="CadastroScreen"
      />
      <Stack.Screen
        name="SignUpCompany"
        component={SignUpCompany}
        key="SignUpCompany"
      />
    </Stack.Navigator>
  );
};

export default InitialNavigation;
