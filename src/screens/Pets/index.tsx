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




const fetchAll = new FetchAll(new PetService());

var updated = new UpdatePet(new PetService());

const ListPets: React.FC = (props) => {
  const navigation = useNavigation<PetDetailNavigationProp>();
  const [pets, setPets] = useState<Pet[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused) {
      async function fetch() {
        const allPets = await fetchAll.execute(id_user);
        setPets(allPets);
      }
  
      fetch();
    }
  }, [props, isFocused]);

  function onPressPet(pet: Pet) {
    navigation.navigate("PetInfo", { petId: pet._id });
  }

  function goRegisterPet(){
    navigation.navigate("RegisterPet");
  }

  async function updatePet(pet_id: string){
    
    const ownerId = id_user;
    const name = "Doguinho";
    const type = "Cachorro";
    const gender = "Male";
    const birthday = (new Date());
    const image = "http://res.cloudinary.com/petmigosimages/image/upload/v1680039418/dw5ipnbsgqmgublpgptg.jpg";
    const tags = ["gente boa", "amigo"]
    return await updated.execute(pet_id, {ownerId, name, type, birthday, gender, tags, image,})
    
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
        {pets.length === 0 && (
          <Text>
            Não há pets cadastrados. Considere cadastrar um pet primeiro.
          </Text>
        )}
        
        <View>
          {/* <TextInput
            style={styles.input_box}
            placeholder="Pesquisar"
            textAlign="center"
          ></TextInput>
          <View style={styles.searchIcon}>
            <Ionicons name="search-outline" size={20}></Ionicons>
          </View> */}
        </View>

        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          style={styles.pets}
          data={pets}
          renderItem={({ item }) => renderPets(item)}
        />
        <TouchableOpacity style={styles.add_button} onPress={event => 
          {goRegisterPet(), console.log(updatePet())}}>
          <Text style={styles.add_text}>ADICIONAR PET</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background
  },
  pets: {
    height: 3,
    padding: 16,
    backgroundColor: "#fff",
    top: 40,
  },

  add_button: {
    backgroundColor: '#7b4d28',
    height: 56,
    // fontFamily: 'Ubuntu-Bold',
    fontStyle: 'normal',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: -5,
    borderRadius: 8,
    top: -70,
    marginHorizontal: 30,
},

   add_text: {
    fontSize: 18,
    fontWeight: "bold",
    top: 15,
    color: '#FFFFFF'
},

   input_box: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: inputBackground,
    borderRadius: 6,
    opacity: 0.5,
    fontSize: 18,
    borderColor: "#fff",
    width: 300,
    top: 60,
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
  }

});

export default ListPets;
