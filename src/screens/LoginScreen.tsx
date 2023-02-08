import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Linking, Alert} from 'react-native';
import styles from '../styles/styles';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';
import LoginService from '../services/LoginService';
import Login from '../use_cases/LoginUC';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ValidationMessage } from '../components/ValidationMessages/ValidationMessage';
import React from 'react';

var loginServ = new LoginService();
var login = new Login(loginServ);

export default function LoginScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSelected, setSelection] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);
    const [messageError, setMessageError] = useState("");
    const navigation = useNavigation();
    
    const handleOkButton = () => {
        console.log("Usuário logado com sucesso!");
    };

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Refreshed!');
        });
        return unsubscribe;
    }, [navigation]);

    //Função responsável pelo envio de dados ao backend
    async function SendData() {
        
        try {
            const loggeduser = await login.execute(username, password);
            setShowMessageError(false);
            Alert.alert(
                "Sucesso!",
                "Usuário logado!",
                [
                    { text: "Recomeçar", onPress: handleOkButton }
                ]
            );

        } catch (error: any) {
            setShowMessageError(true);
            setMessageError(error.message);
        }
       
    }

    return (
        <View style={styles.container}>

            <TopInitScreen title="Login" />

            {showMessageError && <ValidationMessage error_text={messageError} />}

            <View style={styles.middle_screen} >
                <TextInput style={styles.input_box}
                    placeholder="Email"
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
                <TouchableOpacity onPress={() => navigation.navigate("PickUpSignUp")}>
                    <View style={styles.bottom_text}>
                        <Text style={styles.dont_have_account_text}> Não tem uma conta? </Text>
                            <Text style={styles.sign_up_text} >
                                Cadastre-se!
                            </Text>
                    </View>
                </TouchableOpacity>

                <StatusBar style="auto" />
            </View>
        </View>

    );
}


