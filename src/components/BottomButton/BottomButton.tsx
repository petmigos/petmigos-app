import React from 'react';
import { background, erro, primary, superficie } from '../../styles/colors';
import { Text, View, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { StyleSheet } from 'react-native';

type ButtonProps = {
    title: string;
    function?;
};

export const BottomButton = (props: ButtonProps) => {
    return (
        <TouchableOpacity onPress={props.function}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    button: {
        backgroundColor: background,
        borderColor: primary,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 10,
        marginRight: 25,
        marginLeft: 25,
        height: 50,
    },

    text: {
        textAlign: 'center',
        color: primary,
        fontWeight: 'bold',
        fontSize: 25, 
    }
});