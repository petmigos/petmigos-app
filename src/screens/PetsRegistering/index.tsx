import React from "react";
import { TouchableOpacity, Text, TextInput, View, StyleSheet, FlatList, Dimensions } from "react-native";
import { background, inputBackground, primary } from "../../styles/colors";
import { useState } from "react";
import CadastroItemService from "../../services/ItemService";
import CadastroItem from "../../use_cases/RegisterItemUC";
import {
  SetImage,
  result,
} from "../../components/PetStoreComponents/SetImage/SetImage";
import { Picker } from "@react-native-picker/picker";
import { ButtonGroup } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { id_comp } from "../Auth/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { ValidationMessage } from "../../components/ValidationMessages/ValidationMessage";

var cadastroItem = new CadastroItem(new CadastroItemService());

const image = {
  test: require("../../../assets/store_test.png"),
};

const ITEM_WIDTH = Dimensions.get('window').width / 3 - 10;

const RegisterPets: React.FC = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const companyId = id_comp;
  const [showMessageError, setShowMessageError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Acessorios");
  const [hasQuantity, setHasQuantity] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tags = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
    { id: 11, name: 'Item 11' },
    { id: 12, name: 'Item 12' },
  ];
  
  
  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  async function SendData() {
    try {
      const source = {
        uri: result.assets[0].uri,
        type: `test/${result.assets[0].uri.split(".")[1]}`,
        name: `test.${result.assets[0].uri.split(".")[1]}`,
      };

      const image_upl = await cadastroItem.uploadImg(source);
      const image = image_upl.toString();

      await cadastroItem.execute({
        companyId,
        title,
        description,
        price,
        category,
        quantity,
        image,
      });
      setShowMessageError(false);

      navigation.goBack();
    } catch (error: any) {
      setShowMessageError(true);
      setMessageError(error.message);
    }
  }

  function CategoryChange(itemValue: string) {
    if (!["Acessorios", "Alimentacao"].some((x) => x == itemValue)) {
      setHasQuantity(false);
      setQuantity(0);
    } else {
      setHasQuantity(true);
    }
    setCategory(itemValue);
  }

  function AddTag() {

    tags.push()
    
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <SetImage image="../../assets/user_icon.png"/>
        <Text style={styles.topText}>Informações</Text>
      </View>

      {showMessageError && <ValidationMessage error_text={messageError} />}

      <View style={styles.middleScreen}>
        <TextInput
          style={styles.input_box}
          placeholder="Nome"
          onChangeText={(text) => setTitle(text)}
        ></TextInput>
    
        <View style={styles.picker}>
          <Picker
            selectedValue={category}
            style={styles.pickCategory}
            onValueChange={(itemValue) => CategoryChange(itemValue)}
          >
            <Picker.Item value="Cachorro" label="Cachorro" />
            <Picker.Item value="Gato" label="Gato" />
            <Picker.Item value="Peixe" label="Peixe" />
            <Picker.Item value="Ave" label="Ave" />
            <Picker.Item value="Outro" label="Outro" />
          </Picker>
        </View>

        <TextInput
          style={styles.input_box}
          placeholder="Data de Nascimento"
          onChangeText={(text) => setPrice(Number(text))}
        ></TextInput>

        <Text style={styles.bodyTitle}>Gênero</Text>

        <ButtonGroup
          selectedButtonStyle={styles.enable}
          buttons={["Macho", "Fêmea"]}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginTop: 40}}
        />

        <Text style={styles.bodyTitle}>Tags</Text>
        <View style={styles.tagContainer}>
        <TextInput
          style={styles.input_box}
          placeholder="Tag"
          onChangeText={(text) => setTitle(text)}
        ></TextInput>
        <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item}/>}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
        />
        </View>
       
        <TouchableOpacity
          style={styles.accessingButton}
          onPress={() => SendData()}
        >
          <Text style={styles.gettingText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background,
      },
    
      topContainer: {
        flex: 1.1,
        backgroundColor: background,
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
        top: 40,
      },

      topText: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 0,
        top: -30,
        right: 105,
      },

      bodyTitle: {
        fontSize: 25,
        fontWeight: "bold",
        top: 20,
      },
    
      middleScreen: {
        flex: 2,
        backgroundColor: background,
        marginRight: 20,
        marginLeft: 20,
      },
    
      selectList: {
        margin: 20,
      },
    
      input_box: {
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: inputBackground,
        borderRadius: 6,
        opacity: 0.5,
        fontSize: 18,
        borderColor: "#fff",
      },
    
      input_box_desc: {
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: inputBackground,
        borderRadius: 6,
        opacity: 0.5,
        fontSize: 18,
        borderColor: "#fff",
        height: 200,
      },
    
      picker: {
        borderRadius: 10,
        overflow: "hidden",
        opacity: 0.5,
        backgroundColor: inputBackground,
        marginTop: 20,
      },
    
    
      pickCategory: {},
    
      accessingButton: {
        backgroundColor: "#915E36",
        height: 56,
        // fontFamily: 'Ubuntu-Bold',
        fontStyle: "normal",
        alignItems: "center",
        textAlign: "center",
        marginTop: 50,
        marginBottom: 60,
        borderRadius: 5,
        resizeMode: "contain",
      },
    
      gettingText: {
        fontSize: 18,
        fontWeight: "bold",
        top: 15,
        color: "#FFFFFF",
      },

      enable: {
        backgroundColor: primary,
    },

    tagContainer: {
      marginTop: 20,
      marginBottom: 10,
    },

    listContainer: {
      paddingHorizontal: 5,
      paddingVertical: 10,
    },

    item: {
      width: 110,
      height: 35,
      backgroundColor: '#fff',
      borderColor: '#dba87f',
      borderWidth: 2,
      borderRadius: 7,
      marginHorizontal: 5,
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

});

export default RegisterPets;
