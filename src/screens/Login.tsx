import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, Text, TextInput, View} from 'react-native';
import styles_login from './styles_login';

export default function App() {
    
    const[username, setUsername] = useState(null);
    const[password, setPassword] = useState(null);

    //Função responsável pelo envio de dados ao backend
    async function signIn()
    {
        // Envio para o IP local
        let reqs = await fetch('http://192.168.0.6:3000/acess', {
            method: 'POST',
            headers:{
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
        <View style={styles_login.container}>
            
            <Image style={styles_login.logo_img} source={require('../../assets/petmigos_logo_login.png')} />
            <Text style={styles_login.titleText}>
                Login
            </Text>
            <TextInput style={styles_login.input_username}
                placeholder="Email ou Nome de Usuário"
                onChangeText={(text)=>setUsername(text)}/>
            <TextInput style={styles_login.input_username}
                placeholder="Digite sua senha"
                onChangeText={(text)=>setPassword(text)}/>
           
            <TouchableOpacity style={styles_login.acessing_button} onPress={signIn}>
                <Text style={styles_login.getin_text}>
                    ENTRAR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles_login.forgot_pass_text}>
                    Esqueceu a senha?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../assets/Google.png')} />
            </TouchableOpacity>
            <Text style={styles_login.dont_have_account_text}>
                Não tem uma conta?
            </Text>
            <TouchableOpacity style={styles_login.sign_up_button}>
                <Text style={styles_login.sign_up_text}>
                    Cadastre-se!
                </Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>

    );
}


