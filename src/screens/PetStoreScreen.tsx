import { View, Text, SafeAreaView, FlatList, ImageSourcePropType, TouchableOpacity, VirtualizedList } from "react-native";
import styles from "../styles/petStoreStyles";
import { TitleScreenComp } from "../components/TitleScreen/TitleScreenComp";
import { PetStoreItem } from "../components/PetStoreComponents/PetStoreCategory/PetStoreItem";
import { BottomButton } from "../components/BottomButton/BottomButton";
import { CardUser } from "../components/Cards/CardUser/CardUser";
import { PadrinhoAds } from "../components/PetStoreComponents/PadrinhoAds/PadrinhoAds";
import { ScrollView } from "react-native-gesture-handler";
import { Line } from "../components/Line/Line";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

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

type ItemData = {
  id: string;
  name: string;
  furnisher: string;
  price: Float;
  categoryImage: ImageSourcePropType;
  mainImage: ImageSourcePropType;
};

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Banho e tosa",
    furnisher: "Miss Pet",
    price: 56.76,
    categoryImage: images.drop,
    mainImage: images.miss_pet,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6b",
    name: "Ração Pedigree 30kg",
    furnisher: "Petz",
    price: 56.76,
    categoryImage: images.food,
    mainImage: images.petz,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
    name: "Banho e tosa",
    furnisher: "Miss Pet",
    price: 56.76,
    categoryImage: images.drop,
    mainImage: images.fulano,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6d",
    name: "Ração Pedigree 30kg",
    furnisher: "Petz",
    price: 56.76,
    categoryImage: images.food,
    mainImage: images.petz,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28be",
    name: "Banho e tosa",
    furnisher: "Miss Pet",
    price: 56.76,
    categoryImage: images.drop,
    mainImage: images.fulano,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6f",
    name: "Ração Pedigree 30kg",
    furnisher: "Petz",
    price: 56.76,
    categoryImage: images.food,
    mainImage: images.petz,
  },
];



export default function PetStoreScreen() {

	function getItemCount (){
		return DATA.length;
	};

	function getItem(data, index) {
		return {
			id: Math.random().toString(12).substring(0),
			name: data[index].name,
			furnisher: data[index].furnisher,
			price: data[index].price,
			categoryImage: data[index].categoryImage,
			mainImage: data[index].mainImage,
    };
	}
	

	function Test(){
		console.log("Teste");
	}

	function renderCard({ item }: { item: ItemData }) {
		return (
			<TouchableOpacity  onPress={Test}>
				<CardUser
					key={item.id}
					item={item} />
			</TouchableOpacity>
		);
	};

	return (
    <ScrollView style={styles.container}>
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
        <PadrinhoAds />
      </View>

      <Line />
      <BottomButton title="Lojas" />

      <View>
        <Text style={styles.bestSellersText}>Itens mais procurados</Text>

        <VirtualizedList
          data={DATA}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </ScrollView>
  );
}
