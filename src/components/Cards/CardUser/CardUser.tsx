import React from 'react';
import { background, erro, primary, secondary_v2, superficie, textPadrao } from '../../../styles/colors';
import { Text, View, Image, ImageSourcePropType } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ItemData = {
  id: string;
  name: string;
  furnisher: string;
  price: Float;
  mainImage: ImageSourcePropType;
};


type CardUserProps = {
    item: ItemData;
};

export const CardUser = ({item}: CardUserProps) => {
    return (
      <View style={styles.component}>
        <Image source={item.mainImage} style={styles.mainImage} />
        <View style={styles.info}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
          </View>

          <View style={styles.botComponent}>
            <View style={styles.botLeftComponent}>
              <Text style={styles.furnisher}>{item.furnisher}</Text>
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
    borderRadius: 5,
    borderColor: primary,
    borderWidth: 1,
  },

  mainImage: {
    margin: 10,
    height: 50,
    width: 60,
  },

  info: {
    flex: 3,
  },

  name: {
    fontSize: 20,
  },

  furnisher: {
    color: secondary_v2,
    fontSize: 20,
  },

  botComponent: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 20,
  },

  botLeftComponent: {
    flex: 2,
    alignItems: "flex-start",
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