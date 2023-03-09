import { Text, View, StyleSheet } from "react-native";

const MyStoreScreen = () =>{
    return(
        <View style={styles.container}>
            <Text>
                MINHA LOJA
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

export default MyStoreScreen;