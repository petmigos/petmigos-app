import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { alerta, background, erro, padrinhoAds, primary } from "../../../styles/colors";
import { ImageBackground, StyleSheet } from "react-native";


type PadrinhoAdsProps = {
  onPress: () => void;
};

export const PadrinhoAds = (props: PadrinhoAdsProps) => {
  return (
    <View style={styles.component}>
      <View style={styles.leftAD}>
        <Text style={styles.mainText}>
          Cuide dos pets de outros donos e ganhe dinheiro!
        </Text>
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
          <Text style={styles.buttonText}>Torne-se um padrinho!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightAD}>
        <Image
          style={styles.image}
          source={require("../../../../assets/padrinhoImg.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: "gray",
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
    
  },

  button: {
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 7,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 15,
    width: '85%'
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