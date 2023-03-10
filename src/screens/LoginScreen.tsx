import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Alert } from 'react-native';
import styles from '../styles/styles';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';
import LoginCompanyService from '../services/LoginCompanyService';
import LoginUserService from '../services/LoginUserService';
import LoginUser from '../use_cases/LoginUserUC';
import LoginCompany from '../use_cases/LoginCompanyUC';
import { useNavigation } from '@react-navigation/native';
import { ValidationMessage } from '../components/ValidationMessages/ValidationMessage';
import React from 'react';
import { ButtonGroup } from 'react-native-elements';

var loginUser = new LoginUser(new LoginUserService());
var loginCompany = new LoginCompany(new LoginCompanyService());


export default function LoginScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSelected, setSelection] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);
    const [type, setType] = useState(false);
    const [messageError, setMessageError] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
    const navigation = useNavigation();

    const handleOkButton = () => {
        console.log("Logado com sucesso!");
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
            if (selectedIndex == 0)
            {
                const loggeduser = await loginUser.execute(username, password);
                setShowMessageError(false);
                Alert.alert(
                    "Sucesso!",
                    "Usuário logado!",
                    [{ text: "Recomeçar", onPress: handleOkButton }]
                );
            }
            else
            {
                const loggedcompany = await loginCompany.execute(username, password);
                setShowMessageError(false);
                Alert.alert(
                    "Sucesso!",
                    "Empresa logada!",
                    [{ text: "Recomeçar", onPress: handleOkButton }]
                );
            }

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
                    <Text style={styles.label}>Mostrar senha</Text>
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
                <ButtonGroup
                    selectedButtonStyle={styles.enable}
                    buttons={['Dono de pet', 'Empresa']}
                    selectedIndex={selectedIndex}
                    onPress={(value) => {
                        setSelectedIndex(value);
                    }}
                    containerStyle={{marginTop: 40, marginBottom: 50}}/>
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


