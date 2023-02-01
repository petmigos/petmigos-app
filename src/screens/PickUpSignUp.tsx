import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { desabilitado, sucesso } from '../styles/colors';

const PickUpSignUp: React.FC<Props> = () => {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <Image source={require('../../assets/cat_back.png')}/>
        <Button 
        title="Empresa" 
        onPress={() => navigation.navigate('SignUpCompany')} 
        accessibilityLabel="Press this red button" 
        color="#FF0000" 
        />
        <Button
        title="Usuário" 
        onPress={() => navigation.navigate('CadastroScreen')} 
        accessibilityLabel="Press this blue button" 
        />
    </View>
);
};

const styles = StyleSheet.create({
  container:{
    marginTop: 100
  },

  button:{
    backgroundColor: 'yellow'
  }
});

export default PickUpSignUp;
