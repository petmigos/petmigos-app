import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState }from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Company } from "../../entities/company";

const StoreCard: React.FC<Company> = ({ name, category}) => {
  return (
    <View style={styles.box}>
      <View style={styles.store}>
      <View style={styles.store_image}>
        <Image
          style={styles.store_image_view}
          source={require('../../../assets/store_test.png')}
        />
      </View>
      <View style={styles.store_description}>
        <Text style={styles.store_name}>
          {name}
        </Text>
        <Text style={styles.store_category}>{category}.</Text>
      </View>
      <View style={styles.store_km}>
        <Text>
        15 km
        </Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  store: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#00000010",
    marginTop: 16,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    width: '95%'
  },
  store_image: {
    marginRight: 8
  },
  store_image_view: {
    borderRadius: 16,
    width: 64,
    height: 64
  },
  store_description: {
    flex: 3,
  },
  store_name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  store_category: {
    fontSize: 12,
    color: "#DBA87F",
  },
  store_km: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: 8
  },
});

export default StoreCard;
