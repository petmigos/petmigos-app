import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AllergyCard from "../../components/AllergyCard";
import HygieneCard from "../../components/HygieneCard";
import { Modal } from "../../components/Modal";
import { Params } from "../../components/Navigation";
import VaccineCard from "../../components/VaccineCard";
import { Allergy } from "../../entities/allergy";
import { Hygiene } from "../../entities/hygiene";
import { Pet } from "../../entities/pet";
import { Vaccine } from "../../entities/vaccine";
import { useModal } from "../../hooks/useModal";
import { AllergyService } from "../../services/allergyService";
import { HygieneService } from "../../services/hygieneService";
import { PetService } from "../../services/petService";
import { VaccineService } from "../../services/vaccineService";
import { FindAll as FindAllAllergies } from "../../use_cases/allergies/FindAll";
import { FindAll as FindAllHygienes } from "../../use_cases/hygienes/FindAll";
import { FindById } from "../../use_cases/pets/FindById";
import { FindAll as FindAllVaccines } from "../../use_cases/vaccines/FindAll";

const findById = new FindById(new PetService());
const findAllAllergies = new FindAllAllergies(new AllergyService());
const findAllHygienes = new FindAllHygienes(new HygieneService());
const findAllVaccines = new FindAllVaccines(new VaccineService());

const PetDetails: React.FC = () => {
  const {
    closeModal: closeVaccineModal,
    openModal: openVaccineModal,
    visible: visibleVaccineModal,
  } = useModal(false);
  const {
    closeModal: closeHygieneModal,
    openModal: openHygieneModal,
    visible: visibleHygieneModal,
  } = useModal(false);
  const {
    closeModal: closeAllergyModal,
    openModal: openAllergyModal,
    visible: visibleAllergyModal,
  } = useModal(false);

  const route = useRoute<RouteProp<Params, "PetInfo">>();
  const { petId } = route.params;
  const [pet, setPet] = useState<Pet>();
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);
  const [allergies, setAllergies] = useState<Allergy[]>([]);
  const [hygienes, setHygienes] = useState<Hygiene[]>([]);

  useEffect(() => {
    async function fetch(id: string) {
      const pet = await findById.execute(id);
      const allergies = await findAllAllergies.execute(id);
      const hygienes = await findAllHygienes.execute(id);
      const vaccines = await findAllVaccines.execute(id);
      setVaccines(vaccines);
      setAllergies(allergies);
      setHygienes(hygienes);
      setPet(pet);
    }

    fetch(petId);
  }, []);

  function renderVaccine(vaccine: Vaccine) {
    return <VaccineCard key={vaccine._id || vaccine.name} vaccine={vaccine} />;
  }

  function renderHygiene(hygiene: Hygiene) {
    return (
      <HygieneCard key={hygiene._id || hygiene.description} hygiene={hygiene} />
    );
  }

  function renderAllergy(allergy: Allergy) {
    return <AllergyCard key={allergy._id || allergy.name} allergy={allergy} />;
  }

  if (pet === undefined)
    return (
      <View style={styles.container}>
        <Text>Carregando informações do seu pet...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.pet}>
        <Image
          style={styles.petImage}
          source={{
            width: 62,
            height: 62,
            uri:
              pet.imageURL ||
              "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
        />
        <View style={styles.petDetails}>
          <Text style={styles.petName}>Nome do Pet</Text>
          <View style={styles.divisor} />
          <Text style={styles.petAge}>0 meses</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <Pressable onPress={openVaccineModal}>
          <View style={styles.actionButton}>
            <Text style={styles.buttonText}>Vacinas</Text>
          </View>
        </Pressable>
        <Pressable onPress={openAllergyModal}>
          <View style={styles.actionButton}>
            <Text style={styles.buttonText}>Alergias</Text>
          </View>
        </Pressable>
        <Pressable onPress={openHygieneModal}>
          <View style={styles.actionButton}>
            <Text style={styles.buttonText}>Higienes</Text>
          </View>
        </Pressable>
      </View>
      <Modal visible={visibleVaccineModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text
              style={{
                width: "90%",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Vacinas
            </Text>
            <Pressable onPress={closeVaccineModal} style={{ width: "10%" }}>
              <MaterialIcons name="close" color="#915E36" size={28} />
            </Pressable>
          </View>
          <View style={styles.modalMain}>
            <FlatList
              data={vaccines}
              renderItem={({ item }) => renderVaccine(item)}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={visibleHygieneModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text
              style={{
                width: "90%",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Higiene
            </Text>
            <Pressable onPress={closeHygieneModal} style={{ width: "10%" }}>
              <MaterialIcons name="close" color="#915E36" size={28} />
            </Pressable>
          </View>
          <View style={styles.modalMain}>
            <FlatList
              data={hygienes}
              renderItem={({ item }) => renderHygiene(item)}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={visibleAllergyModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text
              style={{
                width: "90%",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Alergias
            </Text>
            <Pressable onPress={closeAllergyModal} style={{ width: "10%" }}>
              <MaterialIcons name="close" color="#915E36" size={28} />
            </Pressable>
          </View>
          <View style={styles.modalMain}>
            <FlatList
              data={allergies}
              renderItem={({ item }) => renderAllergy(item)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  pet: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  petImage: {
    width: 95,
    height: 95,
    borderRadius: 50,
  },
  petDetails: {
    margin: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  petName: {
    fontSize: 26,
    fontWeight: "bold",
  },
  petAge: {
    fontSize: 18,
    color: "#DBA87F",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 18,
  },
  actionButton: {
    width: 250,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#7B4D28",
    color: "#7B4D28",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7B4D28",
  },
  divisor: {
    width: 200,
    height: 1,
    backgroundColor: "#93A5B1",
    opacity: 0.3,
  },
  modalContainer: {
    width: "90%",
    height: "90%",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  modalMain: {},
});

export default PetDetails;
