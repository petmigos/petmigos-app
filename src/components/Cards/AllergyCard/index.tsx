import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Allergy, RiskEnum } from "../../../entities/allergy";
import { erro } from "../../../styles/colors";

interface Props {
  allergy: Allergy;
  onPress: () => void;
}

const COLORS = {
  HIGH: "#D65B5B",
  MODERATE: "#FFAD33",
  LOW: "#9B9B9B",
};

const AllergyCard: React.FC<Props> = ({ allergy, onPress }) => {

  function getColorStatus(allergy: Allergy): string {
    if (allergy.risk === RiskEnum.LOW ) return COLORS.LOW;
    if (allergy.risk === RiskEnum.MODERATE) return COLORS.MODERATE;
    if (allergy.risk === RiskEnum.HIGH) return COLORS.HIGH;
  }

  const colorStatus = getColorStatus(allergy);

  return (
    <View
      style={{ ...styles.container, backgroundColor: colorStatus }}
    >
      <View style={styles.main}>
        <Text style={styles.allergyName}>{allergy.name}</Text>
        <View style={styles.datails}>
          <Text style={styles.allergyRiskTitle}>Gravidade: </Text>
          <Text style={styles.allergyRisk}>{allergy.risk}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.options} onPress={onPress}>
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
    marginVertical: 8,
    height: 72,
    borderRadius: 4,
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
