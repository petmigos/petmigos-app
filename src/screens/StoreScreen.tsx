import { Text, View, StyleSheet, Image } from "react-native";
import { small_info } from "../styles/colors";
import { Line } from "../components/Line/Line";

function StoreScreen({route}) {
    const { companies } = route.params;

    return (
    <View style={style.container}>
      <Image style={style.store_img} source={require("../../assets/store/store_test.png")}/>
      <View style={style.store_info}>
      <Text style={style.store_name}>{companies.name}</Text>
      <Text style={style.store_category}>{companies.category}</Text>
      <Line/>
      </View>
      
    </View>
  );
}

const style = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        padding: 10
    },
    store_info:{
        display: 'flex',
        marginLeft: 10
    },
    store_img:{
        width: 90,
        height: 90,
        borderRadius: 10
    },
    store_name:{
        fontSize: 35,
        fontWeight: 'bold'
    },
    store_category:{
        color: small_info,
        fontSize: 18
    }
})

export default StoreScreen;