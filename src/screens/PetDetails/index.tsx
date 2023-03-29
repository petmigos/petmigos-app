import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { RouteProp, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Button, Image, Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AllergyCard from "../../components/Cards/AllergyCard";
import HygieneCard from "../../components/Cards/HygieneCard";
import { Modal } from "../../components/Modal";
import { Params, PetDetailNavigationProp } from "../Pets/navigation";
import VaccineCard from "../../components/Cards/VaccineCard";
import { Allergy, RiskEnum } from "../../entities/allergy";
import { Hygiene } from "../../entities/hygiene";
import { Pet } from "../../entities/pet";
import { Locale, Vaccine } from "../../entities/vaccine";
import { useModal } from "../../hooks/useModal";
import { AllergyService } from "../../services/allergyService";
import { HygieneService } from "../../services/hygieneService";
import { PetService } from "../../services/petService";
import { VaccineService } from "../../services/vaccineService";
import { FindAll as FindAllAllergies } from "../../use_cases/allergies/FindAll";
import { FindAll as FindAllHygienes } from "../../use_cases/hygienes/FindAll";
import { FindById } from "../../use_cases/pets/FindById";
import { FindAll as FindAllVaccines } from "../../use_cases/vaccines/FindAll";
import { alerta, complementar1, complementar2, erro, inputBackground, modalText, primary, secondary, secondary_v2, sucesso } from "../../styles/colors";
import { AddButton } from "../../components/AddButton";
import Checkbox from "expo-checkbox";
import { CreateAllergy } from "../../use_cases/allergies/Create";
import { CreateHygiene } from "../../use_cases/hygienes/Create";
import { CreateVaccine } from "../../use_cases/vaccines/Create";
import DatePicker from "react-native-date-picker";
import { Picker } from "@react-native-picker/picker";
import { id_user } from "../Auth/LoginScreen";
import { formatDate } from "../../components/Cards/PetCard/formatDate";
import { ValidationMessage } from "../../components/ValidationMessages/ValidationMessage";
import { DeleteVaccine } from "../../use_cases/vaccines/DeleteVaccine"
import { DeleteHygiene } from "../../use_cases/allergies/DeleteAllergy";
import { DeleteAllergy } from "../../use_cases/hygienes/DeleteHygiene";

const findById = new FindById(new PetService());

const findAllVaccines = new FindAllVaccines(new VaccineService());
const createVaccine = new CreateVaccine(new VaccineService());

const findAllAllergies = new FindAllAllergies(new AllergyService());
const createAllergy = new CreateAllergy(new AllergyService());

const findAllHygienes = new FindAllHygienes(new HygieneService());
const createHygiene = new CreateHygiene(new HygieneService());


const PetDetails: React.FC = (props) => {
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

  const {
    closeModal: closeVaccineRegisterModal,
    openModal: openVaccineRegisterModal,
    visible: visibleVaccineRegisterModal,
  } = useModal(false);
  const {
    closeModal: closeHygieneRegisterModal,
    openModal: openHygieneRegisterModal,
    visible: visibleHygieneRegisterModal,
  } = useModal(false);
  const {
    closeModal: closeAllergyRegisterModal,
    openModal: openAllergyRegisterModal,
    visible: visibleAllergyRegisterModal,
  } = useModal(false);

  const {
    closeModal: closeVaccineOptionsModal,
    openModal: openVaccineOptionsModal,
    visible: visibleVaccineOptionsModal,
  } = useModal(false);

  const route = useRoute<RouteProp<Params, "PetInfo">>();
  const { petId } = route.params;

  const [pet, setPet] = useState<Pet>();
  const navigation = useNavigation();

  // Pet Infos
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);
  const [allergies, setAllergies] = useState<Allergy[]>([]);
  const [hygienes, setHygienes] = useState<Hygiene[]>([]);

  // Vaccine
  const [vaccineName, setVaccineName] = useState("");
  const [vaccineDate, setVaccineDate] = useState<Date>();
  const [vaccinePlace, setVaccinePlace] = useState("");
  const [isVaccineTaken, setVaccineTaken] = useState(false);
  const toggleVaccineSwitch = () =>
    setVaccineTaken((previousState) => !previousState);
  const removeVaccine = new DeleteVaccine(new VaccineService());

  // Hygiene
  const [hygieneCategory, setHygieneCategory] = useState("");
  const [hygieneDescription, setHygieneDescription] = useState("");
  const [hygieneDate, setHygieneDate] = useState<Date>();
  const [isHygieneTaken, setHygieneTaken] = useState(false);
  const toggleHygieneSwitch = () =>
    setHygieneTaken((previousState) => !previousState);
  const removeHygiene = new DeleteHygiene(new HygieneService());

  // Allergy
  const [allergyName, setAllergyName] = useState("");
  const [allergyRisk, setAllergyRisk] = useState<RiskEnum>(RiskEnum.LOW);
  const removeAllergy = new DeleteAllergy(new AllergyService());

  const isFocused = useIsFocused();

  const [messageError, setMessageError] = useState("");
  const [showMessageError, setShowMessageError] = useState(false);

  useEffect(() => {
    if (isFocused) {
      async function fetch(user_id: string, pet_id: string) {
        const pet = await findById.execute(user_id, pet_id);
        const allergies = await findAllAllergies.execute(pet_id);
        const hygienes = await findAllHygienes.execute(pet_id);
        const vaccines = await findAllVaccines.execute(pet_id);
        setPet(pet);
        setVaccines(vaccines);
        setAllergies(allergies);
        setHygienes(hygienes);
      }

      fetch(id_user, petId);
    }
  }, [props, isFocused]);

  async function DeleteVaccineFunc(petId: string, vaccineId: string) {
    await removeVaccine.execute(petId, vaccineId);
    Alert.alert("Sucesso!", "Vacina deletada!", [
      {
        text: "Voltar a Vacinas",
        onPress: closeVaccineRegisterModal,
      },
    ]);
  }

  async function DeleteHygieneFunc(petId: string, hygieneId: string) {
    await removeHygiene.execute(petId, hygieneId);
    Alert.alert("Sucesso!", "Higiene deletada!", [
      {
        text: "Voltar a Higienes",
        onPress: closeVaccineRegisterModal,
      },
    ]);
  }

  async function DeleteAllergyFunc(petId: string, allergyId: string) {
    await removeAllergy.execute(petId, allergyId);
    Alert.alert("Sucesso!", "Alergia deletada!", [
      {
        text: "Voltar a Alergias",
        onPress: closeVaccineRegisterModal,
      },
    ]);
  }

  function Teste1() {
    console.log("Teste 1");
  }

  function Teste2() {
    console.log("Teste 2");
  }

  
  // Vaccine Options

  function VaccineOptionsModal(id_vaccine: string) {
    Alert.alert("Opções", "O que deseja fazer com esta vacina?", [
      {
        text: "Excluir",
        onPress: () => VaccineDeleteModal(id_vaccine),
      },
      {
        text: "Editar Status",
        onPress: () => VaccineEditModal,
      },
    ]);
  }
  
  function VaccineDeleteModal(id_vaccine: string) {
    Alert.alert("Deletar", "Deseja realmente excluir esta vacina?", [
      {
        text: "Cancelar",
        onPress: Teste2,
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () => DeleteVaccineFunc(petId, id_vaccine),
      },
    ]);
  }
  
  function VaccineEditModal(id_vaccine: string) {
    Alert.alert("Status da Vacina", "A vacina já foi tomada?", [
      {
        text: "Não",
        onPress: Teste1,
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: Teste2,
      },
    ]);
  }

  function renderVaccine(vaccine: Vaccine) {
    return (
      <VaccineCard
        key={vaccine._id || vaccine.name}
        vaccine={vaccine}
        onPress={() => VaccineOptionsModal(vaccine._id)}
      />
    );
  }

  // Hygiene Options
  function HygieneOptionsModal(id_vaccine: string) {
    Alert.alert("Opções", "O que deseja fazer com esta higiene?", [
      {
        text: "Excluir",
        onPress: () => HygieneDeleteModal(id_vaccine),
      },
      {
        text: "Editar Status",
        onPress: () => HygieneEditModal,
      },
    ]);
  }

  function HygieneDeleteModal(id_vaccine: string) {
    Alert.alert("Deletar", "Deseja realmente excluir esta higiene?", [
      {
        text: "Cancelar",
        onPress: Teste2,
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () => DeleteHygieneFunc(petId, id_vaccine),
      },
    ]);
  }

  function HygieneEditModal(id_vaccine: string) {
    Alert.alert("Status da Higiene", "A higiene já foi realizada?", [
      {
        text: "Não",
        onPress: Teste1,
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: Teste2,
      },
    ]);
  }
  
  function renderHygiene(hygiene: Hygiene) {
    return (
      <HygieneCard
        key={hygiene._id || hygiene.description}
        hygiene={hygiene}
        onPress={() => HygieneOptionsModal(hygiene._id)}
      />
    );
  }

  // Allergy Options
  function AllergyOptionsModal(id_vaccine: string) {
    Alert.alert("Opções", "O que deseja fazer com esta alergia?", [
      {
        text: "Excluir",
        onPress: () => AllergyDeleteModal(id_vaccine),
      },
      {
        text: "Cancelar",
        onPress: () => Teste1,
      },
    ]);
  }

  function AllergyDeleteModal(id_vaccine: string) {
    Alert.alert("Deletar", "Deseja realmente excluir esta alergia?", [
      {
        text: "Cancelar",
        onPress: Teste2,
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () => DeleteAllergyFunc(petId, id_vaccine),
      },
    ]);
  }

  function renderAllergy(allergy: Allergy) {
    return (
      <AllergyCard
        key={allergy._id || allergy.name}
        allergy={allergy}
        onPress={() => AllergyOptionsModal(allergy._id)}
      />
    );
  }

  if (pet === undefined) {
    return (
      <View style={styles.container}>
        <Text>Carregando informações do seu pet...</Text>
      </View>
    );
  }

  function EditPetInfo(petId: string){
    navigation.navigate("EditPets", { petId: petId });
  }

  async function SendData() {
    try {
      if (visibleVaccineRegisterModal) {
        const locale: Locale = {
          name: vaccinePlace,
        };
        const vaccine: Vaccine = {
          name: vaccineName,
          locale: locale,
          applied: isVaccineTaken,
          date: vaccineDate,
        };
        const createdVaccine = await createVaccine.execute(vaccine, petId);
        Alert.alert("Sucesso!", "Vacina cadastrado!", [
          {
            text: "Voltar a Vacinas",
            onPress: closeVaccineRegisterModal,
          },
        ]);
        setShowMessageError(false);
      } else if (visibleHygieneRegisterModal) {
        console.log("Higiene");
        const hygienedate: Date = new Date(hygieneDate);
        const hygiene: Hygiene = {
          category: hygieneCategory,
          description: hygieneDescription,
          done: isHygieneTaken,
          date: hygienedate,
        };

        const createdHygiene = await createHygiene.execute(hygiene, petId);
        Alert.alert("Sucesso!", "Higiene cadastrada!", [
          {
            text: "Voltar a Higienes",
            onPress: closeHygieneRegisterModal,
          },
        ]);
        setShowMessageError(false);
      } else if (visibleAllergyRegisterModal) {
        console.log("Alergia");
        const allergy: Allergy = {
          name: allergyName,
          risk: allergyRisk,
        };
        const createdAllegy = await createAllergy.execute(allergy, petId);
        Alert.alert("Sucesso!", "Higiene cadastrada!", [
          {
            text: "Voltar a Alergias",
            onPress: closeHygieneRegisterModal,
          },
        ]);
        setShowMessageError(false);
      }
    } catch (error: any) {
      setShowMessageError(true);
      setMessageError(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.pet}>
        <Image
          style={styles.petImage}
          source={{
            width: 62,
            height: 62,
            uri:
              pet.image ||
              "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
        />

        <View style={styles.petDetails}>
          <Text style={styles.petName}>{pet.name}</Text>
          <View style={styles.divisor} />
          <Text style={styles.petAge}>{formatDate(pet.birthday)}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => EditPetInfo(petId)}>
        <View style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar Informações</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.actions}>
        {/* <View style={styles.header}>
          <Text style={styles.header_text}>CUIDADOS</Text>
        </View> */}
        <TouchableOpacity onPress={openVaccineModal}>
          <View style={styles.actionButton}>
            <Text style={styles.buttonText}>Vacinas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openAllergyModal}>
          <View style={styles.actionButton}>
            <Text style={styles.buttonText}>Alergias</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openHygieneModal}>
          <View style={styles.actionButton}>
            <Text style={styles.buttonText}>Higienes</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Show Modal */}
      <Modal visible={visibleVaccineModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Pressable onPress={closeVaccineModal} style={{ width: "10%" }}>
              <MaterialIcons name="close" color="#915E36" size={28} />
            </Pressable>
            <Text style={styles.modalText}>Vacinas</Text>
          </View>
          <View style={styles.modalMain}>
            <FlatList
              data={vaccines}
              renderItem={({ item }) => renderVaccine(item)}
            />
          </View>
          <View style={styles.button}>
            <AddButton onPress={openVaccineRegisterModal} />
          </View>
        </View>
      </Modal>
      <Modal visible={visibleHygieneModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Pressable onPress={closeHygieneModal} style={{ width: "10%" }}>
              <MaterialIcons name="close" color="#915E36" size={28} />
            </Pressable>
            <Text style={styles.modalText}>Higiene</Text>
          </View>
          <View style={styles.modalMain}>
            <FlatList
              data={hygienes}
              renderItem={({ item }) => renderHygiene(item)}
            />
          </View>
          <View style={styles.button}>
            <AddButton onPress={openHygieneRegisterModal} />
          </View>
        </View>
      </Modal>
      <Modal visible={visibleAllergyModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Pressable onPress={closeAllergyModal} style={{ width: "10%" }}>
              <MaterialIcons name="close" color="#915E36" size={28} />
            </Pressable>
            <Text style={styles.modalText}>Alergias</Text>
          </View>
          <View style={styles.modalMain}>
            <FlatList
              data={allergies}
              renderItem={({ item }) => renderAllergy(item)}
            />
          </View>
          <View style={styles.button}>
            <AddButton onPress={openAllergyRegisterModal} />
          </View>
        </View>
      </Modal>

      {/* Create Modal */}
      <Modal visible={visibleVaccineRegisterModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Pressable
              onPress={closeVaccineRegisterModal}
              style={{ width: "10%" }}
            >
              <MaterialIcons name="arrow-back" color="#915E36" size={28} />
            </Pressable>
            <Text style={styles.modalText}>Adicionar Vacina</Text>
          </View>
          {showMessageError && <ValidationMessage error_text={messageError} />}
          <View style={styles.modalMain}>
            <TextInput
              style={styles.input_box}
              placeholder="Nome"
              onChangeText={(name) => setVaccineName(name)}
            ></TextInput>
            <TextInput
              style={styles.input_box}
              placeholder="Data (yy-mm-dd)"
              onChangeText={(date) =>
                setVaccineDate(new Date(date + "T23:59:59"))
              }
            ></TextInput>
            <TextInput
              style={styles.input_box}
              placeholder="Local"
              onChangeText={(place) => setVaccinePlace(place)}
            ></TextInput>
            <View style={styles.check_box_container}>
              <Switch
                trackColor={{ false: alerta, true: sucesso }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleVaccineSwitch}
                value={isVaccineTaken}
              />
              {isVaccineTaken == false ? (
                <Text style={styles.label}>Não tomada</Text>
              ) : (
                <Text style={styles.label}>Tomada</Text>
              )}
            </View>
            <TouchableOpacity onPress={SendData}>
              <View style={styles.actionButtonModal}>
                <Text style={styles.buttonTextModal}>CADASTRAR VACINA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={visibleHygieneRegisterModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Pressable
              onPress={closeHygieneRegisterModal}
              style={{ width: "10%" }}
            >
              <MaterialIcons name="arrow-back" color="#915E36" size={28} />
            </Pressable>
            <Text style={styles.modalText}>Adicionar Higiene</Text>
          </View>
          {showMessageError && <ValidationMessage error_text={messageError} />}
          <View style={styles.modalMain}>
            <TextInput
              style={styles.input_box}
              placeholder="Categoria"
              onChangeText={(name) => setHygieneCategory(name)}
            ></TextInput>
            <TextInput
              style={styles.input_box}
              placeholder="Descrição"
              onChangeText={(date) => setHygieneDescription(date)}
            ></TextInput>
            <TextInput
              style={styles.input_box}
              placeholder="Data (yy-mm-dd)"
              onChangeText={(date) =>
                setHygieneDate(new Date(date + "T23:59:59"))
              }
            ></TextInput>
            <View style={styles.check_box_container}>
              <Switch
                trackColor={{ false: alerta, true: sucesso }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleVaccineSwitch}
                value={isVaccineTaken}
              />
              {isVaccineTaken == false ? (
                <Text style={styles.label}>A fazer</Text>
              ) : (
                <Text style={styles.label}>Feito</Text>
              )}
            </View>

            <TouchableOpacity onPress={SendData}>
              <View style={styles.actionButtonModal}>
                <Text style={styles.buttonTextModal}>CADASTRAR HIGIENE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={visibleAllergyRegisterModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Pressable
              onPress={closeAllergyRegisterModal}
              style={{ width: "10%" }}
            >
              <MaterialIcons name="arrow-back" color="#915E36" size={28} />
            </Pressable>
            <Text style={styles.modalText}>Adicionar Alergia</Text>
          </View>
          {showMessageError && <ValidationMessage error_text={messageError} />}
          <View style={styles.modalMain}>
            <TextInput
              style={styles.input_box}
              placeholder="Alergia"
              onChangeText={(name) => setAllergyName(name)}
            ></TextInput>
            {/* <TextInput
              style={styles.input_box}
              placeholder="Gravidade"
              onChangeText={(date) => setAllergyRisk(date)}
            ></TextInput> */}
            <View style={styles.picker}>
              <Picker
                selectedValue={allergyRisk}
                style={styles.pickCategory}
                onValueChange={(itemValue) => setAllergyRisk(itemValue)}
              >
                <Picker.Item value={RiskEnum.LOW} label="Baixo" />
                <Picker.Item value={RiskEnum.MODERATE} label="Moderado" />
                <Picker.Item value={RiskEnum.HIGH} label="Alto" />
              </Picker>
            </View>
            <TouchableOpacity onPress={SendData}>
              <View style={styles.actionButtonModal}>
                <Text style={styles.buttonTextModal}>CADASTRAR ALERGIA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={visibleVaccineOptionsModal}>
        <View style={styles.modalOptionsContainer}>
          <View style={styles.modalOptionsHeader}>
            <Pressable
              onPress={closeVaccineOptionsModal}
              style={{ width: "10%" }}
            >
              <MaterialIcons name="arrow-back" color="#915E36" size={28} />
            </Pressable>
            <Text style={styles.modalText}>Deletar Vacina</Text>
          </View>
          {/* <View style={styles.modalMain}>
            <TextInput
              style={styles.input_box}
              placeholder="Nome"
              onChangeText={(name) => setVaccineName(name)}
            ></TextInput>
            <TextInput
              style={styles.input_box}
              placeholder="Data (yy-mm-dd)"
              onChangeText={(date) =>
                setVaccineDate(new Date(date + "T23:59:59"))
              }
            ></TextInput>
            <TextInput
              style={styles.input_box}
              placeholder="Local"
              onChangeText={(place) => setVaccinePlace(place)}
            ></TextInput>
            <View style={styles.check_box_container}>
              <Switch
                trackColor={{ false: alerta, true: sucesso }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleVaccineSwitch}
                value={isVaccineTaken}
              />
              {isVaccineTaken == false ? (
                <Text style={styles.label}>Não tomada</Text>
              ) : (
                <Text style={styles.label}>Tomada</Text>
              )}
            </View>
            <TouchableOpacity onPress={SendData}>
              <View style={styles.actionButtonModal}>
                <Text style={styles.buttonTextModal}>CADASTRAR VACINA</Text>
              </View>
            </TouchableOpacity>
          </View> */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: "10%",
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
    width: 300,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#7B4D28",
    color: "#7B4D28",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "500",
    color: "#7B4D28",
  },

  // header: {
  //   textAlign: "flex-start",
  // },

  // header_text: {
  //   fontSize: 30,
  //   fontWeight: "bold",
  // },

  editButton: {
    width: 200,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: secondary_v2,
    color: secondary,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 30,
  },
  editButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: secondary,
  },

  buttonTextModal: {
    fontSize: 20,
    fontWeight: "bold",
    color: modalText,
  },

  divisor: {
    width: 200,
    height: 1,
    backgroundColor: "#93A5B1",
    opacity: 0.3,
  },
  modalContainer: {
    width: "90%",
    height: "85%",
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  modalHeader: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  modalMain: {
    flex: 10,
    marginHorizontal: 15,
  },

  modalText: {
    width: "80%",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 25,
    color: modalText,
  },

  actionButtonModal: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#7B4D28",
    color: "#7B4D28",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },

  input_box: {
    height: 57,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#DCDCDC",
    borderRadius: 6,
    opacity: 0.5,
    fontSize: 18,
    borderColor: "#fff",
  },

  check_box_container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  label: {
    margin: 10,
    fontSize: 20,
    color: modalText,
    fontWeight: "bold",
  },

  checkbox: {
    alignSelf: "flex-start",
    margin: 10,
    width: 30,
    height: 30,
  },

  button: {
    alignItems: "center",
    flex: 1.5,
  },

  picker: {
    borderRadius: 10,
    overflow: "hidden",
    opacity: 0.5,
    backgroundColor: inputBackground,
    marginBottom: 20,
    marginTop: 20,
  },

  pickCategory: {},

  modalOptionsContainer: {
    width: "90%",
    height: "85%",
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  modalOptionsHeader: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
});

export default PetDetails;
