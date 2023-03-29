import React from "react";
import { TouchableOpacity, Text, TextInput, View, StyleSheet, FlatList, Dimensions, Button } from "react-native";
import { background, erro, inputBackground, primary } from "../../styles/colors";
import { useState } from "react";
import {
  SetImage,
  result
} from "../../components/PetStoreComponents/SetImage/SetImage";
import { Picker } from "@react-native-picker/picker";
import { ButtonGroup } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { id_user } from "../Auth/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { ValidationMessage } from "../../components/ValidationMessages/ValidationMessage";
import DateField from 'react-native-datefield';
import { CreatePet } from "../../use_cases/pets/Create";
import { PetService } from "../../services/petService";

var cadastroPet = new CreatePet(new PetService());


const RegisterPets: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const ownerId = id_user;
  const [showMessageError, setShowMessageError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [type, setType] = useState("Acessorios");
  const [birthday, setBirthday] = useState(new Date())
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [gender, setGender] = useState("Male");

  
  function petGender() {
      
    if (selectedIndex == 0)   
    {
      setGender("Male")
    }

    else
    {
      setGender("Female")
    }

  }

  async function SendData() {

    try {
      const source = {
        uri: result.assets[0].uri,
        type: `test/${result.assets[0].uri.split(".")[1]}`,
        name: `test.${result.assets[0].uri.split(".")[1]}`,
      };

      const image_upl = await cadastroPet.uploadImg(source);
      const image = image_upl.toString();
      petGender();
    
      await cadastroPet.execute({
        ownerId, name, type, birthday, gender, image,
      });
      setShowMessageError(false);

      navigation.goBack();
    } catch (error: any) {
      setShowMessageError(true);
      setMessageError(error.message);
    }
  }

  function TypeChange(itemValue: string) {
    setType(itemValue);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <SetImage image="../../assets/user_icon.png" />
        <Text style={styles.topText}>Informações do Pet</Text>
      </View>

      {showMessageError && <ValidationMessage error_text={messageError} />}

      <View style={styles.middleScreen}>
        <TextInput
          style={styles.input_box}
          placeholder="Nome"
          onChangeText={(text) => setName(text)}
        ></TextInput>

        <View style={styles.picker}>
          <Picker
            selectedValue={type}
            style={styles.pickCategory}
            onValueChange={(itemValue) => TypeChange(itemValue)}
          >
            <Picker.Item value="Cachorro" label="Cachorro" />
            <Picker.Item value="Gato" label="Gato" />
            <Picker.Item value="Peixe" label="Peixe" />
            <Picker.Item value="Ave" label="Ave" />
            <Picker.Item value="Outro" label="Outro" />
          </Picker>
        </View>

        <Text style={styles.bodyTitle}>Data de Nascimento</Text>

        <DateField
          labelDate="Dia"
          labelMonth="Mês"
          labelYear="Ano"
          styleInput={styles.inputDate}
          onSubmit={(value) => {
            console.log(value), setBirthday(value);
          }}
        />

        <Text style={styles.bodyTitle}>Gênero</Text>

        <ButtonGroup
          selectedButtonStyle={styles.enable}
          buttons={["Macho", "Fêmea"]}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginTop: 40 }}
        />

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => SendData()}
        >
          <Text style={styles.gettingText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },

  topContainer: {
    flex: 1.1,
    backgroundColor: background,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },

  topText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "right",
  },

  bodyTitle: {
    fontSize: 25,
    fontWeight: "bold",
    top: 20,
  },

  middleScreen: {
    flex: 2,
    backgroundColor: background,
    marginHorizontal: 20,
  },

  selectList: {
    margin: 20,
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
  },

  tagContainer: {
    marginVertical: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  input_box_tag: {
    flex: 5,
    height: 50,
    borderWidth: 1,
    backgroundColor: inputBackground,
    padding: 10,
    borderRadius: 6,
    opacity: 0.5,
    fontSize: 18,
    borderColor: "#fff",
  },

  addTagButton: {
    flex: 3,
    height: 50,
    margin: 5,
    backgroundColor: "#E29417",
    fontStyle: "normal",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  addTagText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  input_box_desc: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: inputBackground,
    borderRadius: 6,
    opacity: 0.5,
    fontSize: 18,
    borderColor: "#fff",
    height: 200,
  },

  picker: {
    borderRadius: 10,
    overflow: "hidden",
    opacity: 0.5,
    backgroundColor: inputBackground,
    marginTop: 20,
  },

  pickCategory: {},

  registerButton: {
    backgroundColor: "#915E36",
    height: 56,
    // fontFamily: 'Ubuntu-Bold',
    fontStyle: "normal",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 60,
    borderRadius: 5,
    resizeMode: "contain",
  },

  gettingText: {
    fontSize: 18,
    fontWeight: "bold",
    top: 15,
    color: "#FFFFFF",
  },

  enable: {
    backgroundColor: primary,
  },

  tagText: {
    color: "#dba87f",
    top: 9,
  },

  listContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    bottom: 10,
  },

  item: {
    width: 110,
    height: 35,
    backgroundColor: "#fff",
    borderColor: "#dba87f",
    borderWidth: 2,
    borderRadius: 7,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  deleteButton: {
    marginLeft: 90,
    marginTop: 5,
    color: "gray",
    bottom: 20,
  },

  inputDate: {
    width: "30%",
    borderRadius: 8,
    borderColor: "#cacaca",
    borderWidth: 1,
    backgroundColor: inputBackground,
    marginTop: 40,
  },
});

export default RegisterPets;
