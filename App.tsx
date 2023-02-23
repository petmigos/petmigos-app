import { NavigationContainer } from "@react-navigation/native";
import InitialNavigation from "./Navigation";
import PetStoreScreen from "./src/screens/PetStoreScreen";
import ItemUserScreen from "./src/screens/ItemUserScreen";
import CadastroProdutoScreen from "./src/screens/CadastroProdutoScreen";
import LoginScreen from "./src/screens/LoginScreen";
import NavigateTo from "./Navigate";

const App = () => {
  return (
    <>
      <NavigateTo/>
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