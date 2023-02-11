import {View, Text, StyleSheet } from "react-native"
import { background } from "../styles/colors";
import StoreCard from "../components/StoreCard/StoreCard";


const StoreList = () =>{
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header_text}>Loja</Text>
        </View>
        <View style={styles.store_list}>
        <StoreCard/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        //backgroundColor: background
    },

    store_list:{
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})



export default StoreList;