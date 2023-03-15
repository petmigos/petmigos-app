import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const ItemCard = ({title, price, image, onPress}) => {
  return(
    <TouchableOpacity style={style.item} onPress={onPress}>
                <Image source={{ uri: image }} style={style.item_icon}/>
                <Text style={style.item_name}>{title}</Text>
                <Text style={style.item_price}>R$ {price}</Text>
    </TouchableOpacity>
  )
};

const style = StyleSheet.create({
    item:{
        margin: 14,
        display: 'flex',
        alignItems: 'center',
    },

    item_icon:{
        borderRadius: 16,
        width: 170,
        height: 170
    },
    item_name:{
        fontWeight: 'bold',
        fontSize: 18
    },
    item_price:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#D9A77D"
    }
})


export default ItemCard;
