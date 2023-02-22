import { Text, View, Image } from "react-native"
import React from "react";
import { alerta, background, erro, padrinhoAds, primary } from "../../../styles/colors";
import { ImageBackground, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";




export const PadrinhoAds = () => {

    return (
      <View style={styles.component}>
        <View style={styles.leftAD}>
          <Text style={styles.mainText}>
            Cuide dos pets de outros donos e ganhe dinheiro!
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Torne-se um padrinho!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightAD}>
          <Image style={styles.image} source={require("../../../../assets/padrinhoImg.png")}/>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: padrinhoAds,
    margin: 25,
    flexDirection: "row",
    borderRadius: 15,
  },

  leftAD: {
    flex: 2,
  },

  mainText: {
    fontSize: 15,
    color: background,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },

  button: {
    backgroundColor: alerta,
    borderRadius: 10,
    padding: 7,
    marginRight: 10,
    marginLeft: 10,
  },

  buttonText: {
    color: background,
    textAlign: "center",
    fontWeight: "bold",
  },

  rightAD: {
    flex: 1.1,
    justifyContent: "center",
  },

  image: {
    height: 80,
    width: 110,
  },
});