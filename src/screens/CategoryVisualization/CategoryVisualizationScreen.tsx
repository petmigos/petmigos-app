import {
  TouchableOpacity,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import styles from "../../styles/companyHomeStyles";
import { useState } from "react";
import { TitleScreenComp } from "../../components/TitleScreen/TitleScreenComp";
import { CardCompany } from "../../components/Cards/CardCompany/CardCompany";
import { useIsFocused} from "@react-navigation/native";
import { useEffect } from "react";
import ItemService from "../../services/ItemService";
import { Item } from "../../entities/item";
import { ScrollView } from "react-native-gesture-handler";
import { FetchAll } from "../../use_cases/item/FetchAll";
import { CardUser } from "../../components/Cards/CardUser/CardUser";



export default function CategoryVisualizationScreen({ route, navigation }) {
  const { category } = route.params;
  const isFocused = useIsFocused();
  const [items, setItems] = useState<Item[]>();

  const fetchAll = new FetchAll(new ItemService());

  useEffect(() => {
    if (isFocused) {
      fetchAll.execute().then((data) => {
        data = data.filter((item) => item.category == category)
        setItems(data);
      });
    }
  }, [isFocused]);

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
          navigation.navigate("ItemUserScreen", {
            itemId: item._id,
          });
        }}
      >
        <CardUser key={item._id} item={item} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <TitleScreenComp title={category} />
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
    </View>
  );
}
