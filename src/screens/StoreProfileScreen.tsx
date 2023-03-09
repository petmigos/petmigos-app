import { Text, View, StyleSheet } from "react-native";

const StoreProfileScreen = () =>{
    return(
        <View style={styles.container}>
            <Text>
                MEU PERFIL DE LOJA
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

export default StoreProfileScreen;