import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Vaccine } from "../../entities/vaccine";
import { formatDate } from "./formatDate";

interface Props {
  vaccine: Vaccine;
}

const COLORS = {
  HIGH: "#D65B5B",
  ALERT: "#FFAD33",
  LOW: "#6AA55C",
  NONE: "#9B9B9B",
};

const VaccineCard: React.FC<Props> = ({ vaccine }) => {
  const colorStatus = getColorStatus(vaccine);
  function getColorStatus(vaccine: Vaccine): string {
    if (!vaccine.applied && vaccine.date < new Date()) return COLORS.HIGH;
    if (vaccine.applied) return COLORS.LOW;
    if (
      vaccine.date.getDay() === new Date().getDay() &&
      vaccine.date.getMonth() === new Date().getMonth() &&
      vaccine.date.getFullYear() === new Date().getFullYear()
    )
      return COLORS.ALERT;
    return COLORS.NONE;
  }

  return (
    <View style={{ ...styles.container, backgroundColor: colorStatus }}>
      <View style={styles.main}>
        <Text style={styles.vaccineName}>{vaccine.name}</Text>
        <Text style={styles.vaccineDate}>
          {colorStatus === COLORS.LOW ? "" : "Aplicar em "}
          <Text style={{ fontWeight: "bold" }}>
            {formatDate(vaccine.date)}
          </Text>{" "}
          em {vaccine.locale.name}
        </Text>
      </View>
      <View style={styles.options}>
        <MaterialIcons name="more-vert" color="#FFF" size={24} />
      </View>
    </View>
  );
};

export default VaccineCard;

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
  vaccineName: {
    color: "white",
  },
  vaccineDate: {
    color: "white",
  },
});
