import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import Logo from "./assets/logo.svg";
import { Linking } from 'react-native';
import styles from './styles';

export default function Cadastro() {

    return (
        <View style={styles.container}>

            <Logo style={styles.logo_img} />
            <Text style={styles.titleText}>
                Cadastro
            </Text>
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
                        CADASTRAR
                    </Text>
                </TouchableOpacity>
                <Text style={styles.privacy_text}>
                    Ao se cadastrar você concorda com nossos
                    <Text style={styles.privacy_text_link} onPress={() => Linking.openURL('https://google.com')}> termos de uso </Text>
                    e
                    <Text style={styles.privacy_text_link} onPress={() => Linking.openURL('https://youtube.com')}> política de privacidade</Text>
                </Text>
            </View>

            <StatusBar style="auto" />
        </View>

    );
}