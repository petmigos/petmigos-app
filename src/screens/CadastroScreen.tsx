import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { Linking } from 'react-native';
import styles from '../styles/styles';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';
import CadastroService from '../services/CadastroService';
import Cadastro from '../use_cases/CadastroUC';
import React from 'react';
import { ValidationMessage } from '../components/ValidationMessages/ValidationMessage';

var cadastroServ = new CadastroService;
var cadastro = new Cadastro(cadastroServ);


export default function CadastroScreen() {

    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confPassword, setConfPassword] = useState(null);
    const [showMessageError, setShowMessageError] = useState(false);

    function SendData() {

        if (!cadastro.execute(username, email, password, confPassword)) {
            setShowMessageError(true);
        } else {
            setShowMessageError(false);
        }
    }

    return (
        <View style={styles.container}>

            <TopInitScreen title="Cadastro" />
            <View style={styles.middle_screen}>
                <TextInput style={styles.input_box}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}>
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Nome de Usuário"
                    onChangeText={(text) => setUsername(text)}>
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Digite sua senha"
                    onChangeText={(text) => setPassword(text)}>
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Digite sua senha"
                    onChangeText={(text) => setConfPassword(text)}>
                </TextInput>
                {showMessageError && <ValidationMessage error_text='Erro!' />}
                <TouchableOpacity style={styles.acessing_button} onPress={SendData}>
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
                    <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} >
                        <Text style={styles.privacy_text_link}> política de privacidade</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <StatusBar style="auto" />
        </View>

    );
}