import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Hygiene } from "../../../entities/hygiene";
import { formatDate } from "./formatDate";
import { erro } from "../../../styles/colors";
import { diff } from "date-arithmetic";

interface Props {
  hygiene: Hygiene;
  onPress: () => void;
}

const COLORS = {
  DONE: "#6AA55C",
  LATE: "#D65B5B",
  COMING: "#FFAD33",
  NONE: "#9B9B9B",
};

const HygieneCard: React.FC<Props> = ({ hygiene, onPress }) => {
  function getColorStatus(hygiene: Hygiene): string {
    if (
      !hygiene.done &&
      new Date(hygiene.date).getDate() < new Date().getDate()
    )
      return COLORS.LATE;
    if (!hygiene.done && diff(new Date(), new Date(hygiene.date), "day") < 7)
      return COLORS.COMING;
    if (hygiene.done) return COLORS.DONE;
    return COLORS.NONE;
    }
    
  const colorStatus = getColorStatus(hygiene);
  return (
    <View style={{ ...styles.container, backgroundColor: colorStatus }}>
      <View style={styles.main}>
        <Text style={styles.hygieneName}>{hygiene.category}</Text>
        <Text style={styles.hygieneRisk}>
          <Text style={{ fontWeight: "bold" }}>{formatDate(hygiene.date)}</Text>
          {" | "}
          {hygiene.description}
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
