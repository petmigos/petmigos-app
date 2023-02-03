import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import Checkbox from 'expo-checkbox';
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

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [showMessageError, setShowMessageError] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [messageError, setMessageError] = useState("");

    async function SendData() {

        try {
            const createduser = await cadastro.execute(username, email, password, confPassword);
            // retona sucesso
            setShowMessageError(false);
        } catch (error: any) {
            setShowMessageError(true);
            setMessageError(error.message);
        }
    }

    return (
        <View style={styles.container}>

            <TopInitScreen title="Cadastro"/>
            {showMessageError && <ValidationMessage error_text={messageError} />}
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
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={!isSelected}>
                </TextInput>
                <TextInput style={styles.input_box}
                    placeholder="Digite sua senha"
                    onChangeText={(text) => setConfPassword(text)}
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