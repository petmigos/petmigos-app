import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PetCard from "../../components/PetCard";
import { Pet } from "../../entities/pet";
import { PetService } from "../../services/petService";
import { FetchAll } from "../../use_cases/pets/FetchAll";

const fetchAll = new FetchAll(new PetService());

const ListPets: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    async function fetch() {
      const allPets = await fetchAll.execute();
      setPets(allPets);
    }

    fetch();
  }, []);

  function renderPets(pet: Pet) {
    return <PetCard key={pet._id || pet.name} {...pet} />;
  }

  return (
    <View>
      {pets.length === 0 && (
        <Text>
          Não há pets cadastrados. Considere cadastrar um pet primeiro.
        </Text>
      )}
      <FlatList
        style={styles.pets}
        data={pets}
        renderItem={({ item }) => renderPets(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pets: {
    flex: 1,
    height: 3,
    padding: 16,
    backgroundColor: "#fff",
  },
});

export default ListPets;
