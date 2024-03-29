import React from "react";
import {
  background,
  complementar1,
  complementar2,
  erro,
  primary,
  secondary_v2,
  superficie,
  textPadrao,
} from "../../../styles/colors";
import { Text, View, Image, ImageSourcePropType } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Item } from "../../../entities/item";
import { err } from "react-native-svg/lib/typescript/xml";


type CardCompanyProps = {
  item: Item;
};

export const CardCompany = ({ item}: CardCompanyProps) => {
  return (
    <View style={styles.component}>
      <Image source={{ uri: item.image }} style={styles.mainImage} />
      <View style={styles.info}>
        <View style={styles.topComponent}>
          <View style={styles.topLeftComponent}>
            <Text style={styles.name}>{item.title}</Text>
          </View>
          <View style={styles.topRightComponent}>
            {item.quantity !== 0 && <Text>Qtd: {item.quantity}</Text>}
          </View>
        </View>

        <View style={styles.botComponent}>
          <View style={styles.botLeftComponent}>
            <Text style={styles.furnisher}>{item.company.name}</Text>
          </View>
          <View style={styles.botRightComponent}>
            <Text style={styles.priceTag}>R$ </Text>
            <Text style={styles.price}>{item.price.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    backgroundColor: background,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    borderRadius: 15,
    borderColor: secondary_v2,
    borderWidth: 1,
  },

  mainImage: {
    borderRadius: 10,
    borderColor: primary,
    borderWidth: 1,
    margin: 10,
    height: 70,
    width: 70,
  },

  info: {
    flex: 3,
  },

  name: {
    fontWeight: "bold",
    backgroundColor: background,
    fontSize: 20,
  },

  topComponent: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 10,
  },

  botComponent: {
    backgroundColor: background,
    flexDirection: "row",
    marginRight: 20,
  },

  botLeftComponent: {
    flex: 4,
    alignItems: "flex-start",
  },

  topLeftComponent: {
    flex: 5,
    alignItems: "flex-start",
  },

  furnisher: {
    fontWeight: "bold",
    fontSize: 15,
    fontStyle: "italic",
  },

  topRightComponent: {
    flex: 2,
    alignItems: "flex-end",
  },

  botRightComponent: {
    flexDirection: "row",
    flex: 3,
  },

  priceTag: {
    fontSize: 20,
    justifyContent: "center",
  },

  price: {
    fontSize: 20,
    color: complementar2,
    justifyContent: "center",
  },

  categoryImage: {
    width: 10,
    height: 10,
  },
});
