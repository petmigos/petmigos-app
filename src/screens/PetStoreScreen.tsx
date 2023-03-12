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
import { useNavigation } from "@react-navigation/native";
import ItemService from "../services/ItemService";
import { FetchAll } from "../use_cases/item/Fetchall";
import { useEffect, useState } from "react";
import { Item } from "../entities/item";

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

export default function PetStoreScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>();

  const fetchAll = new FetchAll(new ItemService());

  useEffect(() => {
    fetchAll.execute().then((data) => {
      setItems(data);
    });
  }, []);

  function getItemCount(data: Item[]) {
    return data.length;
  }

  function getItem(data: Item[], index: number) {
    return data[index];
  }
  function renderCard(item: Item ) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ItemUserScreen", {
            itemId: item.id,
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
          onPress={Test}
          title="Acessórios"
          image={images.heart}
          size={{ width: 23, height: 20 }}
        />
        <PetStoreItem
          onPress={Test}
          title="Banho e Tosa"
          image={images.drop}
          size={{ width: 18, height: 26 }}
        />
        <PetStoreItem
          onPress={Test}
          title="Consultas"
          image={images.medical}
          size={{ width: 24, height: 26 }}
        />
        <PetStoreItem
          onPress={Test}
          title="Padrinhos"
          image={images.home}
          size={{ width: 23, height: 23 }}
        />
        <PetStoreItem
          onPress={Test}
          title="Alimentação"
          image={images.food}
          size={{ width: 23, height: 24 }}
        />
        <PetStoreItem
          onPress={Test}
          title="Exames"
          image={images.needle}
          size={{ width: 27, height: 27 }}
        />
        <PetStoreItem
          onPress={Test}
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

        <VirtualizedList
          data={items}
          renderItem={({ item }) => renderCard(item)}
          keyExtractor={(item) => item._id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </ScrollView>
  );
}
