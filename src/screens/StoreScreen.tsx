import { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import { small_info } from "../styles/colors";
import { Line } from "../components/Line/Line";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ItemService } from "../services/item/itemService";

function StoreScreen({route}) {
    const [items, setItems] = useState([]);
    const { company } = route.params;
    const navigation = useNavigation();
    const service = new ItemService();

    useEffect(() => {
        service.findAll(company._id).then(data => {
          setItems(data);
        });
      }, []);

    return (
    <ScrollView style={style.container}>
        
      <Image style={style.store_img} source={require("../../assets/store/store_test.png")}/>
      <View style={style.store_info}>
      <Text style={style.store_name}>{company.name}</Text>
      <Text style={style.store_category}>{company.category}</Text>
      <Line/>
      <View style={style.store_list}>
            {items.map(item => (   
                <TouchableOpacity style={style.box_container} key={item._id} 
                onPress={() => navigation.navigate('BuyItemScreen', { item })}>
                <Image source={require("../../assets/store/store_test.png")} style={style.card_img}/>
                    <View style={style.card_info}>
                        <View>
                            <Text style={style.store_title}>{item.title}</Text>
                            <Text style={{color: '#DBA87F'}}>{item.category}</Text>
                        </View>
                        <View style={style.card_left_info}>
                            <Image source={require('../../assets/store/acessorios.png')} style={{marginBottom: 10}}/>
                            <Text style={{color: '#DBA87F'}}>0km</Text>
                        </View>
                    </View>
            </TouchableOpacity>
            ))}
        </View>
      </View>
      
    </ScrollView>
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
        fontSize: 30,
        fontWeight: 'bold'
    },
    store_category:{
        color: small_info,
        fontSize: 18
    },
    store_list:{
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    store_title:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    box_container:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 84,
        width: 330,
        margin: 16,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    card_img:{
        width: 50,
        height: 50,
        borderRadius: 12,
        marginRight: 8
    },
    
    card_info:{
       // backgroundColor: 'red',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    card_left_info:{
        alignItems: 'flex-end',
    }
})

export default StoreScreen;