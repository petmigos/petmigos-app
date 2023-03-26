import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Vaccine } from "../../../entities/vaccine";
import { formatDate } from "./formatDate";
import { diff} from "date-arithmetic";

interface Props {
  vaccine: Vaccine;
  onPress: () => void;
}

const COLORS = {
  DONE: "#6AA55C",
  LATE: "#D65B5B",
  COMING: "#FFAD33",
  NONE: "#9B9B9B",
};

const VaccineCard: React.FC<Props> = ({ vaccine, onPress }) => {

  function getColorStatus(vaccine: Vaccine): string {
    if (!vaccine.applied && new Date(vaccine.date).getDate() < new Date().getDate()) return COLORS.LATE;
    if (!vaccine.applied && diff(new Date(), new Date(vaccine.date), "day") < 5)
      return COLORS.COMING;
    if (vaccine.applied) return COLORS.DONE;
    return COLORS.NONE;
    }
    
  const colorStatus = getColorStatus(vaccine);
    
  return (
    <View style={{ ...styles.container, backgroundColor: colorStatus }}>
      <View style={styles.main}>
        <Text style={styles.vaccineName}>{vaccine.name}</Text>
        <Text style={styles.vaccineDate}>
          {colorStatus === COLORS.DONE ? "" : "Aplicar em "}
          <Text style={{ fontWeight: "bold" }}>
            {formatDate(vaccine.date)}
          </Text>{" "}
          em {vaccine.locale.name}
        </Text>
      </View>
      <TouchableOpacity style={styles.options} onPress={onPress}>
        <MaterialIcons name="more-vert" color="#FFF" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default VaccineCard;

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
  vaccineName: {
    color: "white",
    fontSize: 20,
  },
  vaccineDate: {
    color: "white",
  },
});
