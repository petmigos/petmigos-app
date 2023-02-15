import { View, Text} from 'react-native';
import styles from "../styles/petStoreStyles"
import { TitleScreenComp } from '../components/TitleScreen/TitleScreenComp';
import { PetStoreItem } from '../components/PetStoreCategory/PetStoreItem';
import { Line } from '../components/Line/Line';
import { BottomButton } from '../components/BottomButton/BottomButton';
import { CardUser } from '../components/Cards/CardUser/CardUser';
import { ScrollView } from 'react-native-gesture-handler';


const images = {
    heart: require("../../assets/petstoreitems/heart.png"),
    drop: require("../../assets/petstoreitems/drop.png"),
    medical: require("../../assets/petstoreitems/medical.png"),
    home: require("../../assets/petstoreitems/home.png"),
    needle: require("../../assets/petstoreitems/needle.png"),
    food: require("../../assets/petstoreitems/food.png"),
    pet: require("../../assets/petstoreitems/pet.png"),

}

export default function PetStoreScreen() {

    return (
        <ScrollView>
            <View style={styles.container} >
                <TitleScreenComp title='PetStore' />
                <View style={styles.topContainer}>
                    <PetStoreItem title='Acessórios' image={images.heart} size={{ width: 23, height: 20 }}/>
                    <PetStoreItem title='Banho e Tosa' image={images.drop} size={{ width: 18, height: 26 }} />
                    <PetStoreItem title='Consultas' image={images.medical} size={{ width: 24, height: 26 }} />
                    <PetStoreItem title='Padrinhos' image={images.home} size={{ width: 23, height: 23 }} />
                    <PetStoreItem title='Alimentação' image={images.food} size={{ width: 23, height: 24 }} />
                    <PetStoreItem title='Exames' image={images.needle} size={{ width: 27, height: 27 }} />
                    <PetStoreItem title='Adestramento' image={images.pet} size={{ width: 25, height: 30 }} />
                </View>
                <Line/>
                <View style={styles.bottomContainer}>
                    <BottomButton title="Lojas"/>
                </View>
                <View style={styles.bestSellers}>
                    <Text style={styles.bestSellersText}>Itens mais procurados</Text>
                    <CardUser name="teste" category='Teste' price={56.76} categoryImage={images.heart} mainImage={images.heart}/>
                    <CardUser name="teste" category='Teste' price={56.76} categoryImage={images.heart} mainImage={images.heart}/>
                    <CardUser name="teste" category='Teste' price={56.76} categoryImage={images.heart} mainImage={images.heart}/>
                </View>
            </View>
        </ScrollView>
    )
}
