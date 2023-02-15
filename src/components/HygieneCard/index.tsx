import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Hygiene } from "../../entities/hygiene";
import { formatDate } from "./formatDate";

interface Props {
  hygiene: Hygiene;
}

const HygieneCard: React.FC<Props> = ({ hygiene }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: "#9B9B9B" }}>
      <View style={styles.main}>
        <Text style={styles.hygieneName}>{hygiene.category}</Text>
        <Text style={styles.hygieneRisk}>
          Gravidade: {formatDate(hygiene.date)}
        </Text>
      </View>
      <View style={styles.options}>
        <MaterialIcons name="more-vert" color="#FFF" size={24} />
      </View>
    </View>
  );
};

export default HygieneCard;

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
  hygieneName: {
    color: "white",
  },
  hygieneRisk: {
    color: "white",
  },
});
