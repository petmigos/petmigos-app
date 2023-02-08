import { Text, View } from 'react-native';
import styles from "../styles/petStoreStyles"
import Title from '../components/Title';
import { PetStoreItem } from "../components/PetStoreCategory/PetStoreItem";


export default function PetStoreScreen() {

    return (
        <View style = {styles.container} >
            <Title message={'ola'} fontSize={40}/>
            <Title message={'ola'} fontSize={40}/>
            <Title message={'ola'} fontSize={40}/>
            <View style={styles.topContainer}>
                <PetStoreItem title='Acessórios' image="../../../assets/petstoreitems/heart.png" />
                <PetStoreItem title='Banho e Tosa' image="../../../assets/petstoreitems/drop.png" />
                <PetStoreItem title='Consultas' image="../../../assets/petstoreitems/medical.png" />
                <PetStoreItem title='Padrinhos' image="../../../assets/petstoreitems/home.png" />
                <PetStoreItem title='Alimentação' image="../../../assets/petstoreitems/food.png" />
                <PetStoreItem title='Exames' image="../../../assets/petstoreitems/needle.png" />
                <PetStoreItem title='Adestramento' image="../../../assets/petstoreitems/pet.png" />
            </View>
        </View>
    )
}
