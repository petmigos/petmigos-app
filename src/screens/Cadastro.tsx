import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import Logo from "../../assets/logo.svg";
import { Linking } from 'react-native';
import styles from './styles';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';


export default function Cadastro() {

    return (
        <View style={styles.container}>

            <TopInitScreen title="Cadastro"/>
            <View style={styles.middle_screen}>
                <TextInput style={styles.input_box}
                    placeholder="Email">
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Nome de Usuário">
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Digite sua senha">
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Digite sua senha">
                </TextInput>
                <TouchableOpacity style={styles.acessing_button}>
                    <Text style={styles.getin_text}>
                        CADASTRO
                    </Text>
                </TouchableOpacity>
                <Text style={styles.bottom_text}>
                    Ao se cadastrar você concorda com nossos
                    <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
                        <Text style={styles.privacy_text_link} > termos de uso </Text>
                        
                    </TouchableOpacity>
                    e
                    <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')}>
                        <Text style={styles.privacy_text_link}> política de privacidade</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <StatusBar style="auto" />
        </View>

    );
}