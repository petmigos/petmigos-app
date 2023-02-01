import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { Linking } from 'react-native';
import styles from '../styles/styles';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';
import LoginService from '../services/LoginService';
import Login from '../use_cases/LoginUC';
import { useNavigation } from '@react-navigation/native';

var loginServ = new LoginService();
var login = new Login(loginServ);


export default function LoginScreen() {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigation = useNavigation();


    //Função responsável pelo envio de dados ao backend

    function SendData() {
         login.execute(username, password)
    }

    return (
        <View style={styles.container}>

            <TopInitScreen title="Login"/>
            <View style={styles.middle_screen}>

                <TextInput style={styles.input_box}
                    placeholder="Email ou Nome de Usuário"
                    onChangeText={(text)=>setUsername(text)}>
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Digite sua senha"
                    onChangeText={(text)=>setPassword(text)}>
                </TextInput>
                <TouchableOpacity style={styles.acessing_button} onPress={SendData}>
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
                <View style={styles.bottom_text}>
                    <Text style={styles.dont_have_account_text}> Não tem uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("PickUpSignUp")}>
                        <Text style={styles.sign_up_text} >
                            Cadastre-se!
                        </Text>
                    </TouchableOpacity>
                </View>

                <StatusBar style="auto" />
            </View>
        </View>

    );
}


