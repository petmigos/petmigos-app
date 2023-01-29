import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, Text, TextInput, View} from 'react-native';
import styles_login from './styles_login';

export default function App() {


    return (
        <View style={styles_login.container}>

            <Image style={styles_login.logo_img} source={require('../../assets/petmigos_logo_login.png')} />
            <Text style={styles_login.titleText}>
                Login
            </Text>
            <TextInput style={styles_login.input_username}
                placeholder="Email ou Nome de Usuário">
            </TextInput>
            <TextInput style={styles_login.input_username}
                placeholder="Digite sua senha">
            </TextInput>
            <TouchableOpacity style={styles_login.acessing_button}>
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


