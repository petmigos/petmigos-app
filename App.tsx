import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';

export default function App() {


	return (
		<View style={styles.container}>

			<Image style={styles.logo_img} source={require('./assets/petmigos_logo_login.png')} />
			<Text style={styles.titleText}>
				Cadastro
			</Text>
			<TextInput style={styles.input_username}
				placeholder="Email">
			</TextInput>
			<TextInput style={styles.input_username}
				placeholder="Nome de Usuário">
			</TextInput>
			<TextInput style={styles.input_username}
				placeholder="Digite sua senha">
			</TextInput>
			<TextInput style={styles.input_username}
				placeholder="Digite sua senha">
			</TextInput>
			<TouchableOpacity style={styles.acessing_button}>
				<Text style={styles.getin_text}>
					CADASTRAR
				</Text>
			</TouchableOpacity>

			<Text style={styles.privacy_text}>
				Não tem uma conta?
			</Text>
			<TouchableOpacity style={styles.sign_up_button}>
				<Text style={styles.sign_up_text}>
					Cadastre-se!
				</Text>
			</TouchableOpacity>

			<StatusBar style="auto" />
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},

	logo_img: {
		top: -100,
	},

	titleText: {
		color: '#000000',
		fontFamily: 'Ubuntu',
		fontWeight: "bold",
		top: -110,
		fontSize: 48,

	},
	input_username: {
		height: 57,
		width: 343,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		top: -100,
		backgroundColor: '#DCDCDC',
		borderRadius: 6,
		opacity: 0.5,
		fontSize: 18,
		borderColor: '#fff',
	},

	acessing_button: {
		backgroundColor: '#915E36',
		width: 343,
		height: 56,
		fontFamily: 'Ubuntu_400Regular',
		fontStyle: 'normal',
		alignItems: 'center',
		textAlign: 'center',
		marginTop: 20,
		top: -80,
		borderRadius: 8,
	},

	getin_text: {
		fontSize: 18,
		fontWeight: "bold",
		top: 15,
		color: '#FFFFFF'
	},

	forgot_pass_text: {
		color: '#000000',
		fontFamily: 'Ubuntu_400Regular',
		fontStyle: 'normal',
		top: -66,
		fontSize: 14,
		opacity: 0.5,
	},

	privacy_text:
	{
		color: '#000000',
		fontFamily: 'Ubuntu_400Regular',
		fontStyle: 'normal',
		top: 20,
		fontSize: 14,
		left: -45,
	},
	sign_up_button:
	{
		border: 'none',
		style: 'transparent',
		color: 'white',
		top: 1,
		left: 70,
	},
	sign_up_text:
	{
		color: 'black',
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		fontSize: 14,
	}


});
