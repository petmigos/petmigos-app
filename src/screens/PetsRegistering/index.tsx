import React from "react";
import { TouchableOpacity, Text, TextInput, View, StyleSheet, FlatList, Dimensions, Button } from "react-native";
import { background, inputBackground, primary } from "../../styles/colors";
import { useState } from "react";
import {
  SetImage,
  result
} from "../../components/PetStoreComponents/SetImage/SetImage";
import { Picker } from "@react-native-picker/picker";
import { ButtonGroup } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { id_user } from "../Auth/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { ValidationMessage } from "../../components/ValidationMessages/ValidationMessage";
import DateField from 'react-native-datefield';
import { CreatePet } from "../../use_cases/pets/Create";
import { PetService } from "../../services/petService";

var cadastroPet = new CreatePet(new PetService());


const RegisterPets: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const ownerId = id_user;
  const [showMessageError, setShowMessageError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [type, setType] = useState("Acessorios");
  const [birthday, setBirthday] = useState(new Date())
  const [textTag, setTextTag] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [gender, setGender] = useState("Macho");
  const [features, setFeatures] = useState([]);
  const [tag, setTag] = useState("");


  const handleAddItem = (tag: string) => {

    if (tag !== "")
    {
      const newTag = { id: features.length + 1, name: `${tag}` };
      setFeatures([...features, newTag]);
    }

    console.log(features);

  };

  const handleTagDelete = (tagToDelete) => {
    const newTags = features.filter(tag => tag !== tagToDelete);
    setFeatures(newTags);
  }
  
  function petGender() {
      
        if (selectedIndex == 0)
      {
        setGender("Macho")
      }

      else
      {
        setGender("Fêmea")
      }

  }
  
  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.tagText}>{item.name}</Text>
        <TouchableOpacity onPress={() => handleTagDelete(item)}>
          <Text style={styles.deleteButton}>X</Text>
        </TouchableOpacity>
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

      const image_upl = await cadastroPet.uploadImg(source);
      const image = image_upl.toString();
      const tags = features.map(item => item.name);
      console.log(tags);
    
      await cadastroPet.execute({
        ownerId, name, type, birthday, gender, tags, image,
      });
      setShowMessageError(false);

      navigation.goBack();
    } catch (error: any) {
      setShowMessageError(true);
      setMessageError(error.message);
    }
  }

  function TypeChange(itemValue: string) {
    setType(itemValue);
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
          onChangeText={(text) => setName(text)}
        ></TextInput>
    
        <View style={styles.picker}>
          <Picker
            selectedValue={type}
            style={styles.pickCategory}
            onValueChange={(itemValue) => TypeChange(itemValue)}
          >
            <Picker.Item value="Cachorro" label="Cachorro" />
            <Picker.Item value="Gato" label="Gato" />
            <Picker.Item value="Peixe" label="Peixe" />
            <Picker.Item value="Ave" label="Ave" />
            <Picker.Item value="Outro" label="Outro" />
          </Picker>
        </View>
    
        <Text style={styles.bodyTitle}>Data de Nascimento</Text>

        <DateField
         labelDate="Dia"
         labelMonth="Mês"
         labelYear="Ano"
         styleInput={styles.inputDate}
         onSubmit={(value) => {console.log(value), setBirthday(value)}}
         />
 
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
          value={`${textTag}`}
          onChangeText={(text) => {setTag(text), setTextTag(text)}}
        ></TextInput>
        <TouchableOpacity
          style={styles.addTagButton}
          onPress={() => {handleAddItem(tag), setTextTag("")}}
        >
          <Text style={styles.addTagText}>Adicionar</Text>
        </TouchableOpacity>
        <FlatList
        data={features}
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

    tagText: {
      color: "#dba87f",
      top: 9,
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
      color: "gray",
      bottom: 20,
    },

    inputDate: {
      width: '30%',
      borderRadius: 8,
      borderColor: '#cacaca',
      borderWidth: 1,
      backgroundColor: inputBackground,
      marginTop: 40,
    },
    

});

export default RegisterPets;
