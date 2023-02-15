import { NavigationContainer } from "@react-navigation/native";
import InitialNavigation from "./Navigation";

const App = () => {
  return (
    <>
      <NavigationContainer>
        <InitialNavigation />
      </NavigationContainer>
      {/* <NavigationContainer>
        <Navigation />
      </NavigationContainer> */}
    </>
  );
};
export default App;
