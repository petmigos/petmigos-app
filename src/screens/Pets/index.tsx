import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PetCard from "../../components/Cards/PetCard";
import { Pet } from "../../entities/pet";
import { PetService } from "../../services/petService";
import { FetchAll } from "../../use_cases/pets/FetchAll";
import { PetDetailNavigationProp } from "./navigation";
import { background, erro, primary, superficie, inputBackground } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { id_user } from "../Auth/LoginScreen";
import { UpdatePet } from "../../use_cases/pets/Update";
import { TitleScreenComp } from "../../components/TitleScreen/TitleScreenComp";




const fetchAll = new FetchAll(new PetService());

const ListPets: React.FC = (props) => {
  const navigation = useNavigation<PetDetailNavigationProp>();
  const [pets, setPets] = useState<Pet[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredData] = useState(pets);
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused) {
      async function fetch() {
        const allPets = await fetchAll.execute(id_user);
        setPets(allPets);
        setFilteredData(allPets);
      }
  
      fetch();
    }
  }, [props, isFocused]);

  const handleSearch = (text: string) => {
    setSearchText(text);

    const filteredData = pets.filter((pet) => {
      const petName = pet.name.toLowerCase();
      const searchTextLower = text.toLowerCase();
      return petName.includes(searchTextLower);
    });
    setFilteredData(filteredData);
  };

  function onPressPet(pet: Pet) {
    navigation.navigate("PetInfo", { petId: pet._id });
  }

  function goRegisterPet(){
    navigation.navigate("RegisterPet");
  }

  function renderPets(pet: Pet) {
    return (
      <TouchableOpacity onPress={() => onPressPet(pet)}>
        <PetCard key={pet._id || pet.name} {...pet} />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TitleScreenComp title="Meus Pets" />
          {pets.length === 0 && (
            <Text>
              Não há pets cadastrados. Considere cadastrar um pet primeiro.
            </Text>
          )}

        <View>
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#BDBCBC"
            onChangeText={handleSearch}
            value={searchText}
            style={styles.searchBar}
          />
        </View>

        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          style={styles.pets}
          data={filteredItems}
          renderItem={({ item }) => renderPets(item)}
        />
        <TouchableOpacity style={styles.add_button} onPress={goRegisterPet}>
          <Text style={styles.add_text}>ADICIONAR PET</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
  pets: {
    height: 3,
    padding: 16,
    backgroundColor: "#fff",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  add_button: {
    backgroundColor: "#7b4d28",
    height: 56,
    // fontFamily: 'Ubuntu-Bold',
    fontStyle: "normal",
    alignItems: "center",
    textAlign: "center",
    marginTop: -5,
    borderRadius: 8,
    top: -70,
    marginHorizontal: 30,
  },

  add_text: {
    fontSize: 18,
    fontWeight: "bold",
    top: 15,
    color: "#FFFFFF",
  },


  middleScreen: {
    flex: 2,
    backgroundColor: background,
    marginRight: 20,
    marginLeft: 20,
  },

  searchIcon: {
    left: 60,
    top: 24,
  },

  searchBar: {
    padding: 8,
    borderRadius: 8,
    margin: 20,
    fontSize: 18,
    borderColor: "#fff",
    color: "#BDBCBC",
    backgroundColor: inputBackground,
  },
});

export default ListPets;
