import {View, Text, StyleSheet } from "react-native"
import StoreCard from "../components/StoreCard/StoreCard";
import { useNavigation } from "@react-navigation/native";

const StoreList = () =>{
    const navigation = useNavigation();

    const funfou = () =>{
        console.log("funfou")
    }
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header_text}>Loja</Text>
        </View>
        <View style={styles.store_list}>
        <StoreCard onPress={funfou}/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: background
    },
    header:{
        display: 'flex',
        marginTop: '16%',
        marginLeft: '8%',
        //fontFamily: 'Ubuntu'
    },
    header_text:{
        fontSize: 36,
        fontWeight: 'bold'
    },
    store_list:{
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})



export default StoreList;