import { View, Text } from "react-native";
import styles from "../styles/petStoreStyles";
import { TitleScreenComp } from "../components/TitleScreen/TitleScreenComp";
import { PetStoreItem } from "../components/PetStoreComponents/PetStoreCategory/PetStoreItem";
import { Line } from "../components/Line/Line";
import { BottomButton } from "../components/BottomButton/BottomButton";
import { CardUser } from "../components/Cards/CardUser/CardUser";
import { PadrinhoAds } from "../components/PetStoreComponents/PadrinhoAds/PadrinhoAds";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

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

  function goToStores(){
    navigation.navigate("StoreList")
  }

  return (
    <SafeAreaView style={styles.scroll}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50, paddingTop: 24 }}>
        <TitleScreenComp title="PetStore" />
        <View style={styles.topContainer}>
          <PetStoreItem
            title="Acessórios"
            image={images.heart}
            size={{ width: 23, height: 20 }}
          />
          <PetStoreItem
            title="Banho e Tosa"
            image={images.drop}
            size={{ width: 18, height: 26 }}
          />
          <PetStoreItem
            title="Consultas"
            image={images.medical}
            size={{ width: 24, height: 26 }}
          />
          <PetStoreItem
            title="Padrinhos"
            image={images.home}
            size={{ width: 23, height: 23 }}
          />
          <PetStoreItem
            title="Alimentação"
            image={images.food}
            size={{ width: 23, height: 24 }}
          />
          <PetStoreItem
            title="Exames"
            image={images.needle}
            size={{ width: 27, height: 27 }}
          />
          <PetStoreItem
            title="Adestramento"
            image={images.pet}
            size={{ width: 25, height: 30 }}
          />
        </View>
        <View style={styles.ads}>
        <PadrinhoAds/>
        </View>
        <Line/>
        <BottomButton title="Lojas" function={goToStores}/>
        <View>
          <Text style={styles.bestSellersText}>Itens mais procurados</Text>
          <CardUser
            name="Miss Pet"
            category="Banho e tosa"
            price={56.76}
            categoryImage={images.drop}
            mainImage={images.miss_pet}
          />
          <CardUser
            name="Petz"
            category="Ração Pedigree 30kg"
            price={56.76}
            categoryImage={images.food}
            mainImage={images.petz}
          />
          <CardUser
            name="Fulano"
            category="Teste"
            price={56.76}
            categoryImage={images.pet}
            mainImage={images.fulano}
          />
          <CardUser
            name="Carlos"
            category="Teste"
            price={56.76}
            categoryImage={images.pet}
            mainImage={images.fulano}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
