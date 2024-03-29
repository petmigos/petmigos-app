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
import { CardCompany } from "../components/Cards/CardCompany/CardCompany";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FetchAllByCompany } from "../use_cases/item/FetchAllByCompany";
import ItemService from "../services/ItemService";
import { Item } from "../entities/item";
import { ScrollView } from "react-native-gesture-handler";
import { id_comp } from "./LoginScreen";

export default function CadastroProdutoScreen(props) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [items, setItems] = useState<Item[]>();

  const fetchAllByCompany = new FetchAllByCompany(new ItemService());

  useEffect(() => {
    if(isFocused){
      fetchAllByCompany.execute(id_comp).then((data) => {
        setItems(data);
      });
    }
    
  }, [props, isFocused]);

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
          });
        }}
      >
        <CardCompany key={item._id} item={item} />
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
          onPress={async () => {
            navigation.navigate("CadastroProdutoScreen");
          }}
        >
          <Text style={styles.gettingText}>ADICIONAR PRODUTO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
