import {
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  VirtualizedList,
} from "react-native";
import styles from "../styles/companyHomeStyles";
import { useState } from "react";
import CadastroItemService from "../services/ItemService";
import CadastroItem from "../use_cases/RegisterItemUC";
import { TitleScreenComp } from "../components/TitleScreen/TitleScreenComp";
import { CardUser } from "../components/Cards/CardUser/CardUser";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import axios from "axios";
import { ip } from "../entities/ip";
import { FetchAll } from "../use_cases/item/Fetchall";
import ItemService from "../services/ItemService";
import { Item } from "../entities/item";

var cadastroItem = new CadastroItem(new CadastroItemService());

const images = {
  heart: require("../../assets/petstoreitems/heart.png"),
  drop: require("../../assets/petstoreitems/drop.png"),
  medical: require("../../assets/petstoreitems/medical.png"),
  home: require("../../assets/petstoreitems/home.png"),
  needle: require("../../assets/petstoreitems/needle.png"),
  food: require("../../assets/petstoreitems/food.png"),
  pet: require("../../assets/petstoreitems/pet.png"),

  fulano: require("../../assets/testimages/fulano.png"),
  miss_pet: require("../../assets/testimages/miss_pet.png"),
  petz: require("../../assets/testimages/petz.png"),
};

export default function CadastroProdutoScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>();

  const fetchAll = new FetchAll(new ItemService());

  useEffect(() => {

    async function fetch() {
      const result = await fetchAll.execute(
        `http://${ip}:3333//companies/6409f16c60e618dd9cf39457/items`
      );
      setItems(result);
    }

    fetch();
  })

  function getItemCount(data: Item[]) {
    return data.length;
  }

  function getItem(data: Item[], index: number) {
    return data[index];
  }


  function renderCard(item: Item) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ItemUserScreen");
        }}
      >
        <CardUser key={item._id} item={item} companyName={"Teste"} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <TitleScreenComp title="Meus Produtos" />
      {items !== undefined ? (
        <VirtualizedList
          data={items}
          renderItem={({ item }) => renderCard(item)}
          keyExtractor={(item) => item._id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      ) : (
        <Text style={styles.loading}>Carregando items...</Text>
      )}
      <TouchableOpacity
        style={styles.accessingButton}
        onPress={() => {
          navigation.navigate("CadastroProdutoScreen");
        }}
      >
        <Text style={styles.gettingText}>ADICIONAR PRODUTO</Text>
      </TouchableOpacity>
    </View>
  );
}
