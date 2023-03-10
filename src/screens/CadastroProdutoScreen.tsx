import { Image, TouchableOpacity, Text, TextInput, View } from "react-native";
import styles from "../styles/cadastroProdutoStyles";
import { useState } from "react";
import CadastroItemService from "../services/ItemService";
import CadastroItem from "../use_cases/RegisterItemUC";
import {
  SetImage,
  result,
} from "../components/PetStoreComponents/SetImage/SetImage";
import { Picker } from "@react-native-picker/picker";
import { Buffer } from "buffer";
import { fromByteArray } from "base64-js";
import { QuantButton } from "../components/PetStoreComponents/QuantButton/QuantButton";
import { ScrollView } from "react-native-gesture-handler";
import { id_comp } from "./LoginScreen";

var cadastroItem = new CadastroItem(new CadastroItemService());

const image = {
  test: require("../../assets/store_test.png"),
};

export default function CadastroProdutoScreen() {
  const [title, setTitle] = useState("Teste");
  const companyId = id_comp
  const [description, setDescription] = useState("teste");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Consultas");
  const [hasQuantity, setHasQuantity] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Acessórios");
  const [quantity, setQuantity] = useState(10);
  const data = [
    { key: "Acessórios", value: "Acessorios" },
    { key: "Banho e Tosa", value: "BanhoETosa" },
    { key: "Consultas", value: "Consultas" },
    { key: "Padrinhos", value: "Padrinhos" },
    { key: "Alimentação", value: "Alimentação" },
    { key: "Exames", value: "Exames" },
    { key: "Adestramento", value: "Adestramento" },
  ];

  async function SendData() {
    const source = {
      uri: result.assets[0].uri,
      type: `test/${result.assets[0].uri.split(".")[1]}`,
      name: `test.${result.assets[0].uri.split(".")[1]}`,
    };

    const image_upl = await cadastroItem.uploadImg(source);
    const image = image_upl.toString();

    await cadastroItem.execute({companyId, title, description, price, category, quantity, image});
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
    setSelectedCategory(itemValue);
    setCategory(itemValue);
  }

  function Pressed() {
    console.log(title);
    console.log(description);
    console.log(price);
    console.log(category);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Cadastrar Produto</Text>
        <SetImage />
      </View>

      <View style={styles.middleScreen}>
        <TextInput
          style={styles.input_box}
          placeholder="Título"
          onChangeText={(text) => setTitle(text)}
        ></TextInput>

        <TextInput
          style={styles.input_box_desc}
          placeholder="Descrição"
          onChangeText={(text) => setDescription(text)}
        ></TextInput>

        <TextInput
          style={styles.input_box}
          placeholder="Preço (R$)"
          onChangeText={(text) => setPrice(Number(text))}
        ></TextInput>

        <View style={styles.picker}>
          <Picker
            selectedValue={selectedCategory}
            style={styles.pickCategory}
            onValueChange={(itemValue) => CategoryChange(itemValue)}
          >
            <Picker.Item value="Acessorios" label="Acessórios" />
            <Picker.Item value="BanhoETosa" label="Banho e Tosa" />
            <Picker.Item value="Consultas" label="Consultas" />
            <Picker.Item value="Alimentacao" label="Alimentação" />
            <Picker.Item value="Exames" label="Exames" />
            <Picker.Item value="Adestramento" label="Adestramento" />
          </Picker>
        </View>

        {hasQuantity && (
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantidade</Text>
            <QuantButton
              quantity={quantity}
              increment={Increment}
              decrement={Decrement}
            />
          </View>
        )}
        <TouchableOpacity style={styles.accessingButton} onPress={SendData}>
          <Text style={styles.gettingText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
