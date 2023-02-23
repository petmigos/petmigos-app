import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Alert } from 'react-native';
import styles from '../styles/loginCadastroStyles';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';
import {CompanyService} from '../services/company/companyService';
import LoginUserService from '../services/LoginUserService';
import LoginUser from '../use_cases/LoginUserUC';
import LoginCompany from '../use_cases/LoginCompanyUC';
import { useNavigation } from '@react-navigation/native';
import { ValidationMessage } from '../components/ValidationMessages/ValidationMessage';
import { ButtonGroup } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';


const loginUser = new LoginUser(new LoginUserService());
const loginCompany = new LoginCompany(new CompanyService());
export let id_user = "";
export let id_comp = "";


export default function LoginScreen() {
    
    const [result, onChangeResult] = React.useState('(result');
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
     
    async function save_id(password, ident) {
        await SecureStore.setItemAsync(password, ident);
    }

    async function getValueForUser(password) {
        let result = await SecureStore.getItemAsync(password);
        if (result) {
           id_user = result;
        }

        }

    async function getValueForComp(password) {
        let result = await SecureStore.getItemAsync(password);
        if (result) {
            id_comp = result;
        }
    
        }

    function goToPickUp(){
        navigation.navigate("PickUpSignUp");
    }

    //Função responsável pelo envio de dados ao backend
    async function SendData() {

        try {
            if (selectedIndex == 0) {
                const loggeduser = await loginUser.execute(username, password);
                save_id(loggeduser.password, loggeduser._id);
                getValueForUser(password);
                console.log(id_user);
                setShowMessageError(false);
            }
            else {
                const loggedcompany = await loginCompany.execute(username, password);
                save_id(loggedcompany.password, loggedcompany.cnpj);
                getValueForComp(password)
                console.log(id_comp);
                setShowMessageError(false);
 
            }

            navigation.navigate('TabNavigator');

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
                    containerStyle={{ marginTop: 40, marginBottom: 50 }} />
                <TouchableOpacity onPress={goToPickUp}>
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


