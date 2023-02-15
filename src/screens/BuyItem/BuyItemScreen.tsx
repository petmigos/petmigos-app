import { Text, View, StyleSheet, Image} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import BrownButton from '../../components/BrownButton';

export function BuyItemScreen({route}){
    const { item } = route.params;
    
    return(
    <View style={style.container}>
        <ScrollView style={style.content}>
            <Image source={require("../../../assets/store/item.png")}/>
            <Text style={style.item_name}>{item.title}</Text>
            <Text style={style.item_header}>Informação</Text>
            <Text style={style.item_price}>
                <FontAwesome5 name="dollar-sign" size={24} color="black" />
                {item.price}
            </Text>
            <Text style={style.item_description}>
                {item.description}
            </Text>
        </ScrollView>
        <View style={style.button}>
            <BrownButton title='Comprar' onPress={() => console.log("Compre!")}/>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginTop: 32,
        backgroundColor: 'white',
        height: '90%'
    },
    content:{
        margin: 20
    },
    item_name:{
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 24
    },
    item_description:{
        fontSize: 16,
        marginBottom: 10
    },
    item_price:{
        fontSize: 24,
    },
    item_header:{
        marginTop: 16,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button:{
        display: 'flex',
        //marginBottom: 90,
        alignItems: 'center',
        justifyContent: 'center'
    }
})