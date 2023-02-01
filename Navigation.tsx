import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpCompany from './src/screens/SignUpCompany';
import { background } from './src/styles/colors';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SignUpCompany" 
            component={SignUpCompany} 
            options={{title: '',  
                      headerShadowVisible: false, 
                      headerStyle:{ backgroundColor: background}}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default Navigation;
