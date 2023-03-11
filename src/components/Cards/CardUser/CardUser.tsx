import React from "react";
import {
  background,
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


type CardUserProps = {
  item: Item;
};

export const CardUser = ({ item}: CardUserProps) => {
  return (
    <View style={styles.component}>
      <Image source={{uri: item.image}} style={styles.mainImage} />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{item.title}</Text>
        </View>

        <View style={styles.botComponent}>
          <View style={styles.botLeftComponent}>
            <Text style={styles.furnisher}>{item.company.name}Teste</Text>
          </View>
          <View style={styles.botRightComponent}>
            <Text style={styles.price}>R${item.price}</Text>
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
    fontSize: 20,
  },

  
  botComponent: {
    backgroundColor: background,
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 20,
  },
  
  botLeftComponent: {
    flex: 2,
    alignItems: "flex-start",
  },
  
  furnisher: {
    fontSize: 20,
  },

  botRightComponent: {
    flex: 3,
    alignItems: "flex-end",
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },

  categoryImage: {
    width: 10,
    height: 10,
  },
});
