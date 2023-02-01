import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { desabilitado, sucesso } from '../styles/colors';

const PickUpSignUp: React.FC<Props> = () => {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <TouchableOpacity
                      style={[styles.signature]}
                      onPress={() => navigation.navigate('CadastroScreen')}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/pickLogo.png')} style={styles.logo} />
      </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Usuário comum</Text>
        <Text>Quero cuidar dos meus pets!</Text>
    </TouchableOpacity>
        />
    </View>
);
};

const styles = StyleSheet.create({
  container:{
    marginTop: 20
  },
  signature:{
    width: 343,
    height: 153,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: desabilitado
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width: 90,
    height: 90
  },

  textContainer: {
    flexDirection: 'column',
    //alignItems: 'center',
    textAlign: 'justify',
    maxWidth: '70%',
    padding: 10,
  }
});
export default PickUpSignUp;
