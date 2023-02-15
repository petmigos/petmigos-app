import React from 'react';
import { background, erro, primary, superficie } from '../../../styles/colors';
import { Text, View, Image, ImageSourcePropType } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

type CardUserProps = {
    name: string,
    category: string,
    price: Float,
    categoryImage: ImageSourcePropType,
    mainImage: ImageSourcePropType,
};

export const CardUser = (props: CardUserProps) => {
    return (
        <View style={styles.component}>
            <Image
                source={props.mainImage}
                style={styles.mainImage} />
            <View style={styles.info}>
                <Text>{props.name}</Text>
                <Text>{props.category}</Text>
            </View>
            <Text>{props.price}</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({

    component: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: primary,
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
    },

    mainImage: {
        flex: 1,
        margin: 10,
        height: 50,
        width: 50,
    },

    info: {
        flex: 3,
    },

});