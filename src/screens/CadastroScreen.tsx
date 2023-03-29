import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, TextInput, View, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from '../styles/loginCadastroStyles';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';
import CadastroService from '../services/CadastroUserService';
import Cadastro from '../use_cases/CreateUserUC';
import React from 'react';
import {
    SetImage,
    result,
  } from "../components/PetStoreComponents/SetImage/SetImage";
import { ValidationMessage } from '../components/ValidationMessages/ValidationMessage';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { uploadImg } from '../services/imageService';

var cadastroServ = new CadastroService;
var cadastro = new Cadastro(cadastroServ);

const image = {
    test: require("../../assets/store_test.png"),
  };

export default function CadastroScreen() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [isSelected, setSelection] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);
    const [messageError, setMessageError] = useState("");
    const navigation = useNavigation();

    const handleOkButton = () => {
        navigation.dispatch(
            StackActions.popToTop()
        );
    };

    async function SendData() {

        try {
            const source = {
                uri: result.assets[0].uri,
                type: `test/${result.assets[0].uri.split(".")[1]}`,
                name: `test.${result.assets[0].uri.split(".")[1]}`,
              };
          
              const image_upl = await uploadImg(source);
              const image = image_upl.toString();

            const createduser = await cadastro.execute(username, email, password, confPassword, image);
            setShowMessageError(false);
            Alert.alert(
                "Sucesso!",
                "Usuário cadastrado!",
                [
                    { text: "FAZER LOGIN", onPress: handleOkButton }
                ]
            );
        } catch (error: any) {
            setShowMessageError(true);
            setMessageError(error.message);
        }
    }

    return (
        <ScrollView style={{height: "100%"}}>
        <View style={styles.container_cadastro}>

        <View style={styles.topContainer}>
            <TopInitScreen title='Cadastro'/>
            <SetImage image="../../assets/user_icon.png" />
        </View>
    
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
                    <Text style={styles.label}>Mostrar senha</Text>
                </View>
                <TouchableOpacity style={styles.acessing_button} onPress={SendData}>
                    <Text style={styles.getin_text}>
                        CADASTRO
                    </Text>
                </TouchableOpacity>
                <Text style={styles.bottom_text}>
                    Ao se cadastrar você concorda com nossos
                    <TouchableOpacity >
                        <Text style={styles.privacy_text_link} > termos de uso </Text>

                    </TouchableOpacity>
                    e
                    <TouchableOpacity>
                        <Text style={styles.privacy_text_link}> política de privacidade</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <StatusBar style="auto" />
        </View>
        </ScrollView>
    );
}