import { View } from 'react-native';
import styles from "../styles/petStoreStyles"
import { TitleScreenComp } from '../components/TitleScreen/TitleScreenComp';
import PetStoreFilter from '../components/PetStoreFilter/filter';
import { Line } from '../components/Line/Line';
import { BottomButton } from '../components/BottomButton/BottomButton';

export default function PetStoreScreen() {

    return (
        <View style={styles.container} >
            <TitleScreenComp title='PetStore' />
            <PetStoreFilter/>
            <Line/>
            <View style={styles.bottomContainer}>
                <BottomButton title="Lojas"/>
            </View>
        </View>
    )
}
