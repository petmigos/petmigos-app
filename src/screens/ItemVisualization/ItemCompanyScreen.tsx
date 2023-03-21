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
import { Item } from "../../entities/item";
import ItemService from "../../services/ItemService";
import { id_comp } from "../LoginScreen";
import { Delete } from "../../use_cases/item/Delete";
import { FindByIdAndCompany } from "../../use_cases/item/FindByIdAndCompany";

const image = {
  image: require("../../../assets/store_test.png"),
};

export default function ItemUserScreen({ route, navigation  }) {
  // variable saving an instance of delete
  // to delete, use "await removeItem.execute(<id>)"
  const removeItem = new Delete(new ItemService());
  const {itemId} = route.params;
  console.log("Item ID: " + itemId);
  const [title, setTitle] = useState("Teste");
  const [description, setDescription] = useState("Teste");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("assets/icon.png");

  const findByIdAndCompany = new FindByIdAndCompany(new ItemService());

  useEffect(() => {
    findByIdAndCompany.execute(id_comp, itemId).then((data) => {
      setTitle(data.title);
      setDescription(data.description);
      setImage(data.image);
      setQuantity(data.quantity);
      setPrice(data.price);
    });
  });

  function DeleteItem () {
    removeItem.execute(itemId);
    navigation.goBack();
  };

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
      <TouchableOpacity style={styles.imageButton}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.tituloItem}>{title}</Text>
        <Text style={styles.informacoes}>Informações</Text>
        <Text style={styles.preco}>R$ {price}</Text>
        <Text style={styles.descricao}>{description}</Text>
      </View>
      <View style={styles.buyButtons}>
        <TouchableOpacity
          style={styles.accessingButtonEdit}
          onPress={() => {
            navigation.navigate("EditarProdutoScreen", {
              itemId: itemId,
            });
          }}
        >
          <Text style={styles.gettingTextEdit}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={DeleteItem} style={styles.accessingButtonRemove}>
          <Text style={styles.gettingTextRemove}>Remover Item</Text>
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
    flex: 4,
    backgroundColor: superficie,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 500,
    width: 400,
    resizeMode: "contain",
  },

  info: {
    flex: 4,
    backgroundColor: background,
  },

  tituloItem: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 30,
    fontWeight: "bold",
  },

  informacoes: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },

  preco: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 20,
  },

  descricao: {
    textAlign: "justify",
    fontSize: 20,
    marginLeft: 20,
  },

  buyButtons: {
    flex: 3,
    marginRight: 20,
    marginLeft: 20,
  },

  accessingButtonEdit: {
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

  accessingButtonRemove: {
    backgroundColor: erro,
    height: 56,
    // fontFamily: 'Ubuntu-Bold',
    fontStyle: "normal",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    borderRadius: 8,
    resizeMode: "contain",
  },

  gettingTextEdit: {
    fontSize: 18,
    fontWeight: "bold",
    top: 15,
    color: "#FFFFFF",
  },

  gettingTextRemove: {
    fontSize: 18,
    fontWeight: "bold",
    top: 15,
    color: background,
  },
});
