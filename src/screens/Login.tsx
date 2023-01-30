import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { Linking } from 'react-native';
import styles from './styles';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';

export default function Cadastro() {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    //Função responsável pelo envio de dados ao backend
    async function signIn() {
        // Envio para o IP local
        let reqs = await fetch('http://192.168.0.6:3000/acess', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameUser: username,
                passwordUser: password,
            })
        })
    }

    return (
        <View style={styles.container}>

            <TopInitScreen title="Login"/>
            <View style={styles.middle_screen}>

                <TextInput style={styles.input_box}
                    placeholder="Email ou Nome de Usuário">
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Digite sua senha">
                </TextInput>
                <TouchableOpacity style={styles.acessing_button} onPress={signIn}>
                    <Text style={styles.getin_text}>
                        ENTRAR
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.forgot_pass_text}>
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/Google.png')} style={styles.googlebutton}/>
                </TouchableOpacity>
                <Text style={styles.bottom_text}>
                    <Text style={styles.dont_have_account_text}> Não tem uma conta? </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')}>
                        <Text style={styles.sign_up_text} >
                            Cadastre-se!
                        </Text>
                    </TouchableOpacity>
                </Text>

                <StatusBar style="auto" />
            </View>
        </View>

    );
}


