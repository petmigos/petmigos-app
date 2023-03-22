import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Allergy } from "../../../entities/allergy";
import { erro } from "../../../styles/colors";

interface Props {
  allergy: Allergy;
}

const AllergyCard: React.FC<Props> = ({ allergy }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: "#9B9B9B" }}>
      <View style={styles.main}>
        <Text style={styles.allergyName}>{allergy.name}</Text>
        <View style={styles.datails}>
          <Text style={styles.allergyRiskTitle}>Gravidade: </Text>
          <Text style={styles.allergyRisk}>{allergy.risk}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.options}>
        <MaterialIcons name="more-vert" color="#FFF" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default AllergyCard;

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 5,
    width: "90%",
    height: 72,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    paddingHorizontal: 15,
  },
  main: {
    justifyContent: "center",
  },
  options: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
  },
  allergyName: {
    color: "white",
    fontSize: 20,
  },

  datails: {
    flexDirection: "row",
  },

  allergyRiskTitle: {
    color: "white",
  },

  allergyRisk: {
    color: "white",
    fontWeight: "800",
  },
});
