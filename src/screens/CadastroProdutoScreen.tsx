import { Image, TouchableOpacity, Text, TextInput, View } from "react-native";
import styles from "../styles/cadastroProdutoStyles";
import { useState } from "react";
import CadastroItemService from "../services/CadastroItemService";
import CadastroItem from "../use_cases/RegisterItemUC";
import { SetImage } from "../components/PetStoreComponents/SetImage/SetImage";
import { Picker } from "@react-native-picker/picker";
import { result } from "../components/SetImage/SetImage";
import { Buffer } from "buffer";
import { fromByteArray } from "base64-js";
import { QuantButton } from "../components/PetStoreComponents/QuantButton/QuantButton";

var cadastroItem = new CadastroItem(new CadastroItemService());

const image = {
  test: require("../../assets/store_test.png"),
};

export default function CadastroProdutoScreen() {
  let valid_format;
  let original_format;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Petshop");
  const [quantity, setQuantity] = useState(0);
  const data = [
    { key: "Acessórios", value: "Acessórios" },
    { key: "Banho e Tosa", value: "Banho e Tosa" },
    { key: "Consultas", value: "Consultas" },
    { key: "Padrinhos", value: "Padrinhos" },
    { key: "Alimentação", value: "Alimentação" },
    { key: "Exames", value: "Exames" },
    { key: "Adestramento", value: "Adestramento" },
  ];

  function uriToBase64(uri: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          const base64data = reader.result.toString().split(",")[1];
          resolve(base64data);
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = function (error) {
        reject(error);
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri);
      xhr.send();
    });
  }

  function toUrlSafeBase64(base64String: string): string {
    const bytes = fromByteArray(Buffer.from(base64String, "base64"));
    return bytes.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }

  function fromUrlSafeBase64(encoded: string): string {
    const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const buffer = Buffer.from(base64, "base64");
    return buffer.toString("utf-8");
  }

  async function SendData() {
    const base64Image = await uriToBase64(result.assets[0].uri);
    original_format = base64Image;
    valid_format = toUrlSafeBase64(base64Image);
    await cadastroItem.execute(
      title,
      description,
      price,
      category,
      valid_format,
      quantity
    );
  }

  function Increment() {
    setQuantity(quantity + 1);
  }

  function Decrement() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  function Pressed() {
    console.log(title);
    console.log(description);
    console.log(price);
    console.log(category);
  }

  return (
    <View style={styles.container}>
		<View style={styles.topContainer}>
			<Text style={styles.topText}>Cadastrar Produto</Text>
				<SetImage image={image.test} />
			</View>

			<View style={styles.middleScreen}>
				<TextInput
				style={styles.input_box}
				placeholder="Título"
				onChangeText={(text) => setTitle(text)}
				></TextInput>

				<TextInput
				style={styles.input_box}
				placeholder="Descrição"
				onChangeText={(text) => setDescription(text)}
				></TextInput>

				<TextInput
				style={styles.input_box}
				placeholder="Preço"
				onChangeText={(text) => setPrice(Number(text))}
				></TextInput>

				<View style={styles.picker}>
				<Picker
					selectedValue={selectedCategory}
					style={styles.pickCategory}
					onValueChange={(itemValue) => setCategory(itemValue)}
				>
					<Picker.Item label="Petshop" value="petshop" />
					<Picker.Item label="Veterinário" value="veterinario" />
					<Picker.Item label="Outros" value="outros" />
				</Picker>
				</View>

				<View style={styles.quantity}>
					<Text style={styles.quantityText}>Quantidade</Text>
					<QuantButton
						quantity={quantity}
						increment={Increment}
						decrement={Decrement}
					/>
				</View>
				<Image
				source={{ uri: `data:image/png;base64,${original_format}` }}
				style={{ width: 80, height: 100 }}
				/>
				<TouchableOpacity style={styles.accessingButton} onPress={SendData}>
					
				</TouchableOpacity>
		</View>
	</View>
	);
	}
