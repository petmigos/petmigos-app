import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import UserService from "../../services/userService";
import { User } from "../../entities/user";
import { loggeduser } from "../LoginScreen";
import { primary } from "../../styles/colors";


const Profile: React.FC = () => {
  const created = loggeduser.createdAt;
  return (
    <View style={styles.container}>
      <Image source={{ uri: loggeduser.image }} style={styles.img}/>
      <Text style={styles.title}>
        {loggeduser.name}
      </Text>
      <Text>
        
      </Text>
      <TouchableOpacity onPress={() => console.log("editar")} style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.compras}>
        <Text>Minhas compras</Text>
      </TouchableOpacity>
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

  compras:{
    marginTop: 40
  }

})