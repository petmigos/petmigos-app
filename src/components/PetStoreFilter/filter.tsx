import { PetStoreItem } from "../PetStoreCategory/PetStoreItem"
import { View, StyleSheet } from 'react-native';
import { background } from "../../styles/colors";

const images = {
    heart: require("../../../assets/petstoreitems/heart.png"),
    drop: require("../../../assets/petstoreitems/drop.png"),
    medical: require("../../../assets/petstoreitems/medical.png"),
    home: require("../../../assets/petstoreitems/home.png"),
    needle: require("../../../assets/petstoreitems/needle.png"),
    food: require("../../../assets/petstoreitems/food.png"),
    pet: require("../../../assets/petstoreitems/pet.png"),
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 2,
        backgroundColor: background,
        textAlign: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    }
})

const PetStoreFilter = ()=>{
    return(
        <View style={styles.topContainer}>
                <PetStoreItem title='Acessórios' image={images.heart} size={{ width: 23, height: 20 }}/>
                <PetStoreItem title='Banho e Tosa' image={images.drop} size={{ width: 18, height: 26 }} />
                <PetStoreItem title='Consultas' image={images.medical} size={{ width: 24, height: 26 }} />
                <PetStoreItem title='Padrinhos' image={images.home} size={{ width: 23, height: 23 }} />
                <PetStoreItem title='Alimentação' image={images.food} size={{ width: 23, height: 24 }} />
                <PetStoreItem title='Exames' image={images.needle} size={{ width: 27, height: 27 }} />
                <PetStoreItem title='Adestramento' image={images.pet} size={{ width: 25, height: 30 }} />
            </View>
    )
}

export default PetStoreFilter;