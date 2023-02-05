import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Linking } from 'react-native';
import styles from './styles';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';
import LoginService from '../services/LoginService';
import Login from '../use_cases/LoginUC';
import React from 'react';
import { ValidationMessage } from '../components/ValidationMessages/ValidationMessage';

var loginServ = new LoginService();
var login = new Login(loginServ);
var logged;

export default function LoginScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showMessageError, setShowMessageError] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [messageError, setMessageError] = useState("");
    const[errorShow, setErrorShow] = useState(false);
    const[errorEmpty, setErrorEmpty]= useState(false);
    

    //Função responsável pelo envio de dados ao backend
    async function SendData() {
        
        try {
            const createduser = await login.execute(username, password);
            if ((username === "" || password === ""))
            {
                setErrorEmpty(true);
                setTimeout(clearErrorEmpty, 3000);
            }
            else if (createduser === undefined) 
            {
                setErrorShow(true);
                setTimeout(clearError, 3000);
            }
            // retona sucesso
            setShowMessageError(false);
        } catch (error: any) {
            setShowMessageError(true);
            setMessageError(error.message);
        }
       
    }

    function clearError() {
        setErrorShow(false);
    }

    function clearErrorEmpty(){
        setErrorEmpty(false);
    }

    return (
        <View style={styles.container}>

            <TopInitScreen title="Login" />

            {
            errorShow ? (
                <Text>Usuário ou senha estão incorretos</Text>
            ) : null
            }

            {
            errorEmpty ? (
                <Text>Preencha todos os campos</Text>
            ) : null
            }

            <View style={styles.middle_screen} >
                <TextInput style={styles.input_box}
                    placeholder="Email ou Nome de Usuário"
                    onChangeText={(text) => setUsername(text)}>
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Digite sua senha"
                    onChangeText={(text) => setPassword(text)} 
                    secureTextEntry={!isSelected}>
                </TextInput>
                
                <View style={styles.check_box_container}>
                        <Checkbox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        color={isSelected ? '#915E36' : undefined}
                        />
                        <Text style={styles.label}>Show password</Text>
                    </View>
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
                    <Image source={require('../../assets/Google.png')} style={styles.googlebutton} />
                </TouchableOpacity>
                <View style={styles.bottom_text}>
                    <Text style={styles.dont_have_account_text}> Não tem uma conta? </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')}>
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


