import { NavigationContainer } from "@react-navigation/native";
import InitialNavigation from "./Navigation";
import PetStoreScreen from "./src/screens/PetStoreScreen";
import ItemUserScreen from "./src/screens/ItemUserScreen";
import CadastroProdutoScreen from "./src/screens/CadastroProdutoScreen";

const App = () => {
  return (
    <>
      <CadastroProdutoScreen/>
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