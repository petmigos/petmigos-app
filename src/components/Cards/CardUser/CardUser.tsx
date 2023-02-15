import React from 'react';
import { background, erro, primary, secondary_v2, superficie, textPadrao } from '../../../styles/colors';
import { Text, View, Image, ImageSourcePropType } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { TouchableOpacity } from 'react-native-gesture-handler';

type CardUserProps = {
    name: string,
    category: string,
    price: Float,
    categoryImage: ImageSourcePropType,
    mainImage: ImageSourcePropType,
};

export const CardUser = (props: CardUserProps) => {
    return (
        <TouchableOpacity style={styles.component}>
            <View style={styles.component}>
                <Image
                    source={props.mainImage}
                    style={styles.mainImage} />
                <View style={styles.info}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.category}>{props.category}</Text>
                </View>

                <View style={styles.rightComponent}>
                    <Image
                        source={props.categoryImage}
                        style={styles.categoryImage} />
                    <Text style={styles.price} >R${props.price}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    component: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: background,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: textPadrao,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
    },

    mainImage: {
        margin: 10,
        height: 50,
        width: 60,
    },

    info: {
        flex: 3,
    },

    name: {
        fontSize: 25,
    },

    category: {
        color: secondary_v2,
    },

    rightComponent: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },

    price: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
    },

    categoryImage: {
        width: 10,
        height: 10,
    }


});