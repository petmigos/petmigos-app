import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Allergy } from "../../entities/allergy";

interface Props {
  allergy: Allergy;
}

const AllergyCard: React.FC<Props> = ({ allergy }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: "#9B9B9B" }}>
      <View style={styles.main}>
        <Text style={styles.allergyName}>{allergy.name}</Text>
        <Text style={styles.allergyRisk}>Gravidade: {allergy.risk}</Text>
      </View>
      <View style={styles.options}>
        <MaterialIcons name="more-vert" color="#FFF" size={24} />
      </View>
    </View>
  );
};

export default AllergyCard;

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 8,
    width: "90%",
    height: 72,
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    paddingHorizontal: 12,
  },
  main: {},
  options: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
  },
  allergyName: {
    color: "white",
  },
  allergyRisk: {
    color: "white",
  },
});
