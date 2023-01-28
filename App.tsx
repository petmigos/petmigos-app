import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
import Logo from "./assets/logo.svg";
import { Linking } from 'react-native';
import DropShadow from "react-native-drop-shadow";

export default function App() {

	return (
		<View style={styles.container}>

			<Logo style={styles.logo_img}/>
			<Text style={styles.titleText}>
				Cadastro
			</Text>
			<View style={styles.middle_screen}>
				<TextInput style={styles.input_box}
					placeholder="Email">
				</TextInput>
				<TextInput style={styles.input_box}
					placeholder="Nome de Usuário">
				</TextInput>
				<TextInput style={styles.input_box}
					placeholder="Digite sua senha">
				</TextInput>
				<TextInput style={styles.input_box}
					placeholder="Digite sua senha">
				</TextInput>
				<TouchableOpacity style={styles.acessing_button}>
					<Text style={styles.getin_text}>
						CADASTRAR
					</Text>
				</TouchableOpacity>
				<Text style={styles.privacy_text}>
					Ao se cadastrar você concorda com nossos 
					<Text style={styles.privacy_text_link} onPress={() => Linking.openURL('https://google.com')}> termos de uso </Text>
					e 
					<Text style={styles.privacy_text_link} onPress={() => Linking.openURL('https://youtube.com')}> política de privacidade</Text>
				</Text>
			</View>



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
		marginBottom: 10,
	},

	titleText: {
		color: '#000000',
		// fontFamily: 'Ubuntu-Bold',
		fontWeight: "bold",
		fontSize: 48,

	},

	middle_screen: {
		backgroundColor: '#FFFFFF',
		width: 300,
	},

	input_box: {
		height: 57,
		marginTop: 20,
		borderWidth: 1,
		padding: 10,
		backgroundColor: '#DCDCDC',
		borderRadius: 6,
		opacity: 0.5,
		fontSize: 18,
		borderColor: '#fff',
	},
	acessing_button: {
		backgroundColor: '#915E36',
		height: 56,
		// fontFamily: 'Ubuntu-Bold',
		fontStyle: 'normal',
		alignItems: 'center',
		textAlign: 'center',
		marginTop: 30,
		borderRadius: 8,
	},


	getin_text: {
		fontSize: 18,
		fontWeight: "bold",
		top: 15,
		color: '#FFFFFF'
	},

	privacy_text_link: {
		color: '#A04D0B',
		textDecorationLine: "underline",
	},

	privacy_text:
	{
		color: '#000000',
		// fontFamily: 'Ubuntu-Regular',
		fontStyle: 'normal',
		paddingTop: 10,
		textAlign: 'center',
		fontSize: 12,
	},


});
