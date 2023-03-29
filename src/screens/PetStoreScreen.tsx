import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageSourcePropType,
  TouchableOpacity,
  VirtualizedList,
  StatusBar,
} from "react-native";
import styles from "../styles/petStoreStyles";
import { TitleScreenComp } from "../components/TitleScreen/TitleScreenComp";
import { PetStoreItem } from "../components/PetStoreComponents/PetStoreCategory/PetStoreItem";
import { BottomButton } from "../components/BottomButton/BottomButton";
import { CardUser } from "../components/Cards/CardUser/CardUser";
import { PadrinhoAds } from "../components/PetStoreComponents/PadrinhoAds/PadrinhoAds";
import { ScrollView } from "react-native-gesture-handler";
import { Line } from "../components/Line/Line";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import ItemService from "../services/ItemService";
import { useEffect, useState } from "react";
import { Item } from "../entities/item";
import { FetchAll } from "../use_cases/item/FetchAll";

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

export default function PetStoreScreen(props) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [items, setItems] = useState<Item[]>();

  const fetchAll = new FetchAll(new ItemService());

  useEffect(() => {
    if (isFocused) {
      fetchAll.execute().then((data) => {
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
          navigation.navigate("ItemUserScreen", {
            item: item,
            storeId: item.companyId
          });
        }}
      >
        <CardUser key={item._id} item={item} />
      </TouchableOpacity>
    );
  }

  function goToStore() {
    navigation.navigate("StoreStack");
  }

  function Test() {
    navigation.navigate("StoreStack");
  }

  return (
    <ScrollView style={styles.container}>
      <TitleScreenComp title="PetStore" />
      <View style={styles.topContainer}>
        <PetStoreItem
          onPress={() => {
            navigation.navigate("CategoryVisualizationScreen", {
              category: "Acessórios",
            });
          }}
          title="Acessórios"
          image={images.heart}
          size={{ width: 23, height: 20 }}
        />
        <PetStoreItem
          onPress={() => {
            navigation.navigate("CategoryVisualizationScreen", {
              category: "Banho e Tosa",
            });
          }}
          title="Banho e Tosa"
          image={images.drop}
          size={{ width: 18, height: 26 }}
        />
        <PetStoreItem
          onPress={() => {
            navigation.navigate("CategoryVisualizationScreen", {
              category: "Consultas",
            });
          }}
          title="Consultas"
          image={images.medical}
          size={{ width: 24, height: 26 }}
        />
        <PetStoreItem
          onPress={() => {
            navigation.navigate("CategoryVisualizationScreen", {
              category: "Alimentação",
            });
          }}
          title="Alimentação"
          image={images.food}
          size={{ width: 23, height: 24 }}
        />
        <PetStoreItem
          onPress={() => {
            navigation.navigate("CategoryVisualizationScreen", {
              category: "Exames",
            });
          }}
          title="Exames"
          image={images.needle}
          size={{ width: 27, height: 27 }}
        />
        <PetStoreItem
          onPress={() => {
            navigation.navigate("CategoryVisualizationScreen", {
              category: "Adestramento",
            });
          }}
          title="Adestramento"
          image={images.pet}
          size={{ width: 25, height: 30 }}
        />
      </View>

      <View style={styles.ads}>
        <PadrinhoAds onPress={Test} />
      </View>

      <Line />
      <BottomButton title="Lojas" function={goToStore} />

      <View>
        <Text style={styles.bestSellersText}>Itens mais procurados</Text>
        {items !== undefined ? (
          <VirtualizedList
            data={items}
            renderItem={({ item }) => renderCard(item)}
            keyExtractor={(item) => item._id}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        ) : (
          <Text>Carregando items...</Text>
        )}
      </View>
    </ScrollView>
  );
}
