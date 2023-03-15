import { ImageBackground, StyleSheet } from "react-native";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { background, erro, primary, superficie } from "../../../styles/colors";
import { Input } from "react-native-elements";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export let result;


type SetImageProps = {
  image: string;
};

export const SetImage = ({ image }: SetImageProps) => {
  const [itemImage, setItemImage] = useState(image);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setItemImage(result.assets[0].uri);
    }
  };

  const uploadImage = () => {
    console.log(typeof itemImage);
  };

  return (
    <View style={styles.component}>
      <TouchableOpacity
        onPress={() => {
          pickImage();
          uploadImage();
        }}
      >
        {itemImage ? (
          <Image source={{ uri: itemImage }} style={styles.image} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
},

image: {
	marginTop: 10,
	backgroundColor: superficie,
    flex: 1,
    borderRadius: 250,
    height: 200,
    width: 200,
    resizeMode: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
