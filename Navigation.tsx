import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SignUpCompany from './src/screens/SignUpCompany';
import { background } from './src/styles/colors';
import { useEffect } from 'React'
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import PickUpSignUp from './src/screens/PickUpSignUp';

const Stack = createStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
          <Stack.Screen name="Login" 
            component={LoginScreen}
            key="Login" 
          />
          <Stack.Screen name="PickUpSignUp" 
            component={PickUpSignUp}
            key="PickUpSignUp" 
          />
          <Stack.Screen name="CadastroScreen" 
            component={CadastroScreen}
            key="CadastroScreen" 
          />
            <Stack.Screen name="SignUpCompany" 
            component={SignUpCompany} 
            key="SignUpCompany"
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default Navigation;
