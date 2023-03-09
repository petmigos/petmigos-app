import { Image, TouchableOpacity, Text, TextInput, View, VirtualizedList } from "react-native";
import styles from "../styles/companyHomeStyles";
import { useState } from "react";
import CadastroItemService from "../services/CadastroItemService";
import CadastroItem from "../use_cases/RegisterItemUC";
import { TitleScreenComp } from "../components/TitleScreen/TitleScreenComp";
import { CardUser, ItemData } from "../components/Cards/CardUser/CardUser";
import { useNavigation } from "@react-navigation/native";
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


export default function CompanyHomeScreen() {

	const navigation = useNavigation();

	function getItemCount() {
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
	};

	function Test() {
		console.log("Teste");
	}

	function renderCard(item: ItemData ) {
		return (
		<TouchableOpacity
			onPress={() => {
			navigation.navigate("ItemUserScreen", {
				itemId: item.id,
				test: "test",
			});
			}}
		>
			<CardUser key={item.id} item={item} />
		</TouchableOpacity>
		);
	}

	return (
    <View style={styles.container}>
      <TitleScreenComp title="Meus Produtos" />
      <VirtualizedList
        data={DATA}
        renderItem={({item}) => renderCard(item)}
        keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
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
