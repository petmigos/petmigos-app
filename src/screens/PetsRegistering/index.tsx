import { Image, TouchableOpacity, Text, TextInput, View, StyleSheet } from "react-native";
import { background, inputBackground, primary } from "../../styles/colors";
import { useState } from "react";
import CadastroItemService from "../../services/ItemService";
import CadastroItem from "../../use_cases/RegisterItemUC";
import {
  SetImage,
  result,
} from "../../components/PetStoreComponents/SetImage/SetImage";
import { Picker } from "@react-native-picker/picker";
import { ButtonGroup } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { id_comp } from "../Auth/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { ValidationMessage } from "../../components/ValidationMessages/ValidationMessage";

var cadastroItem = new CadastroItem(new CadastroItemService());

const image = {
  test: require("../../../assets/store_test.png"),
};

const RegisterPets: React.FC = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const companyId = id_comp;
  const [showMessageError, setShowMessageError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Acessorios");
  const [hasQuantity, setHasQuantity] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  async function SendData() {
    try {
      const source = {
        uri: result.assets[0].uri,
        type: `test/${result.assets[0].uri.split(".")[1]}`,
        name: `test.${result.assets[0].uri.split(".")[1]}`,
      };

      const image_upl = await cadastroItem.uploadImg(source);
      const image = image_upl.toString();

      await cadastroItem.execute({
        companyId,
        title,
        description,
        price,
        category,
        quantity,
        image,
      });
      setShowMessageError(false);

      navigation.goBack();
    } catch (error: any) {
      setShowMessageError(true);
      setMessageError(error.message);
    }
  }

  function Increment() {
    setQuantity(quantity + 1);
  }

  function Decrement() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  function CategoryChange(itemValue: string) {
    if (!["Acessorios", "Alimentacao"].some((x) => x == itemValue)) {
      setHasQuantity(false);
      setQuantity(0);
    } else {
      setHasQuantity(true);
    }
    setCategory(itemValue);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <SetImage image="../../assets/user_icon.png"/>
        <Text style={styles.topText}>Informações</Text>
      </View>

      {showMessageError && <ValidationMessage error_text={messageError} />}

      <View style={styles.middleScreen}>
        <TextInput
          style={styles.input_box}
          placeholder="Nome"
          onChangeText={(text) => setTitle(text)}
        ></TextInput>

        <View style={styles.picker}>
          <Picker
            selectedValue={category}
            style={styles.pickCategory}
            onValueChange={(itemValue) => CategoryChange(itemValue)}
          >
            <Picker.Item value="Cachorro" label="Cachorro" />
            <Picker.Item value="Gato" label="Gato" />
            <Picker.Item value="Peixe" label="Peixe" />
            <Picker.Item value="Ave" label="Ave" />
            <Picker.Item value="Outro" label="Outro" />
          </Picker>
        </View>

        <TextInput
          style={styles.input_box}
          placeholder="Data de Nascimento"
          onChangeText={(text) => setPrice(Number(text))}
        ></TextInput>

        <Text style={styles.bodyTitle}>Gênero</Text>

        <ButtonGroup
          selectedButtonStyle={styles.enable}
          buttons={["Macho", "Fêmea"]}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginTop: 40}}
        />

        <Text style={styles.bodyTitle}>Tags</Text>

        <TouchableOpacity
          style={styles.accessingButton}
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
        top: 40,
      },

      topText: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 0,
        top: -30,
        right: 105,
      },

      bodyTitle: {
        fontSize: 25,
        fontWeight: "bold",
        top: 20,
      },
    
      middleScreen: {
        flex: 2,
        backgroundColor: background,
        marginRight: 20,
        marginLeft: 20,
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
    
      quantity: {
        flexDirection: "row",
        backgroundColor: background,
        marginRight: 20,
        marginLeft: 20,
      },
    
      quantityText: {
        fontWeight: "600",
        fontSize: 17,
        marginRight: 20,
      },
    
      pickCategory: {},
    
      accessingButton: {
        backgroundColor: "#915E36",
        height: 56,
        // fontFamily: 'Ubuntu-Bold',
        fontStyle: "normal",
        alignItems: "center",
        textAlign: "center",
        marginTop: 50,
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

});

export default RegisterPets;
