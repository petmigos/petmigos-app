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
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Acessorios");
  const [quantity, setQuantity] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("")

  const handleAddItem = (tag: string) => {

    if (tag !== "")
    {
      const newTag = { id: tags.length + 1, name: `${tag}` };
      setTags([...tags, newTag]);
    }

    console.log(tags);

  };

  const handleTagDelete = (tagToDelete) => {
    const newTags = tags.filter(tag => tag !== tagToDelete);
    setTags(newTags);
  }
  
  
  
  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={() => handleTagDelete(item)}>
          <Text style={styles.deleteButton}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  async function SendData() {
    console.log("enviou para o banco");
  }

  function CategoryChange(itemValue: string) {
    setCategory(itemValue);
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
          style={styles.input_box_tag}
          placeholder="Tag"
          onChangeText={(text) => setTag(text)}
        ></TextInput>
        <TouchableOpacity
          style={styles.addTagButton}
          onPress={() => handleAddItem(tag)}
        >
          <Text style={styles.addTagText}>Adicionar</Text>
        </TouchableOpacity>
        <FlatList
        data={tags}
        renderItem={({ item }) => <ListItem item={item}/>}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
        />
        </View>

        <TouchableOpacity
          style={styles.registerButton}
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

      input_box_tag:{
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: inputBackground,
        borderRadius: 6,
        opacity: 0.5,
        fontSize: 18,
        borderColor: "#fff",
        width: 200,
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
    
      registerButton: {
        backgroundColor: "#915E36",
        height: 56,
        // fontFamily: 'Ubuntu-Bold',
        fontStyle: "normal",
        alignItems: "center",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 60,
        borderRadius: 5,
        resizeMode: "contain",
      },

      addTagButton: {
        backgroundColor: "#E29417",
        height: 45,
        // fontFamily: 'Ubuntu-Bold',
        fontStyle: "normal",
        alignItems: "center",
        textAlign: "center",
        width: 150,
        bottom: 48,
        left: 210,
        borderRadius: 5,
        resizeMode: "contain",
        marginBottom: -30,
      },
    
      gettingText: {
        fontSize: 18,
        fontWeight: "bold",
        top: 15,
        color: "#FFFFFF",
      },

      addTagText: {
        fontSize: 18,
        fontWeight: "bold",
        top: 8.8,
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
      bottom: 10,
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

    deleteButton: {
      marginLeft: 90,
      color: "black",
      bottom: 20,
    }
    

});

export default RegisterPets;
