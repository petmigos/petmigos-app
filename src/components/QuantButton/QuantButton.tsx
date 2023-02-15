import React from 'react';
import { background, erro, primary, superficie } from '../../styles/colors';
import { Text, View, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

type QuantityProps = {
    quantity: number,
    increment: () => void,
    decrement: () => void;
};

export const QuantButton = (props: QuantityProps) => {
    return (
        <View style={styles.component}>
            <TouchableOpacity style={styles.btn} onPress={props.decrement}>
                <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtd}>{props.quantity}</Text>
            <TouchableOpacity style={styles.btn} onPress={props.increment}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    component: {
        backgroundColor: background,
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: primary,
    },

    qtd: {
        flex: 1, 
        textAlign:'center',

    },


});