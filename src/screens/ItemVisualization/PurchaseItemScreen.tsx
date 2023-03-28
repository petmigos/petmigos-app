import { Text, View, StyleSheet, TouchableOpacity, Image, Linking } from "react-native";
import React, { useState } from 'react';
import { QuantButton } from "../../components/PetStoreComponents/QuantButton/QuantButton";
import ItemService from "../../services/ItemService";
import { Buy } from "../../use_cases/item/Buy";
import { ValidationMessage } from "../../components/ValidationMessages/ValidationMessage";

const buyItem = new Buy(new ItemService())

import BrownButton from "../../components/BrownButton";
import { useNavigation } from "@react-navigation/native";
const PurchaseItemScreen = ({route}) =>{
    const { item, storeId } = route.params;
    const [quantity, setQuantity] = useState(1);
    const [currentPrice, setCurrentPrice] = useState(item.price);
    const [showMessageError, setShowMessageError] = useState(false);
    const [messageError, setMessageError] = useState("");
    const navigation = useNavigation();

    const handleOpenBrowser = async (url: string) => {
        // Check if the user's device can open the specified URL
        const supported = await Linking.canOpenURL(url);
      
        if (supported) await Linking.openURL(url);
        else console.log(`Não foi possível abrir a URL: ${url}`);
        
      };
      

    function Increment() {
        setQuantity(quantity + 1);
        setCurrentPrice(currentPrice + item.price)
    }
    
    function Decrement() {
        if (quantity > 1) setQuantity(quantity - 1);
        if (currentPrice > item.price) setCurrentPrice(currentPrice - item.price);
    }

    async function SendData(){
        try{
            const itemId = item._id;
            const unitPrice = item.price;
            const title = item.title;
            const purchase: any = await buyItem.execute({storeId, itemId, title, unitPrice, quantity})
            const purchaseObject = JSON.parse(purchase);
            handleOpenBrowser(purchaseObject.url)
            navigation.goBack();

        }
        catch(erro: any){
            console.log(erro.message)
        }
    }


    return(
        <View style={styles.container}>
                <Text style={styles.title}>Comprando <Text style={styles.bold}>{item.title}</Text></Text>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.originalPrice}>R$ {currentPrice}</Text>
                {(item.category !== "Alimentacao") && (item.category !== "Acessorios") ? (
                    <></>
                    ) : (
                    <View style={styles.quantity}>
                        <Text style={styles.quantityText}>Quantidade:  </Text>
                    <QuantButton 
                        quantity={quantity}
                        increment={Increment}
                        decrement={Decrement}
                    />
                    </View>
                )}

                {showMessageError && <ValidationMessage error_text={messageError} />}

                <BrownButton onPress={() => SendData()} title="Finalizar compra"/>
                <Text style={styles.info}>Você será redirecionado para o Mercado Pago</Text>
                
        </View>
                            
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop:  80,
        backgroundColor: "white",
        height: "100%"
    },

    originalPrice:{
        fontSize: 30,
        marginBottom: 30,
        marginTop: 30
    },

    title:{
        fontSize: 20,
        marginBottom: 40
    },

    bold:{
        fontWeight: "bold"
    },

    quantityText:{
        fontSize: 20,
        fontWeight: "400",
        marginBottom: 20
    },

    quantity:{
        display: "flex",
        flexDirection: "row",
        marginBottom: 30
    },

    image: {
        height: 300,
        width: 300,
        resizeMode: "contain",
        borderRadius: 20
    },

    info:{
        fontSize: 12,
        fontStyle: "italic"
    }

})

export default PurchaseItemScreen