import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { User } from "../../entities/user";
import { background, erro, primary } from "../../styles/colors";
import * as SecureStore from 'expo-secure-store';
import { useNavigation, StackActions, useIsFocused } from "@react-navigation/native";
import { id_user } from "../Auth/LoginScreen";
import { FindById } from "../../use_cases/user/FindById";
import UserService from "../../services/userService";

const findById = new FindById(new UserService())


const Profile: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<User>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){
      async function fetch(user_id: string) {
        const user = await findById.execute(user_id);
        setUser(user);
      }

      fetch(id_user);
    }
  }, [isFocused]);

  async function handleLogout() {
    try {
     
      await SecureStore.deleteItemAsync(id_user).then(
          () => navigation.reset({
            index: 0,
            routes: [{ name: "Auth" }]
          })
      );
    } catch (error) {
      console.log('Error while logging out:', error);
    }
  }


  return (
    <View style={styles.container}>
      {user ? (
        <>
      <Image source={{ uri: user.image }} style={styles.img}/>
      <Text style={styles.title}>
        {user.name}
      </Text>
      <TouchableOpacity onPress={() => console.log("editar")} style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
      
        <TouchableOpacity style={styles.logoutButton}onPress={() => handleLogout()}>
          <Text style={styles.gettingTextlogout}> SAIR</Text>
        </TouchableOpacity>
      </>
      ):(
        <><Text>Carregando...</Text></>
      )}
    </View>
  );
};

export default Profile;


const styles = StyleSheet.create({
  container:{
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 50
  },

  title:{
    marginTop: 15,
    fontSize: 20,
    fontWeight: "700"
  },

  img:{
    width: 190, 
    height: 190,
    borderRadius: 90
  },

  button:{
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: primary,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  },

  buttonText:{
    fontSize: 16,
    fontWeight: "700",
    color: primary
  },

  middleScreen: {
    flex: 2,
    marginTop: 40,
    backgroundColor: background,
    marginHorizontal: 30,
    width: "30%",
  },

  compras:{
    marginTop: 40
  },

  myItemsButton: {
    backgroundColor: "#915E36",
    height: 56,
    // fontFamily: 'Ubuntu-Bold',
    fontStyle: "normal",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    resizeMode: "contain",
  },

  logoutButton: {
    marginTop: 40,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "red",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  },


  gettingTextlogout: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },

})