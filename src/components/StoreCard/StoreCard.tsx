import {TouchableOpacity, Image, StyleSheet, Text, View} from "react-native";

const StoreCard = () =>{
    return(
        <TouchableOpacity style={styles.box_container}>
            <Image source={require("../../../assets/store_test.png")} style={styles.store_img}/>
                <View style={styles.store_info}>
                    <Text style={styles.store_title}>Nome da Loja</Text>
                    <Text style={{color: '#DBA87F'}}>Categoria</Text>
                    <Text>0</Text>
                    <Text>00km</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    store_title:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    box_container:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: '35%',
        width: '84%',
        margin: 30,
        padding: 8,
        borderRadius: 8,
        alignItems: 'center'
    },
    store_img:{
        width: 60,
        height: 60,
        borderRadius: 12,
        marginRight: 8
    },
    
    store_info:{
        backgroundColor: 'red',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    }

})

export default StoreCard;