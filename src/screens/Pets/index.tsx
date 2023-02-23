import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PetCard from "../../components/PetCard";
import { Pet } from "../../entities/pet";
import { PetService } from "../../services/petService";
import { FetchAll } from "../../use_cases/pets/FetchAll";
import { PetDetailNavigationProp } from "./navigation";

const fetchAll = new FetchAll(new PetService());

const ListPets: React.FC = () => {
  const navigation = useNavigation<PetDetailNavigationProp>();
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    async function fetch() {
      const allPets = await fetchAll.execute();
      setPets(allPets);
    }

    fetch();
  }, []);

  function onPressPet(pet: Pet) {
    navigation.navigate("PetInfo", { petId: pet._id });
  }

  function renderPets(pet: Pet) {
    return (
      <TouchableOpacity onPress={() => onPressPet(pet)}>
        <PetCard key={pet._id || pet.name} {...pet} />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          {pets.length === 0 && (
            <Text>
              Não há pets cadastrados. Considere cadastrar um pet primeiro.
            </Text>
          )}
          <FlatList
            contentContainerStyle={{ paddingBottom: 50 }}
            style={styles.pets}
            data={pets}
            renderItem={({ item }) => renderPets(item)}
          />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pets: {
    flex: 1,
    height: 3,
    padding: 16,
    backgroundColor: "#fff",
  },
});

export default ListPets;
