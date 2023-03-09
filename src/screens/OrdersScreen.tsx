import { Text, View, StyleSheet } from "react-native";

const OrdersScreen = () =>{
    return(
        <View style={styles.container}>
            <Text>
                ACOMPANHAMENTO DE PEDIDOS
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems: "center",
         justifyContent: "center",
         marginTop: 80
    }
})

export default OrdersScreen;