import React, { useState } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { desabilitado, sucesso } from '../styles/colors';

interface SignatureProps {
  logo: any,
  title: string,
  description: string,
  selected: boolean,
  setSelected: (value: boolean) => void,
}

const SignatureCard: React.FC<SignatureProps> = ({ logo, title, description, selected, setSelected }) => {
  return (
    <TouchableOpacity onPress={() => setSelected(!selected)}
                      style={[styles.signature, selected && styles.signature.selected]}>
      <Image source={logo} style={styles.signature.logo} />
      <View style={styles.text}>
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: desabilitado,
        selected: {
          borderColor: sucesso
        },
        logo:{
          width: 90,
          height: 90
        }
      },
      text:{
        flexDirection: 'column',
        maxWidth: '70%',
        textAlign: 'justify',
        padding: 10
      }
});

export default SignatureCard;
