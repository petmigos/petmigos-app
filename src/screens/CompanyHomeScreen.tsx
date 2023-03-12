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
import { CardUser} from "../components/Cards/CardUser/CardUser";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FetchAll } from "../use_cases/item/Fetchall";
import ItemService from "../services/ItemService";
import { Item } from "../entities/item";
import { ScrollView } from "react-native-gesture-handler";
import { id_comp } from "./LoginScreen";

var cadastroItem = new CadastroItem(new CadastroItemService());

export default function CadastroProdutoScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>();

  const fetchAll = new FetchAll(new ItemService());

  useEffect(() => {
    fetchAll.execute(id_comp).then((data) => {
      setItems(data);
    });
  }, []);

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
          navigation.navigate("ItemCompanyScreen", {
            itemId: item._id,
            companyId: id_comp,
          });
        }}
      >
        <CardUser 
          key={item._id} 
          item={item} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <TitleScreenComp title="Meus Produtos" />
      <ScrollView style={styles.scroll}>
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
      </ScrollView>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.accessingButton}
          onPress={() => {
            navigation.navigate("CadastroProdutoScreen");
          }}
        >
          <Text style={styles.gettingText}>ADICIONAR PRODUTO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
