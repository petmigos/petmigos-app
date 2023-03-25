import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Hygiene } from "../../../entities/hygiene";
import { formatDate } from "./formatDate";
import { erro } from "../../../styles/colors";

interface Props {
  hygiene: Hygiene;
  onPress: () => void;
}

const COLORS = {
  HIGH: "#D65B5B",
  ALERT: "#FFAD33",
  LOW: "#6AA55C",
  NONE: "#9B9B9B",
};

const HygieneCard: React.FC<Props> = ({ hygiene, onPress }) => {
  const colorStatus = getColorStatus(hygiene);
  function getColorStatus(hygiene: Hygiene): string {
    if (!hygiene.done && hygiene.date < new Date()) return COLORS.HIGH;
    if (hygiene.done) return COLORS.LOW;
    if (
      new Date(hygiene.date).getDay() === new Date().getDay() &&
      new Date(hygiene.date).getMonth() === new Date().getMonth() &&
      new Date(hygiene.date).getFullYear() === new Date().getFullYear()
    )
      return COLORS.ALERT;
    return COLORS.NONE;
  }
  return (
    <View style={{ ...styles.container, backgroundColor: colorStatus }}>
      <View style={styles.main}>
        <Text style={styles.hygieneName}>{hygiene.category}</Text>
        <Text style={styles.hygieneRisk}>
          Gravidade: {formatDate(hygiene.date)}
        </Text>
      </View>
      <TouchableOpacity style={styles.options} onPress={onPress}>
        <MaterialIcons name="more-vert" color="#FFF" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default HygieneCard;

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 8,
    height: 72,
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    paddingHorizontal: 12,
  },
  main: {
    flex: 7,
    justifyContent: "center",
  },

  options: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
  },
  hygieneName: {
    color: "white",
    fontSize: 20,
  },
  hygieneRisk: {
    color: "white",
  },
});
