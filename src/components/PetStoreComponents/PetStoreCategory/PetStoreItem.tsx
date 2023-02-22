import { StyleSheet } from "react-native";
import { background, primary, superficie } from "../../../styles/colors";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";

type ItemProps = {
  image: ImageSourcePropType;
  title: string;
  size: object;
};

export const PetStoreItem = (props: ItemProps) => {
  return (
    <View style={styles.component}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Image source={props.image} style={props.size} />
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    backgroundColor: background,
    width: 82.5,
    height: 100,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
    backgroundColor: superficie,
    borderColor: primary,
    borderWidth: 1.3,
    borderRadius: 14,
    margin: 5,
  },

  text: {
    fontSize: 12,
    fontWeight: "400",
  },
});
