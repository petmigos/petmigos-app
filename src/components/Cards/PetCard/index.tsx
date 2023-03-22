import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Pet } from "../../../entities/pet";
import { formatDate } from "./formatDate";

const PetCard: React.FC<Pet> = ({ birthday, gender, imageURL, name }) => {
  return (
    <View style={styles.pet}>
      <View style={styles.pet_image}>
        <Image
          style={styles.pet_image_view}
          source={{
            width: 62,
            height: 62,
            uri: imageURL,
          }}
        />
      </View>
      <View style={styles.pet_description}>
        <Text style={styles.pet_name}>{name}</Text>
        <Text style={styles.pet_age}>{formatDate(birthday)}</Text>
      </View>
      <View style={styles.pet_gender}>
        {gender === "Male" ? (
          <Ionicons name="male-outline" size={20} color="#7FB2DB" />
        ) : (
          <Ionicons name="female-outline" size={20} color="#EC0791" />
        )}
        <Ionicons name="chevron-forward-outline" size={20} color="#52331A" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pet: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#00000010",
    marginTop: 16,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  pet_image: {
    flex: 2,
  },
  pet_image_view: {
    borderRadius: 16,
  },
  pet_description: {
    flex: 3,
  },
  pet_name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  pet_age: {
    fontSize: 12,
    color: "#DBA87F",
  },
  pet_gender: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
});

export default PetCard;
