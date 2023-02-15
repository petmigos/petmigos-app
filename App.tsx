import { NavigationContainer } from "@react-navigation/native";
import InitialNavigation from "./Navigation";
import PetStoreScreen from "./src/screens/PetStoreScreen";
import ItemUserScreen from "./src/screens/ItemUserScreen";

const App = () => {
  return (
    <>
    <PetStoreScreen/>
      {/* <NavigationContainer>
        <InitialNavigation />
      </NavigationContainer> */}
      {/* <NavigationContainer>
        <Navigation />
      </NavigationContainer> */}
    </>
  );
};
export default App;


