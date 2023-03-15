import {
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import CadastroItemService from "../../services/ItemService";
import CadastroItem from "../../use_cases/RegisterItemUC";
import { SetImage } from "../../components/PetStoreComponents/SetImage/SetImage";
import { Picker } from "@react-native-picker/picker";
import { QuantButton } from "../../components/PetStoreComponents/QuantButton/QuantButton";
import * as ImagePicker from "expo-image-picker";
import { background, erro, primary } from "../../styles/colors";
import { superficie } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { FindById } from "../../use_cases/item/FindById";
import ItemService from "../../services/ItemService";

var cadastroItem = new CadastroItem(new CadastroItemService());

const image = {
  image: require("../../../assets/store_test.png"),
};

export default function ItemUserScreen({ route }) {
  const { itemId , companyId} = route.params;
  const [title, setTitle] = useState("Teste");
  const [description, setDescription] = useState("Teste");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("../../../assets/user_icon.png");

  const findById = new FindById(new ItemService());

  useEffect(() => {
    findById.execute(companyId, itemId).then((data) => {
      console.log(companyId, itemId);
      setTitle(data.title);
      setDescription(data.description);
      setImage(data.image);
      setQuantity(data.quantity);
      setPrice(data.price);
    });
  });

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(typeof result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = () => {
    console.log(typeof image);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => {
          pickImage();
          uploadImage();
        }}
      >
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.tituloItem}>{title}</Text>
        <Text style={styles.informacoes}>Informações</Text>
        <Text style={styles.preco}>R$ {price}</Text>
        <Text style={styles.descricao}>Descrição</Text>
      </View>
      <View style={styles.buyButtons}>
        <TouchableOpacity style={styles.accessingButton}>
          <Text style={styles.gettingText}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accessingButton}>
          <Text style={styles.gettingText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },

  imageButton: {
    flex: 2,
    backgroundColor: superficie,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },

  info: {
    flex: 3,
    backgroundColor: background,
    marginLeft: 20,
    marginRight: 20,
  },

  tituloItem: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: "bold",
  },

  informacoes: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },

  preco: {
    fontSize: 40,
    fontWeight: "bold",
  },

  descricao: {
    textAlign: "justify",
  },

  buyButtons: {
    flex: 2,
    marginRight: 20,
    marginLeft: 20,
  },

  accessingButton: {
    backgroundColor: "#915E36",
    height: 56,
    // fontFamily: 'Ubuntu-Bold',
    fontStyle: "normal",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    borderRadius: 8,
    resizeMode: "contain",
  },

  gettingText: {
    fontSize: 18,
    fontWeight: "bold",
    top: 15,
    color: "#FFFFFF",
  },
});
