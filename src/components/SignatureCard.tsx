import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { desabilitado, sucesso } from '../styles/colors';

interface SignatureProps {
  logo: any,
  title: string,
  description: string,
  selected,
  onPress
}

const SignatureCard: React.FC<SignatureProps> = ({ logo, title, description, onPress, selected }) => {
  return (
    <TouchableOpacity
                      style={[styles.signature, selected && styles.signature.selected]}
                      onPress={onPress}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signature:{
    width: 343,
    height: 153,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: desabilitado,
    selected: {
      borderColor: sucesso
    },
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

export default SignatureCard;
