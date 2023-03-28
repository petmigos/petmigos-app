import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { primary } from '../styles/colors';

interface ButtonProps {
  onPress: () => void;
  title: string;
  margin?: Float
}

const BrownButton: React.FC<ButtonProps> = ({ onPress, title, margin=10 }) => (
  <TouchableOpacity style={[styles.button, {marginBottom: margin}]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 343,
    alignItems: 'center',
    backgroundColor: primary,
    padding: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default BrownButton;
